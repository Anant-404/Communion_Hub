'use client';
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "What is the Communion app?", answer: "The Communion app is a social platform designed to bring communities together." },
  { question: "How does it promote social cohesion?", answer: "It connects people based on shared interests and values, fostering a sense of belonging." },
  { question: "Is it free to use?", answer: "Yes, the Communion app is free to use with optional premium features." },
  { question: "Can I meet new people?", answer: "Absolutely! You can connect with like-minded individuals easily." },
  { question: "What if I have more questions?", answer: "You can check out our help center or contact support for more information." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-transparent">
    <div className="max-w-6xl mx-auto px-6 py-16 ">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-black">Frequently Asked Questions</h2>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-900 transition">
            View All <ChevronRight size={18} />
          </button>
        </div>

        {/* Right Side - FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown size={20} className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="p-5 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
