import { mongoliaGlobals } from "@/config/mongolia.globals";

export const getPageSizing = (page: "home" | "partnership") =>
  mongoliaGlobals.sizing[page];

export const getTextMeasureClass = (measure: "sm" | "md" | "lg") => {
  switch (measure) {
    case "sm":
      return "max-w-2xl";
    case "lg":
      return "max-w-4xl";
    case "md":
    default:
      return "max-w-3xl";
  }
};
