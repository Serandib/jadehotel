"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/container";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Eye } from "lucide-react";

const emeraldMenuImages = ["/assets/menu/001.jpg", "/assets/menu/002.jpg"];

const emeraldMenuContent = [
  {
    label: "À La Carte Selection",
    title: "A curated menu of signature flavors",
    desc: "Every dish is prepared to deliver a rich and satisfying dining experience.",
  },
  {
    label: "Chef’s Special Highlights",
    title: "Distinctive dishes for memorable dining",
    desc: "If you are searching for a restaurant in Hambantota with great food and a peaceful atmosphere, Emerald Table at Jade Green Hotel offers the perfect setting.",
  },
];

export default function EmeraldTablePage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7faf8]">
        <Container>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-70" />
            <div className="absolute top-32 right-0 h-72 w-72 rounded-full bg-green-200/40 blur-3xl opacity-70" />
            <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-lime-100 blur-3xl opacity-60" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 py-24 md:py-32 text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur mb-6">
              <Sparkles size={16} />
              Signature Dining Experience
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
              Emerald Table
              <span className="block mt-2 text-emerald-700">
                Menu Experience
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-black/65 max-w-3xl mx-auto">
              Welcome to Emerald Table, the signature dining experience at Jade
              Green Hotel Hambantota.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-black/65 max-w-3xl mx-auto">
              Designed to reflect elegance, warmth, and exceptional taste,
              Emerald Table offers a refined yet relaxed atmosphere where guests
              can enjoy carefully crafted cuisine in a beautiful setting.
              Whether you are joining us for a casual lunch, a family dinner, or
              a special gathering, our restaurant delivers an experience that
              blends flavor, comfort, and hospitality.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="space-y-12">
            {emeraldMenuImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="space-y-5">
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                    {emeraldMenuContent[index]?.label ||
                      `Menu Panel ${index + 1}`}
                  </div>

                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    {emeraldMenuContent[index]?.title ||
                      `Emerald Table Presentation ${index + 1}`}
                  </h3>

                  <p className="text-black/65 leading-relaxed">
                    {emeraldMenuContent[index]?.desc ||
                      "An elevated dining showcase designed with a refined visual identity, ideal for premium events, wedding functions, and elegant gatherings hosted at Jade Green Hotel."}
                  </p>

                  <button
                    onClick={() => setActiveImage(img)}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-800"
                  >
                    <Eye size={16} />
                    View Full Menu
                  </button>
                </div>

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  onClick={() => setActiveImage(img)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                    <div className="relative overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={img}
                        alt={`Emerald Table Menu ${index + 1}`}
                        width={1200}
                        height={1600}
                        className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[#0f2f26] text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-16 md:px-14 text-center backdrop-blur"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Reserve Your Dining Experience
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              Let Jade Green elevate your special occasion
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/75 leading-relaxed">
              From intimate dining experiences to grand celebrations, our
              curated menu offerings are crafted to leave a lasting impression.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contactus"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f2f26] transition hover:scale-[1.02]"
              >
                Inquire Now
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Gallery
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/85 p-4 md:p-8"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              <X size={22} />
            </button>

            <div className="flex h-full items-center justify-center">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative h-full w-full max-w-6xl"
              >
                <Image
                  src={activeImage}
                  alt="Emerald Table Menu Preview"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
