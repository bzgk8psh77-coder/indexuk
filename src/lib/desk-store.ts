import { create } from "zustand";
import { askDesk } from "./desk.functions";

export type DeskMessage = { role: "user" | "assistant"; content: string };

type DeskState = {
  messages: DeskMessage[];
  pending: boolean;
  error: string | null;
  open: boolean;
  setOpen: (open: boolean) => void;
  send: (text: string) => Promise<void>;
  clear: () => void;
};

export const useDesk = create<DeskState>((set, get) => ({
  messages: [],
  pending: false,
  error: null,
  open: false,
  setOpen: (open) => set({ open }),
  clear: () => set({ messages: [], error: null }),
  send: async (text: string) => {
    const content = text.trim();
    if (!content || get().pending) return;
    const next: DeskMessage[] = [...get().messages, { role: "user", content }];
    set({ messages: next, pending: true, error: null });
    try {
      const result = await askDesk({ data: { messages: next } });
      if (!result.ok) {
        set({ pending: false, error: result.error });
        return;
      }
      set({
        pending: false,
        error: null,
        messages: [...get().messages, { role: "assistant", content: result.text }],
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong talking to the desk.";
      set({ pending: false, error: message });
    }
  },
}));
