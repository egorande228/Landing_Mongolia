import Image from "next/image";
import { cn } from "@/lib/cn";

type MongoliaLogoProps = {
  compact?: boolean;
  className?: string;
};

export function MongoliaLogo({ compact = false, className }: MongoliaLogoProps) {
  return (
    <span className={cn("mongolia-logo", compact && "mongolia-logo--compact", className)}>
      <Image
        alt="MELBET"
        className="mongolia-logo__image"
        height={90}
        priority={compact}
        sizes={compact ? "156px" : "192px"}
        src="/logo.png"
        width={408}
      />
    </span>
  );
}
