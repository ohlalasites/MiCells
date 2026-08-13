import { useEffect } from "react";
import { X } from "lucide-react";

export const ArticleModal = ({ article, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <div
      data-testid="article-modal"
      className="fixed inset-0 z-[100] bg-[color:var(--mc-secondary)]/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex justify-center px-0 md:px-6 py-0 md:py-12">
        <div
          className="relative w-full max-w-[920px] bg-white shadow-2xl h-fit"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 bg-white border-b border-[color:var(--mc-line)] flex items-center justify-between px-6 md:px-12 py-5">
            <div className="font-mono-tab text-[11px] uppercase tracking-[0.18em] text-[color:var(--mc-primary)]">
              {article.tag} · {article.minutes}
            </div>
            <button
              data-testid="article-modal-close"
              onClick={onClose}
              aria-label="Close"
              className="h-9 w-9 rounded-full border border-[color:var(--mc-line)] text-[color:var(--mc-secondary)] hover:bg-[color:var(--mc-canvas)] flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <article className="px-6 md:px-16 py-12 md:py-20">
            <h1
              data-testid="article-modal-title"
              className="font-display text-[34px] md:text-[52px] leading-[1.06] tracking-tight text-[color:var(--mc-secondary)] font-light"
            >
              {article.title}
            </h1>
            <div className="mt-6 hairline" />
            <div className="mt-10 space-y-7">
              {article.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] md:text-[17px] leading-[1.7] text-[color:var(--mc-secondary)]"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-[color:var(--mc-line)] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <p className="text-[13px] text-[color:var(--mc-muted)] max-w-[420px]">
                Published by MiCells<sup className="mc-reg">®</sup>. For enquiries on any of the themes
                discussed, please contact us.
              </p>
              <a
                href="#contact"
                onClick={onClose}
                data-testid="article-modal-cta"
                className="mc-btn mc-btn-primary"
              >
                Speak with MiCells<sup className="mc-reg mc-reg-onbtn">®</sup>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
