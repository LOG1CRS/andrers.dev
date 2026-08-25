import { Fragment, type ReactNode } from "react";

/** Turns [[double bracketed]] terms in the content into emphasised spans. */
export function rich(text: string): ReactNode[] {
  return text.split(/(\[\[.*?\]\])/g).map((part, i) =>
    part.startsWith("[[") && part.endsWith("]]") ? (
      <span key={i} className="hl">
        {part.slice(2, -2)}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
