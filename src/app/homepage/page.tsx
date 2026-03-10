"use client";

import Container from "@/components/common/container";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

const packages = [
  {
    title: "Jade Signature Rooms",
    desc: "Luxury stay with breakfast",
    image: "/assets/home/063.jpg",
    link: "/rooms",
  },
  {
    title: "Araliya Bar",
    desc: "Premium spirits & calm ambiance",
    image: "/assets/home/0010.jpg",
    link: "/",
  },
  {
    title: "Emerald Table",
    desc: "Refined flavors served in an elegant setting.",
    image: "/assets/home/004.jpg",
    link: "/restaurant",
  },
];

const packages1 = [
  {
    title: "Jade Royal Weddings",
    desc: "Perfect for weddings & events",
    image: "/assets/home/005.jpg",
    link: "/weddings",
  },
  {
    title: "Prestige Event Space",
    desc: "A distinguished space for productive gatherings.",
    image: "/assets/home/007.jpg",
    link: "/",
  },
];
function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}+</span>;
}

export default function Homepage() {
  const router = useRouter();
  return (
    <section className="py-32 bg-neutral-50">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome to
            <span className="block text-primary mt-3">Jade Green Hotel</span>
          </h1>

          <p className="mt-6 text-lg text-black/70 leading-relaxed">
            Where comfort, elegance, and heartfelt hospitality unite. At Jade
            Green Hotel, we create exceptional stays, memorable dining
            experiences, and grand celebrations in a setting inspired by nature.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 "
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="group relative h-[360px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => router.push(pkg.link)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <div className="h-1 w-10 bg-primary rounded-full mb-4 group-hover:w-16 transition-all" />

                <h3 className="text-2xl font-semibold tracking-tight ">
                  {pkg.title}
                </h3>

                <p className="mt-2 text-lg text-white/80">{pkg.desc}</p>

                <span className="mt-6 text-sm font-semibold text-white">
                  View Details →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-10 flex md:flex-row flex-col gap-8 justify-center "
        >
          {packages1.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="group relative h-[360px] md:w-[720px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => router.push(pkg.link)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <div className="h-1 w-10 bg-primary rounded-full mb-4 group-hover:w-16 transition-all" />

                <h3 className="text-2xl font-semibold tracking-tight">
                  {pkg.title}
                </h3>

                <p className="mt-2 text-lg text-white/80">{pkg.desc}</p>

                <span className="mt-6 text-sm font-semibold text-white">
                  View Details →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* booking rooms */}
        {/* Room Booking */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative rounded-3xl bg-white shadow-2xl border border-black/5 p-8 md:p-10">
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Book Your Stay
              </h2>
              <p className="mt-3 text-black/60">
                Find the perfect room for your next getaway
              </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
              {/* Check In */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-black/70 mb-2">
                  Check In
                </label>
                <input
                  type="date"
                  className="h-12 rounded-xl border border-black/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Check Out */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-black/70 mb-2">
                  Check Out
                </label>
                <input
                  type="date"
                  className="h-12 rounded-xl border border-black/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-black/70 mb-2">
                  Guests
                </label>
                <select className="h-12 rounded-xl border border-black/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>

              {/* Room Type */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-black/70 mb-2">
                  Room Type
                </label>
                <select className="h-12 rounded-xl border border-black/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Any</option>
                  <option>Deluxe</option>
                  <option>Suite</option>
                  <option>Family</option>
                </select>
              </div>

              {/* CTA */}
              <button className="h-12 rounded-xl bg-primary text-white font-semibold hover:scale-[1.03] transition-transform">
                Find Rooms
              </button>
            </div>
          </div>
        </motion.div>
        {/* why choose us */}
        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-40"
        >
          <Container>
            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Why Choose Jade Green Hotel
              </h2>

              <p className="mt-6 text-lg text-black/60 leading-relaxed">
                A refined hospitality experience shaped by comfort, precision,
                and thoughtful attention to every detail.
              </p>
            </div>

            {/* Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
            >
              {[
                {
                  title: "Personalized Hospitality",
                  desc: "Attentive service crafted to anticipate your needs and elevate every stay.",
                },
                {
                  title: "Luxury Accommodations",
                  desc: "Beautifully designed rooms offering comfort, privacy, and calm sophistication.",
                },
                {
                  title: "Prime Location",
                  desc: "Perfectly positioned for convenience while maintaining a peaceful atmosphere.",
                },
                {
                  title: "Exceptional Dining",
                  desc: "A carefully curated culinary journey using quality ingredients and refined taste.",
                },
                {
                  title: "Event & Wedding Excellence",
                  desc: "Elegant venues supported by experienced planning and seamless execution.",
                },
                {
                  title: "Modern Facilities",
                  desc: "Well-maintained amenities designed for leisure, business, and special occasions.",
                },
                {
                  title: "Trusted Standards",
                  desc: "Consistent quality, hygiene, and safety upheld across all guest experiences.",
                },
                {
                  title: "Memorable Experiences",
                  desc: "Thoughtful details that create lasting impressions beyond your stay.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="group relative rounded-3xl bg-white border border-black/5 p-10 shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="absolute top-0 left-0 h-[3px] w-12 bg-primary rounded-full transition-all duration-500 group-hover:w-24" />
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm text-black/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </motion.section>

        {/* Luxury Rooms */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-40"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Luxury Rooms & Suites
              </h2>

              <p className="mt-6 text-lg text-black/60 leading-relaxed">
                Thoughtfully designed spaces that combine elegance, comfort, and
                modern amenities for a restful stay.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                {
                  slug: "deluxe-single",
                  name: "Deluxe Single",
                  image: "/assets/rooms/092.jpg",
                  price: "LKR 13,650",
                  features: [
                    "Tea/Coffee Making Facility",
                    "Split Type Air-Conditioning",
                    "Safe Deposit Box",
                    "Hot/Cold Water",
                    "IDD Facility",
                    "Writing Desk",
                    "TV",
                  ],
                  discount: "10%",
                },
                {
                  slug: "deluxe-double",
                  name: "Deluxe Double",
                  image: "/assets/rooms/084.jpg",
                  price: "LKR 18,300",
                  features: [
                    "Tea/Coffee Making Facility",
                    "Split Type Air-Conditioning",
                    "Safe Deposit Box",
                    "Hot/Cold Water",
                    "IDD Facility",
                    "Writing Desk",
                    "TV",
                  ],
                  discount: "10%",
                },
                {
                  slug: "deluxe-family",
                  name: "Deluxe Family",
                  image: "/assets/rooms/080.jpg",
                  price: "LKR 23,100",
                  features: [
                    "Tea/Coffee Making Facility",
                    "Split Type Air-Conditioning",
                    "Safe Deposit Box",
                    "Hot/Cold Water",
                    "IDD Facility",
                    "Writing Desk",
                    "TV",
                  ],
                  discount: "10%",
                },
              ].map((room) => (
                <motion.div
                  key={room.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all"
                >
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />

                  <div className="relative z-10 p-8">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {room.name}
                    </h3>

                    <ul className="mt-4 space-y-2 text-sm text-black/60">
                      {room.features.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm text-black/50">From</p>
                        <p className="text-2xl font-semibold text-primary">
                          {room.price}
                          <span className="text-sm font-normal text-black/50">
                            {" "}
                            / Onwards
                          </span>
                        </p>
                      </div>

                      <button
                        className="rounded-xl border border-primary px-2 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
                        onClick={() => router.push(`/rooms/${room.slug}`)}
                      >
                        View Details
                      </button>
                    </div>
                    {room.discount && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-400 px-4 py-1.5 text-xs font-semibold text-white shadow-lg w-fit"
                      >
                        {room.discount} OFF
                        <span className="text-white/80 ">online booking</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-20 text-center">
              <button
                className="rounded-2xl bg-primary px-8 py-4 text-white text-lg font-semibold hover:scale-[1.03] transition-transform"
                onClick={() => router.push(`/rooms`)}
              >
                View All Rooms
              </button>
            </div>
          </Container>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-40 bg-primary text-white rounded-3xl py-20"
        >
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { number: 120, label: "Weddings" },
                { number: 350, label: "Events" },
                { number: 500, label: "Functions" },
                { number: 85, label: "Professional Staff" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="flex flex-col items-center"
                >
                  <h3 className="text-4xl md:text-5xl font-bold">
                    <Counter end={item.number} />
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-white/80 tracking-wide uppercase">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </motion.section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center"></div>
        </section>

        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Find Us
              </h2>
              <p className="mt-4 text-lg text-black/60">
                Visit Jade Green Boutique Hotel in Hambantota, Sri Lanka
              </p>
            </div>

            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9640916735057!2d81.12802497599209!3d6.135527127548249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6bdfee8349837%3A0x7947ce983a4b8dec!2sJade%20Green%20Hotel%20Hambantota!5e0!3m2!1sen!2slk!4v1770797013609!5m2!1sen!2slk"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0 rounded-3xl"
              ></iframe>
            </div>
          </Container>
        </section>
      </Container>
    </section>
  );
}