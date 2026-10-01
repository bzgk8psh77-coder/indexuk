import { create } from "zustand";
import { askDesk } from "./desk.functions";
import { primeDexterVoice, speakAsDexter, stopDexterVoice } from "./dexter-voice";

export type DeskMessage = { role: "user" | "assistant"; content: string };

type DeskState = {
  messages: DeskMessage[];
  pending: boolean;
  error: string | null;
  open: boolean;
  voiceOn: boolean;
  setOpen: (open: boolean) => void;
  setVoiceOn: (voiceOn: boolean) => void;
  send: (text: string) => Promise<void>;
  clear: () => void;
  repeat: () => void;
};

export const useDesk = create<DeskState>((set, get) => ({
  messages: [],
  pending: false,
  error: null,
  open: false,
  voiceOn: true,
  setOpen: (open) => set({ open }),
  setVoiceOn: (voiceOn) => {
    if (!voiceOn) stopDexterVoice();
    set({ voiceOn });
  },
  clear: () => {
    stopDexterVoice();
    set({ messages: [], error: null });
  },
  repeat: () => {
    const last = [...get().messages].reverse().find((message) => message.role === "assistant");
    if (!last || !get().voiceOn) return;
    primeDexterVoice();
    speakAsDexter(last.content);
  },
  send: async (text: string) => {
    const content = text.trim();
    if (!content || get().pending) return;
    primeDexterVoice();
    stopDexterVoice();
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
      if (get().voiceOn) speakAsDexter(result.text);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong talking to the desk.";
      set({ pending: false, error: message });
    }
  },
}));
