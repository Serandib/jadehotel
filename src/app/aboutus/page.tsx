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
              tranquility. Nestled in the heart of Hambantota, our hotel blends
              modern comforts with natural serenity for unforgettable
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Jade Green began its journey in 2007 with a simple vision to
                create a warm and welcoming dining experience in the heart of
                Hambantota. What started as a humble restaurant, built on
                passion, dedication, and a love for great food, quickly became a
                favorite gathering place for families, friends, and travelers.
                Over the years, with the trust and support of our valued guests,
                Jade Green continued to grow. From a single restaurant, we
                expanded into a full hospitality destination.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we proudly offer: 10 comfortable and well-appointed guest
                rooms A refreshing swimming pool for relaxation A spacious
                banquet hall accommodating over 350 guests Our signature
                restaurant serving delicious local and international cuisine Our
                banquet hall has become one of the most sought-after venues in
                the area, hosting weddings, homecomings, corporate events, and
                celebrations of every kind. Despite our growth, one thing has
                never changed our commitment to genuine Sri Lankan hospitality.
              </p>

              <p className="text-gray-600 leading-relaxed">
                At Jade Green, every guest is treated like family, and every
                event is handled with care and attention to detail. From a small
                restaurant in 2007 to a complete hotel and event destination
                today, our journey has been built on passion, quality, and
                community. And this is only the beginning.
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

      {/* Our Mission Section */}
      <section className="py-24 bg-primary/10" id="mission">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>

              <p className="text-gray-700 mb-5 leading-relaxed">
                Our mission at Jade Green Boutique Hotel is to create meaningful
                and memorable experiences by offering exceptional hospitality,
                refined comfort, and personalized service in a serene natural
                setting.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We are committed to exceeding guest expectations while embracing
                sustainability, supporting the local community, and preserving
                the beauty of Hambantota for future generations.
              </p>
            </div>

            {/* Visual Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl bg-white p-10 shadow-xl"
            >
              <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-green-100 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-green-200 blur-2xl" />

              <h3 className="text-xl font-semibold mb-4 text-primary">
                What Drives Us
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  Deliver warm, authentic hospitality
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  Provide luxury with comfort and care
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  Promote sustainability and eco-friendly practices
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  Support local culture and community growth
                </li>
              </ul>
            </motion.div>
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
              At Jade Green, we believe in excellence, comfort, and creating
              memorable experiences for every guest.
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
            <h2 className="text-3xl md:text-4xl font-bold">Our Experience</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mt-4">
              With years of experience in hospitality, we ensure that every stay
              is luxurious, comfortable, and memorable.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Luxury Rooms",
              "Restaurant",
              "Scenic Pool with Saltern Views",
              "Event Spaces",
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-6 rounded-2xl bg-primary/40 shadow-md hover:shadow-xl text-center transition cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Managing Director’s Message */}
      {/* Managing Director’s Message */}
      <section className="py-24 bg-primary/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Managing Director’s Message
            </h2>

            {/* One Paragraph Message */}
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to Jade Green Hotel Hambantota. Hospitality is not just
              our business it is our legacy. Our journey in the hotel industry
              in the deep South began with the pioneering Peacock Beach Hotel,
              established in 1999 by the prominent gem merchant Late Mr. J.
              Guruge, whose vision played an important role in shaping early
              tourism development in Hambantota. Since 2007, we have been
              managing and continuously upgrading our hospitality operations to
              enhance guest comfort, facilities, and service standards. Today,
              Jade Green reflects that ongoing commitment combining experience,
              heritage, and modern hospitality to deliver memorable stays filled
              with warmth, care, and the true spirit of the Southern coast.
            </p>

            {/* Director Images */}
            <div className="grid md:grid-cols-2 gap- mt-16">
              {/* Director 1 */}
              <div className="text-center flex justify-center flex-col items-center">
                <div className="relative h-70 w-60 rounded-2xl overflow-hidden shadow-xl mb-4  flex">
                  <Image
                    src="/assets/about/002.png"
                    alt="Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">Nalin Fernando </h3>
                  <p className="text-sm text-gray-600">Director</p>
                </div>
              </div>

              {/* Director 2 */}
              <div className="text-center flex justify-center flex-col items-center">
                <div className="relative h-70 w-60 rounded-2xl overflow-hidden shadow-xl mb-4  flex">
                  <Image
                    src="/assets/about/001.jpg"
                    alt="Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">Dilini Guruge</h3>
                  <p className="text-sm text-gray-600">Director</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-primary/10" id="team">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mt-4">
              Behind every memorable stay is a passionate team dedicated to
              excellence, warmth, and personalized hospitality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Team Image */}
            <Image
              src="/assets/about/003.jpg"
              alt="Jade Green Hotel Team"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-10 left-10 right-10 text-white max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                A Team That Cares
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our experienced managers, chefs, and hospitality professionals
                work together to ensure every guest feels welcomed, relaxed, and
                truly valued at Jade Green Boutique Hotel.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Work With Us?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Join our passionate team and grow your career in hospitality with
              Jade Green Boutique Hotel.
            </p>

            <a
              href="/careers"
              className="inline-block rounded-full bg-white px-10 py-4 font-semibold text-primary hover:scale-105 transition"
            >
              View Careers
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
