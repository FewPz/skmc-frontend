import Title from "@/components/ui/title";
import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="min-h-dvh">
      <Container>
        <div
          id="faq"
          className="flex justify-center relative bg-white bg-no-repeat bg-cover bg-center pb-12"
        >
          <Title text="FAQ" color="black" />
        </div>
        <Accordion type="multiple" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>เซิร์ฟเวอร์ Minecraft คืออะไร</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>เซิร์ฟเวอร์สมายครับคืออะไร</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>ทำไมสมายครับไม่เหมือนเดิม</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </section>
  );
}
