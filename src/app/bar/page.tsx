"use client";

import Container from "@/components/common/container";
import { motion } from "framer-motion";
import { Martini, Sparkles, Clock3 } from "lucide-react";

export default function AraliyaBarPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f8faf8]">
        <Container>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-70" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-60" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 py-24 md:py-32 text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-700 shadow-sm backdrop-blur mb-6">
              <Sparkles size={16} />
              Premium Lounge Experience
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
              Araliya Bar
            </h1>

            <p className="mt-4 text-xl md:text-2xl font-semibold text-primary">
              Coming Soon
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-black/65 max-w-3xl mx-auto">
              A refined new lounge experience is being prepared at Jade Green Hotel
              Hambantota — designed for elegant evenings, signature beverages,
              and memorable moments.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-black/6 bg-white p-8 shadow-sm text-center"
            >
              <Martini size={36} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Signature Drinks</h3>
              <p className="text-black/65 leading-relaxed">
                Carefully curated beverages and premium selections crafted for a
                luxurious lounge experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-black/6 bg-white p-8 shadow-sm text-center"
            >
              <Sparkles size={36} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Elegant Atmosphere</h3>
              <p className="text-black/65 leading-relaxed">
                A premium setting designed for relaxing evenings, conversation,
                and refined hospitality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-black/6 bg-white p-8 shadow-sm text-center"
            >
              <Clock3 size={36} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Opening Soon</h3>
              <p className="text-black/65 leading-relaxed">
                Our team is currently preparing every detail to launch a truly
                memorable bar experience.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold">
              Stay Tuned
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-white/85 leading-relaxed">
              Araliya Bar is currently under development and will soon become
              one of the signature lifestyle experiences at Jade Green Hotel.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}