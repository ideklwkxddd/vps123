"use client";

import { motion } from "framer-motion";
import { Users, Zap, Shield, Star, ArrowRight, DiscordLogoIcon } from "@lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0e1a] to-black">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/70 border-b border-cyan-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold">
              E
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Elisium
            </h1>
          </div>
          <div className="flex gap-6 items-center">
            <a href="/dashboard" className="hover:text-cyan-400 transition">Dashboard</a>
            <a href="/about" className="hover:text-cyan-400 transition">About</a>
            <a href="/policy" className="hover:text-cyan-400 transition">Policy</a>
            <a href="https://discord.gg/elisium" target="_blank" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              <DiscordLogoIcon /> Join Discord
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            ELISIUM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-6 text-gray-300"
          >
            The Most Powerful Mobile Script Ever Made
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <a
              href="https://discord.gg/elisium"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:scale-110 transition flex items-center gap-3"
            >
              Get Whitelisted <ArrowRight />
            </a>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { icon: Users, value: "18.5K+", label: "Active Users" },
              { icon: Zap, value: "99.9%", label: "Uptime" },
              { icon: Shield, value: "Zero", label: "Detections" },
              { icon: Star, value: "4.9/5", label: "Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur"
              >
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto" />
                <p className="text-4xl font-bold mt-4 text-cyan-400">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fake Login (Looks real, does nothing) */}
      <section className="py-20 px-6 bg-black/50">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/50 rounded-2xl p-10 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Account Login
            </h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-black/50 border border-cyan-800 rounded-lg px-5 py-4 mb-4 focus:border-cyan-400 outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-black/50 border border-cyan-800 rounded-lg px-5 py-4 mb-6 focus:border-cyan-400 outline-none transition"
            />
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-lg font-bold text-xl hover:scale-105 transition">
              Login
            </button>
            <p className="text-center mt-6 text-gray-400">
              Don't have an account?{" "}
              <a href="#" className="text-cyan-400 hover:underline">
                Create one
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}