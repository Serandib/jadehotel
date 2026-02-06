"use client";

import Container from "@/components/common/container";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contactus() {
  return (
    <section className="bg-neutral-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-20 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-primary">
            Contact Us
          </h1>
          <p className="mt-5 text-lg text-black leading-relaxed">
            Reach out to Jade Green Hambantota for bookings, inquiries,
            or assistance. We’re always happy to help.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Image */}
            <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/assets/home/046.jpg"
                alt="Jade Green Hotel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Phone size={22} />,
                  title: "Phone",
                  value: "+94 472 220 692",
                },
                {
                  icon: <Mail size={22} />,
                  title: "Email",
                  value: "info@jadegreen.lk",
                },
                {
                  icon: <MapPin size={22} />,
                  title: "Location",
                  value: "Leywaya Road, Hambantota",
                },
                {
                  icon: <Clock size={22} />,
                  title: "Available",
                  value: "7.00 AM – 10.30 PM",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-black/50">{item.title}</p>
                    <p className="font-semibold text-black/80">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Check-in Info */}
            <div className="rounded-3xl bg-primary/25 border border-primary/20 p-8">
              <h3 className="text-lg font-semibold mb-4">
                Check-In & Check-Out
              </h3>

              <div className="flex justify-between text-black/70">
                <span>Check-In</span>
                <span className="font-medium">14:00 PM</span>
              </div>

              <div className="mt-2 flex justify-between text-black/70">
                <span>Check-Out</span>
                <span className="font-medium">12:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl border border-black/5 p-10"
          >
            <h2 className="text-2xl font-semibold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full h-12 rounded-xl border border-black/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-12 rounded-xl border border-black/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black/70 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 w-full h-12 rounded-xl bg-primary text-white font-semibold text-lg hover:scale-[1.02] transition-transform"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
