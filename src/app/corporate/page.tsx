"use client";

import Container from "@/components/common/container";
import BeSearchForm from "@/components/be-forms/BeSearchForm";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Mic,
  Presentation,
  Coffee,
  Car,
  BedDouble,
  CheckCircle2,
} from "lucide-react";

const facilities = [
  "Spacious air-conditioned banquet hall",
  "Seating capacity for up to 350 guests",
  "Professional event setup arrangements",
  "Audio and sound system support",
  "Large presentation space",
  "Catering services with customized menus",
  "Tea / coffee breaks and corporate dining options",
  "Ample parking for guests",
  "Comfortable accommodation for event participants",
];

const highlights = [
  {
    icon: Building2,
    title: "Professional Venue",
    desc: "A refined space designed for conferences, meetings, workshops, and business gatherings.",
  },
  {
    icon: Mic,
    title: "Event Support",
    desc: "Dedicated arrangements and sound support to help your event run smoothly and professionally.",
  },
  {
    icon: Presentation,
    title: "Presentation Ready",
    desc: "Spacious event setup with room for presentations, corporate sessions, and formal gatherings.",
  },
];

const serviceIcons = [
  { icon: Building2, label: "Banquet Hall" },
  { icon: Briefcase, label: "Corporate Setup" },
  { icon: Mic, label: "Audio Support" },
  { icon: Presentation, label: "Presentation Space" },
  { icon: Coffee, label: "Dining Options" },
  { icon: Car, label: "Ample Parking" },
  { icon: BedDouble, label: "Accommodation" },
];

export default function CorporateEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <Container>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-70" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 py-32 text-center max-w-4xl mx-auto pb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Briefcase size={16} />
              Corporate Events at Jade Green
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              A Professional Venue for
              <span className="block mt-2 text-primary">
                Corporate Events in Hambantota
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-black/65 max-w-3xl mx-auto">
              Host your next corporate event in a setting that combines
              professionalism, comfort, and elegance. At Jade Green Hotel
              Hambantota, we provide the ideal venue for meetings, conferences,
              workshops, and business gatherings.
            </p>
          </motion.div>

          <div className="py-10">
            <BeSearchForm />
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="pb-10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Corporate Excellence
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
                  Precision, comfort, and elegance for every business gathering
                </h2>
              </div>

              <p className="text-black/65 leading-relaxed">
                Our spacious banquet hall and dedicated event team ensure that
                every corporate function is organized with precision and
                attention to detail, allowing you to focus on what matters most.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-black/8 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-black">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-black/65 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[420px] md:h-[520px] overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <Image
                src="/assets/menu/003.png"
                alt="Corporate event venue at Jade Green Hotel Hambantota"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                  Business Meets Hospitality
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
                  A spacious and elegant venue for successful corporate gatherings
                </h3>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Facilities & Services
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Everything you need for a successful corporate event
            </h2>
            <p className="mt-5 text-black/65 leading-relaxed">
              We provide all the essential facilities and services required to
              host professional, well-organized, and comfortable corporate
              gatherings.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-black/6 bg-white p-5 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <p className="text-black/70 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Icons Strip */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {serviceIcons.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl border border-black/6 bg-neutral-50 px-4 py-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-black/70">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Customized Packages */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-black/6 bg-neutral-50 p-8 md:p-10 shadow-sm"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                Customized Corporate Packages
              </h3>

              <p className="text-black/70 leading-relaxed mb-5">
                At Jade Green Hotel, we understand that every corporate event is
                unique. Our team can arrange customized event packages according
                to your requirements, including venue setup, catering options,
                and accommodation for guests.
              </p>

              <p className="text-black/70 leading-relaxed">
                Simply share your event details with us, and we will tailor a
                package that perfectly fits your needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="rounded-[2rem] bg-primary text-white p-8 md:p-10 shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                Plan Your Next Corporate Event With Us
              </h3>

              <p className="text-white/90 leading-relaxed mb-5">
                Whether it’s a professional conference, team gathering, workshop,
                or corporate celebration, Jade Green Hotel offers the space,
                service, and atmosphere to make your event successful.
              </p>

              <p className="text-white/90 leading-relaxed">
                Let our team assist you in creating a smooth, professional, and
                memorable corporate experience.
              </p>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 border border-white/10">
                <p className="text-sm text-white/85 leading-relaxed">
                  Contact us with your event date, guest count, seating style,
                  and catering requirements, and our team will help prepare the
                  ideal arrangement for your corporate function.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <div className="relative h-[420px] md:h-[500px]">
              
              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div className="max-w-3xl text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/75">
                    Book Your Corporate Event
                  </p>
                  <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
                    A venue designed for productive and memorable business events
                  </h2>
                  <p className="mt-5 text-white/85 leading-relaxed">
                    Host your next conference, meeting, or corporate celebration
                    at Jade Green Hotel Hambantota with professional support,
                    refined hospitality, and tailored event packages.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contactus"
                      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                    >
                      Inquire Now
                    </a>
                    <a
                      href="/gallery"
                      className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      View Gallery
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}