"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type SafeImageProps = {
  src?: string;
  alt: string;
  ratio: string;
  fit?: "cover" | "contain";
  decorative?: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function SafeImage({
  src,
  alt,
  ratio,
  fit = "cover",
  decorative = false,
  className,
  imageClassName,
  priority = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(src) && !hasError;
  const sizes = useMemo(
    () =>
      fit === "cover"
        ? "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
        : "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw",
    [fit],
  );

  return (
    <div
      aria-hidden={decorative}
      className={cn("safe-image", className)}
      style={{ aspectRatio: ratio }}
    >
      <div className="safe-image__fallback" />
      {showImage ? (
        <Image
          alt={decorative ? "" : alt}
          className={cn(
            "safe-image__media",
            fit === "contain" && "safe-image__media--contain",
            imageClassName,
          )}
          fill
          onError={() => setHasError(true)}
          priority={priority}
          sizes={sizes}
          src={src!}
        />
      ) : null}
    </div>
  );
}
