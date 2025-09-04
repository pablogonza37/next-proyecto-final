"use client"
import { motion } from "framer-motion"
import {
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react"


export const Footer = () => {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }
  return (
    <motion.footer
      className="bg-gradient-to-b from-black to-gray-900 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.a href="#" className="text-gray-200 hover:text-blue-500 transition-colors" variants={fadeInUp}>
            Términos y condiciones
          </motion.a>
          <motion.a href="#" className="text-gray-200 hover:text-blue-500 transition-colors" variants={fadeInUp}>
            Políticas de privacidad
          </motion.a>
          <motion.a href="#" className="text-gray-200 hover:text-blue-500 transition-colors" variants={fadeInUp}>
            FAQ
          </motion.a>
          <motion.a href="#" className="text-gray-200 hover:text-blue-500 transition-colors" variants={fadeInUp}>
            Contactanos
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mb-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.2 }}
          >
            <Twitter className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-red-500 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.2 }}
          >
            <Youtube className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.2 }}
          >
            <MessageCircle className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.2 }}
          >
            <Facebook className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            variants={fadeInUp}
            whileHover={{ scale: 1.2 }}
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400">Copyright © 2025 Aula Link todos los derechos reservados</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
