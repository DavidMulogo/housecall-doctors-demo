"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import RequestDoctor from "@/components/RequestDoctor";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#about" },
    { label: "Coverage", href: "#coverage" },
    { label: "Insurance", href: "#insurance" },
    { label: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#111111] shadow-sm lg:hidden"
      >
        <Menu size={22} />
      </button>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[200] bg-black/60 transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[300] flex h-dvh w-[88%] max-w-[390px] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
              <Image
                src="/housecall-logo.jpg"
                alt="House Call Doctors Zanzibar logo"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[14px] font-extrabold leading-tight text-[#111111]">
                HOUSE CALL DOCTORS
              </p>

              <p className="mt-1 text-[10px] font-bold tracking-[0.22em] text-[#0A6B2E]">
                ZANZIBAR
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-[#111111]"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-white px-5 py-6">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </p>

          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-slate-100 py-4 text-[17px] font-bold text-[#111111] transition hover:text-[#0A6B2E]"
              >
                {link.label}
                <span className="text-[#0A6B2E]">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-7 rounded-[1.5rem] bg-[#F6FBF7] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8A5A2B]">
              Need medical help?
            </p>

            <p className="mt-2 text-xl font-extrabold text-[#111111]">
              We&apos;re available 24/7.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Request a doctor to your hotel, villa or residence.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <div onClick={closeMenu}>
              <RequestDoctor
                label="Request a Doctor"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#064722] px-5 py-4 font-extrabold text-white shadow-sm"
              />
            </div>

            <a
              href="tel:+255629227983"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-4 font-extrabold text-[#111111]"
            >
              <Phone size={18} />
              Call a Doctor
            </a>

            <a
              href="https://wa.me/255629227983"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-[#0A6B2E] px-5 py-4 font-extrabold text-white shadow-sm"
            >
              <MessageCircle size={18} />
              WhatsApp 24/7
            </a>
          </div>
        </div>

        <div className="shrink-0 border-t border-slate-200 bg-white px-5 py-4 text-center text-xs font-medium text-slate-400">
          24/7 Tourist Medical Assistance
        </div>
      </aside>
    </>
  );
}