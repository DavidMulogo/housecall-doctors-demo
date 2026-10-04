"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "How It Works",
      href: "#how-it-works",
    },
    {
      label: "Why Us",
      href: "#about",
    },
    {
      label: "Coverage",
      href: "#coverage",
    },
    {
      label: "Insurance",
      href: "#insurance",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#073B4C] transition hover:border-teal-300 hover:text-teal-600 lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[200] bg-[#031F29]/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* DRAWER */}
      <div
        className={`fixed right-0 top-0 z-[210] flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Stethoscope size={21} />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[#073B4C]">
                HOUSE CALL DOCTORS
              </p>

              <p className="text-[10px] font-bold tracking-[0.22em] text-teal-600">
                ZANZIBAR
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#073B4C] transition hover:bg-slate-200"
          >
            <X size={21} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </p>

          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-lg font-bold text-[#073B4C] transition hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CONTACT PANEL */}
          <div className="mt-8 rounded-[1.5rem] bg-[#F2FAF9] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">
              Need medical help?
            </p>

            <p className="mt-2 text-lg font-extrabold text-[#073B4C]">
              We&apos;re available 24/7.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Contact House Call Doctors for assistance at your hotel,
              villa or residence.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:+255629227983"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-[#073B4C] px-5 py-4 font-extrabold text-white"
            >
              <Phone size={18} />
              Call a Doctor
            </a>

            <a
              href="https://wa.me/255629227983"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-4 font-extrabold text-white"
            >
              <MessageCircle size={18} />
              WhatsApp 24/7
            </a>
          </div>
        </nav>

        {/* BOTTOM */}
        <div className="border-t border-slate-100 px-6 py-4 text-center text-xs text-slate-400">
          24/7 Tourist Medical Assistance
        </div>
      </div>
    </>
  );
}