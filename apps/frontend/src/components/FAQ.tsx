import Title from "@/components/ui/Title";
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
        <div className="space-y-6">
          <Title>FAQ</Title>
          <div>
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  เซิร์ฟเวอร์ Minecraft คืออะไร
                </AccordionTrigger>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
