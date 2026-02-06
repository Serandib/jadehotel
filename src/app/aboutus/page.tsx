"use client";

import Container from "@/components/common/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Heart, Globe } from "lucide-react";

export default function AboutUSPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="py-32 text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Jade Green</span>
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Welcome to Jade Green Boutique Hotel – where luxury meets
              tranquility. Nestled in the heart of Hambantota, our hotel
              blends modern comforts with natural serenity for unforgettable
              experiences.
            </p>
          </motion.div>

          {/* Decorative gradient */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-60"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-50 blur-3xl opacity-60"
          />
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Jade Green Boutique Hotel was founded to create a peaceful
                haven for travelers seeking luxury and comfort. Surrounded
                by lush greenery and scenic beauty, our hotel offers a blend
                of modern design and natural serenity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide an unforgettable stay with warm
                hospitality, premium amenities, and personalized service
                that caters to every guest’s needs.
              </p>
            </div>

            <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/home/042.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-primary/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mt-4">
              At Jade Green, we believe in excellence, comfort, and
              creating memorable experiences for every guest.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center"
            >
              <Heart size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Hospitality</h3>
              <p className="text-gray-600 text-sm">
                Personalized care and warm service for every guest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center"
            >
              <Globe size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Eco-conscious practices to preserve nature and local culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center"
            >
              <Users size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Supporting local initiatives and connecting with our guests.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team / Experience Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Experience
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mt-4">
              With years of experience in hospitality, we ensure that every
              stay is luxurious, comfortable, and memorable.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Luxury Rooms", "Fine Dining", "Infinity Pool", "Event Spaces"].map(
              (feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="p-6 rounded-2xl bg-primary/40 shadow-md hover:shadow-xl text-center transition cursor-pointer"
                >
                  <h3 className="text-lg font-semibold">{feature}</h3>
                </motion.div>
              )
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
