import { MotionCluster } from "@/components/ui/MotionCluster";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { LocaleContent } from "@/content/markets/mongolia";

type BenefitsSectionProps = {
  content: LocaleContent["partnership"]["benefits"];
};

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <section className="section-shell" id="benefits">
      <div className="shell-container">
        <MotionCluster variant="up">
          <div className="section-split">
            <SectionIntro
              body={content.body}
              eyebrow={content.eyebrow}
              title={content.title}
            />
          </div>
          <div className="benefits-grid">
            {content.cards.map((card) => (
              <article className="surface-panel feature-tile" data-motion-item key={card.title}>
                <h3 className="type-card-title">{card.title}</h3>
                <p className="type-body text-pretty">{card.body}</p>
              </article>
            ))}
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
