import * as React from "react";
import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  data: {
    question: string;
    answer: string;
  }[];
}

export function FaqAccordion({ data }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
      {data.map((item, i) => {
        return (
          <AccordionItem value={`item-${i.toFixed()}`} key={i}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-lg text-muted-foreground">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
} 