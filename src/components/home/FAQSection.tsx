import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is TandT Realty, and what services does it provide?",
    answer:
      "TandT Realty is a real estate consultancy firm offering a range of services related to buying, selling, and investing in real estate.",
  },
  {
    question: "Why do I need real estate consultancy services?",
    answer:
      "Real estate consultancy services provide expert guidance and market insights to help you make informed decisions in the complex world of real estate.",
  },
  {
    question: "How can TandT Realty help me find the right property?",
    answer:
      "TandT Realty uses its expertise to match your preferences, budget, and goals with suitable properties in the market.",
  },
  {
    question: "Is TandT Realty only for buyers, or can sellers benefit too?",
    answer:
      "TandT Realty offers services for both buyers and sellers, including property evaluation, marketing, and negotiation assistance.",
  },
  {
    question: "Why is market research and analysis essential in real estate consultancy?",
    answer:
      "Market research and analysis help clients understand current trends, pricing, and investment potential, ensuring they make informed decisions.",
  },
  {
    question: "Can TandT Realty assist with real estate investment strategies?",
    answer:
      "Yes, TandT Realty can help you develop investment strategies, such as rental property or commercial real estate investments, based on your goals.",
  },
  {
    question: "What sets TandT Realty apart from other real estate consultancy firms?",
    answer:
      "TandT Realty stands out due to its experienced team, customer-centric approach, and in-depth knowledge of local real estate markets.",
  },
  {
    question: "Is real estate consultancy relevant for first-time homebuyers?",
    answer:
      "Absolutely. Real estate consultancy is especially valuable for first-time buyers to navigate the complex process with confidence.",
  },
  {
    question: "How can I get started with TandT Realty's services?",
    answer:
      "You can contact TandT Realty through their website to schedule a consultation and discuss your real estate needs.",
  },
  {
    question: "What benefits can I expect from using TandT Realty's services?",
    answer:
      "By utilizing TandT Realty's services, you can expect to save time, make informed decisions, and potentially secure better deals in the real estate market.",
  },
  {
    question: "Should I Really Hire the Real Estate Company In Gurgaon?",
    answer:
      "Absolutely. TandT Realty stands out in Gurgaon's real estate scene, offering strategic developer collaborations, transparent transactions, and tailored solutions. Our client-centric excellence ensures a seamless, enriching experience, making us the trusted choice for navigating the dynamic Gurgaon real estate landscape.",
  },
  {
    question: "What Benefits of Hiring the Best Real Estate Company in Gurgaon?",
    answer:
      "Hiring TandT Realty brings exclusive access to premier projects through strategic developer collaborations. Experience transparent transactions, where honesty and clarity are paramount. Our tailored solutions cater to diverse needs, ensuring satisfaction and maximizing the benefits of your real estate endeavors.",
  },
  {
    question: "Why Are You the Best Real Estate Agent in Gurgaon?",
    answer:
      "TandT Realty distinguishes itself with a client-centric approach, strategic developer alliances, and a commitment to transparent, tailored solutions. Our seasoned professionals navigate Gurgaon's real estate intricacies, ensuring an unparalleled, satisfying experience. We are the epitome of excellence in the Gurgaon real estate market.",
  },
  {
    question: "How Do the Real Estate Companies in Gurgaon Work?",
    answer:
      "TandT Realty operates on a foundation of strategic developer collaborations, transparent transactions, and personalized solutions. Our seasoned professionals leverage in-depth market knowledge to guide clients through the dynamic Gurgaon real estate landscape. With client satisfaction at the core, our approach ensures success in diverse real estate ventures.",
  },
];



const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our real estate consultancy services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Question Box */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left transition-all duration-300"
                style={{ backgroundColor: "#C49635", color: "white" }}
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Section */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-6 bg-white text-gray-800"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;