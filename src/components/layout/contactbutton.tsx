"use client";
import Link from "next/link";
import Container from "../common/container";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
type ContactButtonProps = {
  floating?: boolean;
};

export default function ContactButton({
  floating = false,
}: ContactButtonProps) {
  const button = (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 block "
    >
      <Link href="https://wa.me/94771781176">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="WhatsApp"
          className="bg-green-500 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all flex items-center justify-center"
        >
          <MessageCircle size={28} strokeWidth={2.3} />
        </motion.button>
      </Link>
    </motion.div>
  );

  if (floating) return button;

  return <Container>{button}</Container>;
}
