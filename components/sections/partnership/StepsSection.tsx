import { MotionCluster } from "@/components/ui/MotionCluster";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { LocaleContent } from "@/content/markets/mongolia";

type StepsSectionProps = {
  content: LocaleContent["partnership"]["steps"];
};

export function StepsSection({ content }: StepsSectionProps) {
  return (
    <section className="section-shell" id="steps">
      <div className="shell-container">
        <MotionCluster variant="left">
          <SectionIntro
            body={content.body}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="steps-grid">
            {content.items.map((item, index) => (
              <article className="surface-panel step-card" data-motion-item key={item.title}>
                <span className="step-index" dir="ltr">
                  0{index + 1}
                </span>
                <h3 className="type-card-title">{item.title}</h3>
                <p className="type-body text-pretty">{item.body}</p>
              </article>
            ))}
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
