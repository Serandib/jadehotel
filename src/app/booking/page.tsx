"use client";

import Container from "@/components/common/container";
import BeBookingForm from "@/components/be-forms/BeBookingForm";
import { motion } from "framer-motion";

export default function BookingPage() {

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Booking
          </h1>
        </motion.div>
      </Container>

      <BeBookingForm />
    </section>
  );
}
