"use client";

import { useState } from "react";
import Container from "@/components/common/container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// All gallery images
const galleryData: Record<string, string[]> = {
  Weddings: [
    "/assets/gallery/weddings/080.jpg",
    "/assets/gallery/weddings/084.jpg",
  ],
  Events: [
    "/assets/gallery/even/042.jpg",
    "/assets/gallery/even/046.jpg",
  ],
  Functions: [
    "/assets/gallery/functions/001.jpg",
    "/assets/gallery/functions/035.jpg",
  ],
};

// Representative cover images for each folder
const folderCovers: Record<string, string> = {
  Weddings: "/assets/gallery/weddings/080.jpg",
  Events: "/assets/gallery/even/042.jpg",
  Functions: "/assets/gallery/functions/001.jpg",
};

export default function GalleryPage() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-24  bg-white mb-44">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Explore moments captured from our weddings, events, and functions.
          </p>
        </motion.div>

        {/* Folder View */}
        {!selectedFolder && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {Object.keys(galleryData).map((folder) => (
              <motion.div
                key={folder}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 140 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedFolder(folder)}
              >
                <Image
                  src={folderCovers[folder]}
                  alt={`${folder} Cover`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25 rounded-2xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-2xl font-bold text-white">{folder}</h3>
                  <p className="text-white/80 mt-1">
                    {galleryData[folder].length} Images
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Image View */}
        {selectedFolder && (
          <>
            <div className="flex justify-between items-center mb-6">
              <button
                className="text-sm text-green-700 font-semibold hover:underline"
                onClick={() => setSelectedFolder(null)}
              >
                ← Back to Folders
              </button>
              <h2 className="text-xl font-bold">{selectedFolder} Gallery</h2>
              <div /> {/* empty placeholder to balance flex */}
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {galleryData[selectedFolder].map((img) => (
                <motion.div
                  key={img}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setLightbox(img)}
                >
                  <Image
                    src={img}
                    alt={`${selectedFolder} Image`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl" />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl max-h-[90vh]"
            >
              <Image
                src={lightbox}
                alt="Gallery Image"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
