// Speaks Dexter's replies with a British English voice when the browser has one.
let primed = false;

function britishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  const gb = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en-gb"));
  return (
    gb.find((voice) => /daniel|brian|arthur|ryan|male|uk english male/i.test(voice.name)) ??
    gb[0] ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ??
    null
  );
}

export function primeDexterVoice() {
  if (typeof window === "undefined" || !window.speechSynthesis || primed) return;
  primed = true;
  const primer = new SpeechSynthesisUtterance(" ");
  primer.volume = 0;
  primer.lang = "en-GB";
  window.speechSynthesis.speak(primer);
}

export function stopDexterVoice() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}

export function speakAsDexter(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const clean = text.replace(/[*_#]/g, "").replace(/\s+/g, " ").trim().slice(0, 1400);
  if (!clean) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = "en-GB";
  utterance.rate = 0.94;
  utterance.pitch = 0.88;
  const apply = () => {
    const voice = britishVoice();
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.addEventListener("voiceschanged", apply, { once: true });
    return;
  }
  apply();
}
