"use client";

import Container from "@/components/common/container";
import { Users, Maximize2, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const rooms = [
  {
    slug: "standard-double",
    title: "Standard Double",
    size: "375 ft²",
    guests: "2 Guests",
    price: "LKR 18,000",
    desc: "Perfect for couples seeking comfort and tranquility.",
    image: "/assets/rooms/080.jpg",
    tag: "Popular",
    discount: "10%",
  },
  {
    slug: "deluxe-triple",
    title: "Deluxe Triple",
    size: "400 ft²",
    guests: "3 Guests",
    price: "LKR 24,000",
    desc: "Spacious room ideal for small families or friends.",
    image: "/assets/rooms/080.jpg",
    tag: "Best Value",
    discount: "10%",
  },
  {
    slug: "deluxe-family",
    title: "Deluxe Family",
    size: "375 ft²",
    guests: "4 Guests",
    price: "LKR 28,000",
    desc: "Designed for memorable family stays with extra comfort.",
    image: "/assets/rooms/084.jpg",
    tag: "Family Choice",
    discount: "10%",
  },
  {
    slug: "deluxe-double",
    title: "Deluxe Double",
    size: "380 ft²",
    guests: "2 Guests",
    price: "LKR 22,000",
    desc: "Luxury experience with modern interiors.",
    image: "/assets/rooms/107.jpg",
    tag: "Luxury",
    discount: "10%",
  },
];

export default function RoomsPage() {
  const router = useRouter();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="py-28 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1 text-green-700 text-sm font-medium mb-6 animate-pulse">
              <Sparkles size={16} />
              Jade Green Boutique Hotel
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative overflow-hidden">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="block"
              >
                Thoughtfully Designed
              </motion.span>
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="block text-green-700 relative"
              >
                Luxury Rooms
                <span className="absolute left-0 -bottom-2 h-1 w-full bg-green-200 rounded-full" />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-2xl mx-auto text-gray-600 text-lg"
            >
              Discover peaceful stays where comfort, elegance, and nature blend
              seamlessly — crafted for unforgettable experiences in Hambantota.
            </motion.p>
          </motion.div>

          {/* Decorative animated gradients */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-60"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-50 blur-3xl opacity-60"
          />
        </Container>
      </section>

      {/* ROOMS */}
      <Container>
        <section className="py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* Tag */}
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 backdrop-blur-sm">
                    {room.tag}
                  </span>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <button
                      onClick={() => router.push(`/rooms/${room.slug}`)}
                      className="rounded-full bg-white px-6 py-3 font-semibold text-green-700 shadow-lg hover:scale-105 transition transform"
                    >
                      View Details
                    </button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">
                    Jade Green – {room.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{room.desc}</p>

                  <div className="flex items-center gap-5 text-sm text-gray-500 mb-5">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {room.guests}
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 size={16} />
                      {room.size}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col"
                    >
                      <p className="text-sm text-gray-500">From</p>
                      <p className="text-lg font-bold text-green-700">
                        {room.price}
                        <span className="text-sm font-normal text-gray-500">
                          {" "}
                          / night
                        </span>
                      </p>
                      {room.discount && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-400 px-4 py-1.5 text-xs font-semibold text-white shadow-lg w-fit"
                        >
                          
                          {room.discount} OFF
                          <span className="text-white/80 ">
                            online booking
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
