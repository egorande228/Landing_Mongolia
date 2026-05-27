import { CTAButton } from "@/components/ui/CTAButton";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { LocaleContent } from "@/content/markets/mongolia";

type PartnershipFinalCtaProps = {
  content: LocaleContent["partnership"]["finalCta"];
};

export function PartnershipFinalCta({ content }: PartnershipFinalCtaProps) {
  return (
    <section className="section-shell" id="final-cta">
      <div className="shell-container">
        <MotionCluster variant="up">
          <div className="final-panel final-panel--center">
            <div className="final-panel__copy final-panel__copy--center">
              <SectionIntro
                align="center"
                body={content.body}
                eyebrow={content.eyebrow}
                title={content.title}
              />
              <div className="cta-row final-panel__actions" data-motion-item>
                <CTAButton {...content.primaryCta} />
                <CTAButton {...content.secondaryCta} />
              </div>
            </div>
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
