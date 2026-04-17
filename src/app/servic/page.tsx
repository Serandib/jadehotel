"use client";

import Container from "@/components/common/container";
import BeSearchForm from "@/components/be-forms/BeSearchForm";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ServicePage() {
  const router = useRouter();
  return (
    <section className="bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center pt-32 max-w-5xl"
        >
          

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-primary2 tracking-tight leading-tight">
            Experience Refined
            <span className="block text-primary mt-3">
              Hospitality in Hambantota
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-black leading-relaxed">
            JadeGreen Hambantota blends contemporary luxury with serene natural
            surroundings, offering an unforgettable stay designed for comfort,
            relaxation, and elegance.
          </p>

          {/* CTAs */}
          {/*<div className="mt-12 flex flex-wrap gap-6">
            <button
              className="px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:scale-105 transition-transform"
              onClick={() => router.push(`/rooms`)}
            >
              Book Your Stay
            </button>
          </div>*/}
        </motion.div>

        <div className="py-10">
          <BeSearchForm />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Jade Green Hambantota
            </h2>

            <p className="text-black/70 leading-relaxed mb-6">
              Jade Green is a charming hotel offering refined comfort
              and personalized hospitality at exceptional value. Conveniently
              located in the heart of Hambantota, the hotel is easily accessible
              via the Colombo to Mattala Expressway.
            </p>

            <p className="text-black/70 leading-relaxed">
              Nestled amidst lush greenery and overlooking the scenic Hambantota
              saltern, Jade Green offers tranquil surroundings and breathtaking
              views. Just minutes away from pristine beaches, our hotel provides
              the perfect blend of relaxation, nature, and modern comfort ideal
              for both leisure stays and special celebrations.
            </p>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/assets/servic/003.jpg"
              alt="Hotel View"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.section>

        {/* ROOMS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-32"
        >
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Luxury Experiences Await
            </h2>
            <p className="mt-4 text-lg text-black/60">
              Designed for comfort, privacy, dining, and complete relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Modern Comfort",
                img: "/assets/servic/081.jpg",
                desc: "Fully air-conditioned rooms over 300 sq. ft. with premium interiors.",
              },
              {
                title: "Private Balconies",
                img: "/assets/servic/094.jpg",
                desc: "Each room features a private balcony with breathtaking saltern views.",
              },
              {
                title: "Serene Surroundings",
                img: "/assets/servic/004.jpg",
                desc: "A quiet and soothing environment designed to refresh your mind and spirit.",
              },
            ].map((room) => (
              <div
                key={room.title}
                className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <p className="mt-3 text-black/60 text-sm leading-relaxed">
                    {room.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FACILITIES */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-32"
        >
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Premium Facilities
            </h2>
            <p className="mt-4 text-lg text-black/60">
              Everything you need for a comfortable and memorable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Swimming Pool",
              "Authentic Sri Lankan Restaurant",
              "À La Carte Dining",
              "Room Service",
              "Free Wi-Fi",
              "Transport & Excursions",
              "Laundry Service",
              "Special Events",
            ].map((facility) => (
              <div
                key={facility}
                className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-1 w-10 bg-primary rounded-full mb-4" />
                <p className="font-medium text-black/80">{facility}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </Container>

      {/* CTA */}
      <div className="bg-primary py-24">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Experience Jade Green Hospitality
            </h2>

            <p className="mt-4 text-white/80 text-lg">
              Book your stay today and enjoy comfort, nature, and exceptional
              service in the heart of Hambantota.
            </p>

            <button className="mt-10 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition-transform" onClick={() => router.push(`/booking`)}>
              Book Your Stay
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
