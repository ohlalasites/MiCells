import { useEffect, useRef } from "react";
import { BRAND } from "@/lib/brand";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        v.muted = true;
        await v.play();
      } catch (_) {
        /* ignore */
      }
    };
    tryPlay();
  }, []);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full h-[100svh] min-h-[680px] overflow-hidden bg-[color:var(--mc-secondary)]"
    >
      <video
        ref={videoRef}
        data-testid="hero-video"
        className="absolute inset-0 w-full h-full object-cover"
        src={BRAND.heroVideo}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
      {/* Layered overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-[color:var(--mc-secondary)]/20 mix-blend-multiply" />

      {/* Hairline corners */}
      <div className="absolute top-[88px] left-0 right-0 mc-container">
        <div className="hairline opacity-30" />
      </div>

      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="mc-container w-full">
          <div className="max-w-[920px]">
            <div
              data-testid="hero-eyebrow"
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-mono-tab text-[11px] uppercase text-white/70">
                MC / 01
              </span>
              <span className="h-px w-10 bg-white/40" />
              <span className="font-mono-tab text-[11px] uppercase text-white/70">
                Biological Assurance Infrastructure
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-display text-white text-[40px] sm:text-[56px] lg:text-[78px] leading-[1.04] tracking-tight font-light"
            >
              Biological Assurance{" "}
              <span className="italic font-normal text-[color:var(--mc-primary-soft)]">
                Through
              </span>{" "}
              Autologous Blood Banking.
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-8 max-w-[680px] text-white/80 text-[16px] md:text-[18px] leading-relaxed"
            >
              Institutional-grade preservation and stewardship of autologous
              biological assets. Engineered for individuals, families and
              institutions who cannot afford uncertainty.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="mc-btn mc-btn-onvideo"
              >
                Request Information
                <ArrowRight size={16} />
              </a>
              <a
                href="#framework"
                data-testid="hero-cta-secondary"
                className="mc-btn mc-btn-onvideo-outline"
              >
                Our Framework
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom metadata strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 backdrop-blur-[2px]">
        <div className="mc-container flex items-center py-5">
          <div className="flex items-center gap-3 text-white/65 font-mono-tab text-[11px] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--mc-primary-soft)]" />
            Stewardship Programme in Development
          </div>
        </div>
      </div>
    </section>
  );
};
