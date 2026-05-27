import { CTAButton } from "@/components/ui/CTAButton";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { MongoliaLocale } from "@/config/mongolia.globals";
import type { LocaleContent } from "@/content/markets/mongolia";
import { withLocale } from "@/lib/locale";

const finalActionLabels = {
  sports: {
    en: "Sports",
    mn: "\u0421\u043f\u043e\u0440\u0442",
  },
  games: {
    en: "Games",
    mn: "\u0422\u043e\u0433\u043b\u043e\u043e\u043c",
  },
  join: {
    en: "Join us",
    mn: "\u041d\u044d\u0433\u0434\u044d\u044d\u0440\u044d\u0439",
  },
} as const;

type HomeFinalCtaProps = {
  content: LocaleContent["home"]["finalCta"];
  locale: MongoliaLocale;
};

export function HomeFinalCta({ content, locale }: HomeFinalCtaProps) {
  return (
    <section className="section-shell" id="contact">
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
                <CTAButton
                  href={withLocale("/#sports", locale)}
                  label={finalActionLabels.sports[locale]}
                />
                <CTAButton
                  href={withLocale("/#games", locale)}
                  label={finalActionLabels.games[locale]}
                  variant="secondary"
                />
                <CTAButton
                  className="final-action final-action--compact"
                  href={withLocale("/partnership", locale)}
                  label={finalActionLabels.join[locale]}
                  variant="ghost"
                />
              </div>
            </div>
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
