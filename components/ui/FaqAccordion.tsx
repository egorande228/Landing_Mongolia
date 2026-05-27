"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <article
            className={cn("faq-item", isOpen && "faq-item--open")}
            key={item.question}
          >
            <button
              aria-expanded={isOpen}
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="type-card-title text-left">{item.question}</span>
              <span className="faq-icon" aria-hidden>
                +
              </span>
            </button>
            <div className="faq-panel">
              <p className="type-body text-pretty">{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
