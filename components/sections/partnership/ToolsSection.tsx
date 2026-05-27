import type { CSSProperties } from "react";
import { MotionCluster } from "@/components/ui/MotionCluster";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { LocaleContent } from "@/content/markets/mongolia";

type ToolsSectionProps = {
  content: LocaleContent["partnership"]["tools"];
};

const dashboardBars = [
  { id: "monday", height: "42%" },
  { id: "tuesday", height: "58%" },
  { id: "wednesday", height: "64%" },
  { id: "thursday", height: "52%" },
  { id: "friday", height: "78%" },
  { id: "saturday", height: "68%" },
] as const;

export function ToolsSection({ content }: ToolsSectionProps) {
  return (
    <section className="section-shell" id="tools">
      <div className="shell-container">
        <MotionCluster variant="up">
          <div className="tools-layout">
            <div className="tools-copy">
              <SectionIntro
                body={content.body}
                eyebrow={content.eyebrow}
                title={content.title}
              />
              <ul className="checklist" data-motion-item>
                {content.toolPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="metric-grid" data-motion-item>
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
            <div className="tools-media surface-panel" data-motion-item>
              <div className="tools-dashboard">
                <div className="tools-dashboard__glow tools-dashboard__glow--gold" data-float-item />
                <div className="tools-dashboard__glow tools-dashboard__glow--red" data-float-item />
                <div className="tools-dashboard__header">
                  <div className="tools-dashboard__heading">
                    <span className="type-label">Affiliate dashboard</span>
                    <strong className="tools-dashboard__title">Live partner lane</strong>
                  </div>
                  <span className="tools-dashboard__live" data-glow-item>
                    <span className="tools-dashboard__live-dot" />
                    Live
                  </span>
                </div>

                <div className="tools-dashboard__stats">
                  <div className="tools-dashboard__stat">
                    <span className="tools-dashboard__stat-label">Revshare</span>
                    <strong className="tools-dashboard__stat-value">42%</strong>
                  </div>
                  <div className="tools-dashboard__stat">
                    <span className="tools-dashboard__stat-label">CPA</span>
                    <strong className="tools-dashboard__stat-value">$18</strong>
                  </div>
                  <div className="tools-dashboard__stat">
                    <span className="tools-dashboard__stat-label">Active players</span>
                    <strong className="tools-dashboard__stat-value">482</strong>
                  </div>
                </div>

                <div className="tools-dashboard__chart">
                  <div className="tools-dashboard__chart-head">
                    <span className="tools-dashboard__chart-label">This week</span>
                    <span className="tools-dashboard__chart-label">Route activity</span>
                  </div>
                  <div className="tools-dashboard__bars">
                    {dashboardBars.map((bar, index) => (
                      <span
                        className="tools-dashboard__bar"
                        key={bar.id}
                        style={
                          {
                            "--bar-height": bar.height,
                            "--bar-delay": `${index * 180}ms`,
                          } as CSSProperties
                        }
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </MotionCluster>
      </div>
    </section>
  );
}
