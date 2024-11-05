import Title from "@/components/ui/Title";
import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/constants/faq";

export default function FAQ() {
  return (
    <section id="faq" className="min-h-dvh">
      <Container>
        <div>
          <Title>FAQ</Title>
          <div>
            <Accordion type="single" collapsible>
              {questions.map((q, index) => (
                <AccordionItem key={index} value={String(index)}>
                  <AccordionTrigger>{q.header}</AccordionTrigger>
                  <AccordionContent>
                    <p className="p-4 text-sm">{q.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
