"use client";
import { AnimationImageType } from "@/constans/Contstants";
import { motion } from "framer-motion";

export default function AnimatedImage({
  src,
  alt,
  styles,
}: AnimationImageType) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // 👈 importante
      className={styles}
    />
  );
}
