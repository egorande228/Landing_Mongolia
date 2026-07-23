import { CTAButton } from "@/components/ui/CTAButton";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { MongoliaLocale } from "@/config/mongolia.globals";
import { getLocalizedImageAsset } from "@/content/mongolia-image-slots";
import type { LocaleContent } from "@/content/markets/mongolia";

const sportsAccessHref =
  "/api/go/sports";

const sportsCardCtas = {
  "home-football": {
    en: "Open sports access",
    mn: "\u041d\u044d\u044d\u0445\u0020\u0441\u043f\u043e\u0440\u0442",
  },
  "home-live-match": {
    en: "Join live sports",
    mn: "\u0410\u043c\u044c\u0434\u0020\u0441\u043f\u043e\u0440\u0442\u0020\u043d\u044d\u044d\u0445",
  },
} as const;

type SportsCtaSlotId = keyof typeof sportsCardCtas;

type SportsSectionProps = {
  content: LocaleContent["home"]["sports"];
  locale: MongoliaLocale;
};

export function SportsSection({ content, locale }: SportsSectionProps) {
  const leadImage = getLocalizedImageAsset(content.leadCard.imageSlotId, locale);
  const supportImage = getLocalizedImageAsset(
    content.supportCard.imageSlotId,
    locale,
  );
  const leadCtaLabel =
    sportsCardCtas[content.leadCard.imageSlotId as SportsCtaSlotId][locale];
  const supportCtaLabel =
    sportsCardCtas[content.supportCard.imageSlotId as SportsCtaSlotId][locale];

  return (
    <section className="section-shell" id="sports">
      <div className="shell-container">
        <MotionCluster variant="left">
          <SectionIntro
            body={content.body}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="sports-stage">
            <article className="sports-lead surface-panel" data-motion-item>
              <SafeImage
                alt={leadImage.alt}
                ratio={leadImage.ratio}
                src={leadImage.src}
              />
              <div className="media-card__body">
                <h3 className="type-card-title">{content.leadCard.title}</h3>
                <p className="type-body text-pretty">{content.leadCard.body}</p>
                <CTAButton
                  className="mt-1 self-start"
                  href={sportsAccessHref}
                  label={leadCtaLabel}
                />
              </div>
            </article>
            <div className="sports-side">
              <article className="media-card surface-panel" data-motion-item>
                <SafeImage
                  alt={supportImage.alt}
                  ratio={supportImage.ratio}
                  src={supportImage.src}
                />
                <div className="media-card__body">
                  <h3 className="type-card-title">{content.supportCard.title}</h3>
                  <p className="type-body text-pretty">{content.supportCard.body}</p>
                  <CTAButton
                    className="mt-1 self-start"
                    href={sportsAccessHref}
                    label={supportCtaLabel}
                  />
                </div>
              </article>
              <article className="surface-panel board-panel" data-motion-item>
                <div className="pill-strip">
                  {content.sportsList.map((item) => (
                    <span className="board-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="metric-grid">
                  {content.metrics.map((metric) => (
                    <div className="metric-card" key={metric.label}>
                      <span className="type-metric" dir="ltr">
                        {metric.value}
                      </span>
                      <span className="type-meta">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
