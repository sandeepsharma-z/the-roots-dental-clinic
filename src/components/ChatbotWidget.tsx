import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

const quickQuestions = [
  "Hello",
  "What is the implant cost?",
  "What are the clinic timings?",
  "What should I do for tooth pain?",
  "How can I book an appointment?",
];

const botReply = (input: string) => {
  const q = input.toLowerCase();

  if (/(hi|hello|salam|assalam|hey)/.test(q)) {
    return "Hello! I am the The Roots' Dental Clinic assistant. You can ask about implants, pain, braces, cleaning, timings, or booking.";
  }

  if (/(implant|daant lagwana|tooth replacement)/.test(q)) {
    return "The exact dental implant cost depends on your case, X-ray findings, and bone condition. A personalized plan is provided after consultation.";
  }

  if (/(cost|price|fees|charges)/.test(q)) {
    return "Final treatment fees are confirmed after diagnosis. We provide a transparent estimate during consultation.";
  }

  if (/(pain|dard|toothache|sujaan|swelling)/.test(q)) {
    return "If you have severe pain or swelling, do not delay. Avoid very hot or cold foods and visit the clinic for an emergency checkup, or call: 098120 09800.";
  }

  if (/(timing|hours|open|band|close)/.test(q)) {
    return "Clinic timing: Sat-Thu, 9:00 AM - 7:00 PM. Friday closed.";
  }

  if (/(appointment|book|booking|schedule)/.test(q)) {
    return "To book an appointment, fill the Book Now form on this page or call directly: 098120 09800.";
  }

  if (/(address|location|map|kahan)/.test(q)) {
    return "Clinic location: Delhi, India.";
  }

  if (/(braces|aligner|orthodontic)/.test(q)) {
    return "Both braces and aligners are available. The best option depends on your bite condition and age, and the doctor will recommend what suits you best.";
  }

  if (/(cleaning|scaling|whitening|polish)/.test(q)) {
    return "Both dental cleaning and whitening are available. Cleaning is usually completed in 30-45 minutes.";
  }

  if (/(emergency|urgent|bleeding|broken tooth)/.test(q)) {
    return "In an emergency, contact us immediately: 098120 09800. We handle urgent cases including dental pain, fractures, and infections.";
  }

  return "I am your dental assistant. Please ask a specific question about implants, braces, cleaning, pain, timings, address, or appointments.";
};

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hello! I am here to help with your dental questions. Would you like to book a consultation?",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!open || !listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, isTyping]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = (text?: string) => {
    if (isTyping) return;
    const raw = (text ?? input).trim();
    if (!raw) return;

    const userMsg: ChatMessage = { role: "user", text: raw };
    const replyText = botReply(raw);
    const typingDelay = Math.min(1900, Math.max(700, Math.floor(replyText.length * 12)));

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setInput("");

    typingTimeoutRef.current = window.setTimeout(() => {
      const botMsg: ChatMessage = { role: "bot", text: replyText };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, typingDelay);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {open && (
        <div className="mb-3 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden">
          <div className="dental-gradient px-4 py-3 text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <p className="font-display text-base font-semibold">Dental Help Desk</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 text-primary-foreground/90 transition-colors hover:bg-primary-foreground/20"
            >
              <X size={16} />
            </button>
          </div>

          <div ref={listRef} className="h-[300px] overflow-y-auto px-3 py-3 space-y-2 bg-muted/20">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-background border border-border text-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="max-w-[90%] rounded-xl px-3 py-2 text-sm bg-background border border-border text-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted-foreground mr-1">Typing</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse [animation-delay:240ms]" />
                </div>
              </div>
            )}
          </div>

          <div className="px-3 pt-2 pb-3 border-t border-border bg-background">
            <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  disabled={isTyping}
                  className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Type your dental question..."
                disabled={isTyping}
                className="flex-1 rounded-xl border border-border bg-muted/30 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!canSend || isTyping}
                className="dental-gradient inline-flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="dental-gradient inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-xl shadow-primary/30 transition-transform duration-300 hover:scale-105"
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
};

export default ChatbotWidget;

