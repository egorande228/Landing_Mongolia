import { CTAButton } from "@/components/ui/CTAButton";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { MongoliaLocale } from "@/config/mongolia.globals";
import { getLocalizedImageAsset } from "@/content/mongolia-image-slots";
import type { LocaleContent } from "@/content/markets/mongolia";

type PathsSectionProps = {
  content: LocaleContent["partnership"]["paths"];
  locale: MongoliaLocale;
};

export function PathsSection({ content, locale }: PathsSectionProps) {
  return (
    <section className="section-shell" id="paths">
      <div className="shell-container">
        <MotionCluster variant="scale">
          <SectionIntro
            body={content.body}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="paths-grid">
            {content.routes.map((route) => {
              const image = getLocalizedImageAsset(route.imageSlotId, locale);

              return (
                <article className="surface-panel route-card" data-motion-item key={route.title}>
                  <SafeImage alt={image.alt} ratio={image.ratio} src={image.src} />
                  <div className="route-card__body">
                    <h3 className="type-card-title">{route.title}</h3>
                    <p className="type-body text-pretty">{route.body}</p>
                    <ul className="checklist checklist--compact">
                      {route.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="cta-row mt-2">
                      {route.ctas.map((cta) => (
                        <CTAButton
                          {...cta}
                          className="w-full justify-center sm:w-auto"
                          key={`${route.title}-${cta.label}`}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
