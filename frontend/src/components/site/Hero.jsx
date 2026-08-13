import { useEffect, useRef } from "react";
import { BRAND } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const videoRef = useRef(null);
  const { t, isZh } = useLanguage();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        v.muted = true;
        await v.play();
      } catch (_) {}
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
        // eslint-disable-next-line
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-[color:var(--mc-secondary)]/20 mix-blend-multiply" />

      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="mc-container w-full">
          <div className="max-w-[920px]">
            <h1
              data-testid="hero-headline"
              className={`font-display text-white leading-[1.04] tracking-tight font-light ${
                isZh
                  ? "text-[38px] sm:text-[52px] lg:text-[74px]"
                  : "text-[40px] sm:text-[56px] lg:text-[78px]"
              }`}
            >
              {t.hero.line1}{" "}
              <span className="italic font-normal text-[color:var(--mc-primary-soft)]">
                {t.hero.line2Italic}
              </span>{" "}
              {t.hero.line3}
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-8 max-w-[680px] text-white/80 text-[16px] md:text-[18px] leading-relaxed"
            >
              {t.hero.subheadline}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a href="#contact" data-testid="hero-cta-primary" className="mc-btn mc-btn-onvideo">
                {t.hero.primaryCta}
                <ArrowRight size={16} />
              </a>
              <a href="#framework" data-testid="hero-cta-secondary" className="mc-btn mc-btn-onvideo-outline">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
