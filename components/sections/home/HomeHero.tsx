import { CTAButton } from "@/components/ui/CTAButton";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { LocaleContent } from "@/content/markets/mongolia";

type HomeHeroProps = {
  content: LocaleContent["home"]["hero"];
};

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="section-shell hero-shell" id="top">
      <div className="shell-container">
        <MotionCluster className="hero-grid hero-grid--centered" variant="up">
          <div className="hero-copy hero-copy--centered">
            <div data-motion-item>
              <Eyebrow>{content.eyebrow}</Eyebrow>
            </div>
            <h1 className="type-display hero-title text-pretty" data-motion-item>
              {content.title}
            </h1>
            <p className="type-body-lg text-pretty text-[var(--color-foreground-soft)]" data-motion-item>
              {content.body}
            </p>
            <div className="cta-row cta-row--centered" data-motion-item>
              <CTAButton {...content.primaryCta} />
              <CTAButton {...content.secondaryCta} />
            </div>
            <div className="metric-grid metric-grid--hero" data-motion-item>
              {content.metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <span className="type-metric" dir="ltr">
                    {metric.value}
                  </span>
                  <span className="type-meta">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
