import React from "react";
import { motion } from "framer-motion";

const JourneySection: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text">
          Mickey's Journey
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/assets/micky-cart.png"
              alt="Mickey"
              className="rounded-2xl shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-purple-700">
              Early Days
            </h3>
            <p className="text-gray-600 leading-relaxed">
              When Mickey first joined our family, bringing joy and laughter.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-purple-700">— Mickey —</h3>
          <p className="text-gray-600 italic max-w-3xl mx-auto text-lg">
            "Those we love don't go away, they walk beside us every day. Unseen,
            unheard, but always near, still loved, still missed and very dear."
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative background elements */}
      <motion.div
        className="absolute -z-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl right-0 top-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default JourneySection;
