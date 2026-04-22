import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Loader2 } from 'lucide-react';
import { useFaqs } from '../hooks/useFaqs';

const FAQ: React.FC = () => {
  const { faqs, loading } = useFaqs();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Semua');

  const categories = ['Semua', 'Pendirian Legalitas', 'Pembuatan Legalitas'];

  const filteredFaqs = activeTab === 'Semua' 
    ? faqs 
    : faqs.filter(faq => faq.sub_category === activeTab);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
      </div>
    );
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg">
            Temukan jawaban untuk pertanyaan yang sering diajukan mengenai layanan kami.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setActiveIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === cat
                  ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-200'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300 hover:text-amber-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <div
                      className={`
                        border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300
                        ${activeIndex === index ? 'bg-white shadow-xl shadow-amber-100/50 border-amber-200' : 'bg-white/50 hover:bg-white hover:border-amber-200 hover:shadow-md'}
                      `}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className={`text-lg font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-amber-600' : 'text-slate-800 group-hover:text-amber-500'}`}>
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex-shrink-0 ml-4 p-1 rounded-full ${activeIndex === index ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400 group-hover:bg-amber-50 group-hover:text-amber-500'}`}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-400 italic">
                  Belum ada pertanyaan untuk kategori ini.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500">
            Masih memiliki pertanyaan lain?
            <a href="/kontak-kami" className="text-amber-600 font-bold ml-2 hover:underline">Hubungi kami sekarang</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
