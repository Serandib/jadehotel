"use client";

import Container from "@/components/common/container";
import { motion } from "framer-motion";
import { Briefcase, Users, Sparkles } from "lucide-react";

const jobs = [
  {
    title: "Front Office Executive",
    description:
      "Responsible for welcoming guests, handling reservations, and ensuring excellent customer service.",
    responsibilities: [
      "Greet and assist guests professionally",
      "Handle check-in and check-out procedures",
      "Manage bookings and inquiries",
    ],
    requirements: [
      "Good communication skills",
      "Basic computer knowledge",
      "Previous hotel experience is an advantage",
    ],
  },
  {
    title: "Housekeeping Staff",
    description:
      "Ensure cleanliness and hygiene standards are maintained throughout the hotel.",
    responsibilities: [
      "Clean and maintain guest rooms",
      "Ensure linen and supplies are replenished",
      "Report maintenance issues",
    ],
    requirements: [
      "Attention to detail",
      "Ability to work flexible hours",
      "Prior experience preferred",
    ],
  },
  {
    title: "Chef / Kitchen Assistant",
    description:
      "Support kitchen operations and assist in preparing high-quality meals.",
    responsibilities: [
      "Assist chefs in food preparation",
      "Maintain kitchen cleanliness",
      "Follow food safety standards",
    ],
    requirements: [
      "Basic culinary knowledge",
      "Ability to work under pressure",
      "Hotel or restaurant experience preferred",
    ],
  },
  {
    title: "Restaurant Service Staff",
    description: "Provide friendly and efficient service to restaurant guests.",
    responsibilities: [
      "Take food and beverage orders",
      "Serve guests courteously",
      "Maintain dining area cleanliness",
    ],
    requirements: [
      "Good interpersonal skills",
      "Customer-focused attitude",
      "Prior experience is a plus",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="py-32 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1 text-green-700 text-sm font-medium mb-6">
              <Sparkles size={16} />
              Careers at Jade Green
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Career With Us
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join a passionate team dedicated to exceptional hospitality,
              meaningful experiences, and personal growth.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24 bg-primary/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Work at Jade Green?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mt-4">
              We believe our people are our greatest strength.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={36} />,
                title: "Supportive Team",
                desc: "Work with friendly professionals who value teamwork.",
              },
              {
                icon: <Briefcase size={36} />,
                title: "Career Growth",
                desc: "Opportunities to learn, grow, and advance your career.",
              },
              {
                icon: <Sparkles size={36} />,
                title: "Positive Culture",
                desc: "A respectful, inclusive, and motivating workplace.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="mb-4 text-primary mx-auto">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* OPEN POSITIONS */}
      {/* OPEN POSITIONS */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Current Openings</h2>
            <p className="text-gray-700 mt-4">
              Click on a role to view job responsibilities and details.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl border p-6 open:shadow-lg transition"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <span className="text-primary font-bold group-open:rotate-45 transition">
                    +
                  </span>
                </summary>

                {/* Job Details */}
                <div className="mt-6 space-y-4 text-gray-600">
                  <p>{job.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Responsibilities
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {job.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Requirements
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {job.requirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="pt-4 font-medium text-gray-800">
                    📧 Send your CV to:{" "}
                    <span className="text-primary">
                      careers@jadegreenhotel.com
                    </span>
                  </p>
                </div>
              </motion.details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
