import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: string;
  variant?: "pill" | "text";
  className?: string;
};

export function Eyebrow({
  children,
  variant = "pill",
  className,
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "eyebrow",
        variant === "text" && "eyebrow--text",
        className,
      )}
    >
      {children}
    </span>
  );
}
