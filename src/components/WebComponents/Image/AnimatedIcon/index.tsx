"use client";
import { AnimationImageType } from "@/constans/GeneralType";
import { motion } from "framer-motion";

export default function AnimatedIcon({ src, alt, styles }: AnimationImageType) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // 👈 importante
      className={styles}
    />
  );
}
