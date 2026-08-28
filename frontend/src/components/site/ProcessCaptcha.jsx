import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Check, ShieldCheck, RotateCcw, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * ProcessCaptcha — MiCells® on-brand micro-puzzle CAPTCHA.
 * User taps four scrambled MiCells® process steps into their correct order.
 * Correct order (indices 0..3 in the source array) is [0, 1, 2, 3].
 * Reinforces the brand's process language while blocking scripted bots.
 */
export const ProcessCaptcha = ({ open, onClose, onVerified }) => {
  const { t } = useLanguage();
  const c = t.register.captcha;

  // Correct order: index 0..3. `shuffledOrder` is the display order of chips.
  const [shuffledOrder, setShuffledOrder] = useState(() => shuffle([0, 1, 2, 3]));
  const [placed, setPlaced] = useState([]); // array of source indices, in placement order
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (open) {
      // Fresh shuffle every time the modal is opened
      setShuffledOrder(shuffle([0, 1, 2, 3]));
      setPlaced([]);
      setShake(false);
      setAttempts(0);
      // Prevent body scroll while modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const stepsSource = c.steps;

  const placeStep = (srcIdx) => {
    if (placed.includes(srcIdx) || placed.length >= 4) return;
    setPlaced((cur) => [...cur, srcIdx]);
  };
  const unplaceSlot = (slotIdx) => {
    setPlaced((cur) => cur.filter((_, i) => i !== slotIdx));
  };
  const resetPuzzle = () => {
    setPlaced([]);
    setShuffledOrder(shuffle([0, 1, 2, 3]));
  };

  const isCorrect = useMemo(
    () => placed.length === 4 && placed.every((v, i) => v === i),
    [placed]
  );
  const canConfirm = placed.length === 4;

  const confirm = () => {
    if (!canConfirm) return;
    if (isCorrect) {
      onVerified?.();
    } else {
      setShake(true);
      setAttempts((n) => n + 1);
      toast.error(c.wrong);
      setTimeout(() => {
        setShake(false);
        setPlaced([]);
        setShuffledOrder(shuffle([0, 1, 2, 3]));
      }, 700);
    }
  };

  if (!open) return null;

  return (
    <div
      data-testid="process-captcha"
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-8 bg-[color:var(--mc-secondary)]/72 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className={`relative w-full max-w-[600px] bg-[color:var(--mc-canvas)] border border-[color:var(--mc-line)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ${
          shake ? "animate-captcha-shake" : ""
        }`}
        style={{ animation: "captchaIn 320ms cubic-bezier(0.2,0.8,0.2,1) both" }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          data-testid="captcha-close"
          aria-label={c.cancel}
          className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center text-[color:var(--mc-muted)] hover:text-[color:var(--mc-secondary)] hover:bg-white transition-colors"
        >
          <X size={16} strokeWidth={1.6} />
        </button>

        {/* Header */}
        <div className="px-7 md:px-10 pt-10 pb-6">
          <div className="flex items-center gap-2.5 font-mono-tab text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--mc-primary)]">
            <ShieldCheck size={13} strokeWidth={1.6} />
            {c.eyebrow}
          </div>
          <h3 className="mt-6 font-display text-[26px] md:text-[32px] leading-[1.1] tracking-tight text-[color:var(--mc-secondary)]">
            {c.headingA}{" "}
            <span className="italic text-[color:var(--mc-primary)]">
              {c.headingB}
            </span>
          </h3>
          <p className="mt-4 text-[13.5px] leading-relaxed text-[color:var(--mc-muted)] max-w-[480px]">
            {c.body}
          </p>
        </div>

        {/* Ordered slots */}
        <div className="px-7 md:px-10 pt-2 pb-3">
          <div className="font-mono-tab text-[10px] uppercase tracking-[0.22em] text-[color:var(--mc-muted)] mb-3">
            {c.yourOrder}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((slotIdx) => {
              const filled = placed[slotIdx];
              return (
                <button
                  key={slotIdx}
                  type="button"
                  onClick={() => filled !== undefined && unplaceSlot(slotIdx)}
                  data-testid={`captcha-slot-${slotIdx}`}
                  disabled={filled === undefined}
                  className={`h-[68px] rounded-none border transition-colors relative flex flex-col items-start justify-center px-4 text-left ${
                    filled !== undefined
                      ? "bg-white border-[color:var(--mc-primary)] text-[color:var(--mc-secondary)]"
                      : "bg-transparent border-dashed border-[color:var(--mc-line)] text-[color:var(--mc-muted)]"
                  }`}
                >
                  <span className="font-mono-tab text-[10px] uppercase tracking-[0.2em] text-[color:var(--mc-primary)]">
                    {String(slotIdx + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[13.5px] leading-tight truncate w-full">
                    {filled !== undefined ? stepsSource[filled] : c.emptySlot}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step chips */}
        <div className="px-7 md:px-10 pt-6 pb-4">
          <div className="font-mono-tab text-[10px] uppercase tracking-[0.22em] text-[color:var(--mc-muted)] mb-3">
            {c.steps_label}
          </div>
          <div className="flex flex-wrap gap-2">
            {shuffledOrder.map((srcIdx) => {
              const used = placed.includes(srcIdx);
              return (
                <button
                  key={srcIdx}
                  type="button"
                  onClick={() => placeStep(srcIdx)}
                  disabled={used}
                  data-testid={`captcha-chip-${srcIdx}`}
                  className={`px-4 py-2.5 rounded-full border text-[13px] tracking-[0.02em] transition-all ${
                    used
                      ? "bg-transparent border-[color:var(--mc-line)] text-[color:var(--mc-muted)]/40 line-through cursor-not-allowed"
                      : "bg-white border-[color:var(--mc-line)] text-[color:var(--mc-secondary)] hover:border-[color:var(--mc-primary)] hover:text-[color:var(--mc-primary)]"
                  }`}
                >
                  {stepsSource[srcIdx]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between gap-3 px-7 md:px-10 py-5 border-t border-[color:var(--mc-line)] bg-white">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={resetPuzzle}
              data-testid="captcha-reset"
              className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.04em] text-[color:var(--mc-muted)] hover:text-[color:var(--mc-secondary)] transition-colors"
            >
              <RotateCcw size={13} strokeWidth={1.6} />
              {c.reset}
            </button>
            {attempts > 0 && (
              <span
                data-testid="captcha-attempts"
                className="font-mono-tab text-[10px] uppercase tracking-[0.18em] text-[color:var(--mc-muted)]"
              >
                {c.attempts.replace("{n}", String(attempts))}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              data-testid="captcha-cancel"
              className="text-[12.5px] tracking-[0.04em] text-[color:var(--mc-muted)] hover:text-[color:var(--mc-secondary)] transition-colors"
            >
              {c.cancel}
            </button>
            <button
              type="button"
              onClick={confirm}
              disabled={!canConfirm}
              data-testid="captcha-confirm"
              className="mc-btn mc-btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Check size={14} />
              {c.confirm}
            </button>
          </div>
        </div>

        <style>{`
          @keyframes captchaIn {
            from { opacity: 0; transform: translateY(12px) scale(0.985); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes captchaShake {
            0%,100% { transform: translateX(0); }
            15%     { transform: translateX(-8px); }
            30%     { transform: translateX(7px); }
            45%     { transform: translateX(-5px); }
            60%     { transform: translateX(4px); }
            75%     { transform: translateX(-2px); }
            90%     { transform: translateX(1px); }
          }
          .animate-captcha-shake {
            animation: captchaShake 0.55s ease-in-out;
          }
        `}</style>
      </div>
    </div>
  );
};

function shuffle(arr) {
  const a = [...arr];
  // Fisher–Yates
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  // Guard against the (small) chance we shuffled into the identity
  if (a.every((v, i) => v === i)) {
    [a[0], a[a.length - 1]] = [a[a.length - 1], a[0]];
  }
  return a;
}
