
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the time commitment for the program?",
    answer: "The program requires approximately 5-7 hours per week, including two 90-minute live sessions, project work, and community participation. All sessions are recorded if you can't attend live."
  },
  {
    question: "Do I need technical experience to join?",
    answer: "No formal technical background is required. The program is designed for product professionals with varying levels of technical knowledge. We'll provide the necessary foundations for working with AI."
  },
  {
    question: "What kind of project will I build?",
    answer: "You'll develop an AI-powered product from concept to prototype. This could be a new product idea or enhancing an existing one with AI capabilities. You'll receive guidance at each stage of development."
  },
  {
    question: "How much does the program cost?",
    answer: "The program fee is $1,999, with early bird pricing at $1,799 for those who join the waitlist and apply early. We also offer payment plans to make the program more accessible."
  },
  {
    question: "Will I get a certificate upon completion?",
    answer: "Yes, graduates receive a TPF certification recognizing their completion of the AI Product Building cohort, which you can share on your professional profiles."
  },
  {
    question: "What if I miss a live session?",
    answer: "All sessions are recorded and made available within 24 hours. You'll also receive session notes and can ask questions in the community platform that speakers and mentors will address."
  },
  {
    question: "What tools will we use during the program?",
    answer: "The program covers a range of AI tools from no-code platforms to API-based solutions. We focus on tools that are accessible to product managers rather than requiring deep technical skills."
  },
  {
    question: "Is there a selection process?",
    answer: "Yes, we review applications to ensure participants have the appropriate background and goals aligned with the program. This helps create a cohesive learning community with shared objectives."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about the TPF AI Product Building Cohort.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <span className="font-medium text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <a 
            href="mailto:cohorts@tpf.com" 
            className="text-tpf-purple font-medium hover:underline"
          >
            Contact us at cohorts@tpf.com
          </a>
        </div>
      </div>
    </section>
  );
}
