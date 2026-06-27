"use client";

import { Bell, Search, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

      <div className="flex items-center justify-between px-8 py-4">

        <div>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

            NEWS PULSE AI

          </h1>

          <p className="text-gray-400 text-sm">

            Real-Time Global Intelligence

          </p>

        </div>

        <div className="flex items-center gap-4">

          <button className="p-3 rounded-xl bg-white/10 hover:bg-cyan-500 transition">

            <Search size={20} />

          </button>

          <button className="p-3 rounded-xl bg-white/10 hover:bg-purple-500 transition">

            <Bell size={20} />

          </button>

          <button className="p-3 rounded-xl bg-white/10 hover:bg-orange-500 transition">

            <Moon size={20} />

          </button>

        </div>

      </div>

    </header>
  );
}