import Link from "next/link";
import { cn } from "@/lib/cn";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const isExternalHref = (href: string) =>
  href.startsWith("http") || href.startsWith("/api/go/") || href.startsWith("mailto:") || href.startsWith("tel:");

export function CTAButton({
  href,
  label,
  variant = "primary",
  className,
}: CTAButtonProps) {
  const sharedClassName = cn(
    "button-inline",
    variant === "secondary" && "button-inline--secondary",
    variant === "ghost" && "button-inline--ghost",
    className,
  );

  if (isExternalHref(href)) {
    return (
      <a
        className={sharedClassName}
        href={href}
        rel={href.startsWith("/api/go/") ? "sponsored nofollow noopener" : "noreferrer"}
        target={href.startsWith("http") || href.startsWith("/api/go/") ? "_blank" : undefined}
      >
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link className={sharedClassName} href={href}>
      <span>{label}</span>
    </Link>
  );
}
