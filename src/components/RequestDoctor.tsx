"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  MapPin,
  MessageCircle,
  Phone,
  Stethoscope,
  User,
  X,
} from "lucide-react";

type RequestDoctorProps = {
  label?: string;
  className?: string;
  icon?: boolean;
};

export default function RequestDoctor({
  label = "Get a Doctor",
  className = "",
  icon = true,
}: RequestDoctorProps) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeModal() {
    setOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Hello House Call Doctors,

I would like to request medical assistance.

Name: ${name}
Hotel / Location: ${location}
Phone: ${phone}
Medical concern: ${concern}

Please contact me regarding a doctor visit.`;

    const whatsappUrl = `https://wa.me/255629227983?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {icon && <Stethoscope size={18} />}
        {label}
      </button>

      {/* OVERLAY */}
      <div
        onClick={closeModal}
        className={`fixed inset-0 z-[300] bg-[#031F29]/70 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* MODAL */}
      <div
        className={`fixed inset-0 z-[310] flex items-end justify-center p-0 transition-all duration-300 sm:items-center sm:p-6 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`max-h-[94vh] w-full overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl transition-transform duration-300 sm:max-w-xl sm:rounded-[2rem] ${
            open
              ? "translate-y-0"
              : "translate-y-full sm:translate-y-8"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-start justify-between border-b border-slate-100 px-6 py-6 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                <Stethoscope size={23} />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-600">
                  24/7 Medical Assistance
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-[#073B4C]">
                  Request a Doctor
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Tell us where you are and how we can help.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close doctor request form"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#073B4C] transition hover:bg-slate-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="space-y-5">
              {/* NAME */}
              <div>
                <label
                  htmlFor="patient-name"
                  className="mb-2 block text-sm font-bold text-[#073B4C]"
                >
                  Your name
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
                  <User size={18} className="shrink-0 text-slate-400" />

                  <input
                    id="patient-name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* LOCATION */}
              <div>
                <label
                  htmlFor="patient-location"
                  className="mb-2 block text-sm font-bold text-[#073B4C]"
                >
                  Hotel or current location
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
                  <MapPin size={18} className="shrink-0 text-slate-400" />

                  <input
                    id="patient-location"
                    type="text"
                    required
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="e.g. Nungwi Beach Resort"
                    className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="patient-phone"
                  className="mb-2 block text-sm font-bold text-[#073B4C]"
                >
                  Phone / WhatsApp number
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100">
                  <Phone size={18} className="shrink-0 text-slate-400" />

                  <input
                    id="patient-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+255..."
                    className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* CONCERN */}
              <div>
                <label
                  htmlFor="patient-concern"
                  className="mb-2 block text-sm font-bold text-[#073B4C]"
                >
                  Briefly describe the medical concern
                </label>

                <textarea
                  id="patient-concern"
                  required
                  value={concern}
                  onChange={(event) => setConcern(event.target.value)}
                  placeholder="e.g. Fever, vomiting and stomach pain since this morning."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-4 outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* NOTICE */}
            <div className="mt-6 rounded-xl bg-[#F2FAF9] p-4 text-sm leading-6 text-slate-600">
              Your request will open in WhatsApp so you can send the details
              directly to House Call Doctors.
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              <MessageCircle size={19} />
              Send Request on WhatsApp
            </button>

            <a
              href="tel:+255629227983"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-[#073B4C] transition hover:border-teal-300"
            >
              <Phone size={18} />
              Or call +255 629 227 983
            </a>

            <p className="mt-5 text-center text-xs leading-5 text-slate-400">
              For severe or life-threatening conditions, seek urgent emergency
              medical care.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}