import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "section-intro",
        align === "center" && "section-intro--center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="type-heading text-pretty">{title}</h2>
      {body ? <p className="type-subheading text-pretty">{body}</p> : null}
    </div>
  );
}
