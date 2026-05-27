import { CTAButton } from "@/components/ui/CTAButton";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { LocaleContent } from "@/content/markets/mongolia";

type FaqSectionsProps = {
  content: LocaleContent["faq"];
};

export function FaqSections({ content }: FaqSectionsProps) {
  return (
    <>
      <section className="section-shell faq-hero">
        <div className="shell-container">
          <MotionCluster variant="up">
            <div className="faq-hero__layout faq-hero__layout--centered">
              <SectionIntro
                align="center"
                body={content.intro.body}
                eyebrow={content.intro.eyebrow}
                title={content.intro.title}
              />
            </div>
          </MotionCluster>
        </div>
      </section>

      <section className="section-shell">
        <div className="shell-container">
          <MotionCluster variant="left">
            <div className="faq-grid">
              <div className="surface-panel faq-column" data-motion-item>
                <h2 className="type-heading faq-section-title">{content.playerTitle}</h2>
                <FaqAccordion items={content.playerItems} />
              </div>
              <div className="surface-panel faq-column" data-motion-item>
                <h2 className="type-heading faq-section-title">
                  {content.partnershipTitle}
                </h2>
                <FaqAccordion items={content.partnershipItems} />
              </div>
            </div>
          </MotionCluster>
        </div>
      </section>

      <section className="section-shell" id="support">
        <div className="shell-container">
          <MotionCluster variant="scale">
            <div className="surface-panel support-panel">
              <SectionIntro
                align="center"
                body={content.support.body}
                eyebrow={content.support.eyebrow}
                title={content.support.title}
              />
              <div className="cta-row justify-center" data-motion-item>
                <CTAButton {...content.support.primaryCta} />
                <CTAButton {...content.support.secondaryCta} />
              </div>
            </div>
          </MotionCluster>
        </div>
      </section>
    </>
  );
}
