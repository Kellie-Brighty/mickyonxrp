import React from "react";
import { motion } from "framer-motion";

const StorySection: React.FC = () => {
  return (
    <section className="p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <motion.img
                src="/assets/micky-two.jpg"
                alt="Mickey"
                className="rounded-lg shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Mickey is a tuxedo cat who was owned by the XOX family before they adopted Mouse. She was diagnosed with malignant lymphoma, which led to her passing in late August 2024.
              </motion.p>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                We have launched Mickey to preserve its significance and remembrance on the XRP chain forever.
              </motion.p>
              <motion.div
                className="bg-purple-50 p-4 rounded-lg border border-purple-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-600 italic">
                  Disclaimer: MICKEY has no partnership with any member of the XOX team. It was launched by acata, a developer who read and studied Mickey's story, found it truly interesting, and did not want Mickey's name to fade from the world.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://web.facebook.com/MickeyTheTuxedoCat/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <span>More memories of Mickey on Facebook</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </motion.svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection; 