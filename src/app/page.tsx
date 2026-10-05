import Image from "next/image";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  CreditCard,
  FlaskConical,
  Globe2,
  Headset,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react";

import MobileMenu from "@/components/MobileMenu";
import RequestDoctor from "@/components/RequestDoctor";

export default function Home() {
  const services = [
    {
      icon: Hotel,
      title: "House Call Doctors",
      text: "Care delivered directly to your hotel or residence.",
    },
    {
      icon: Video,
      title: "Telemedicine",
      text: "Speak with a medical professional wherever you are.",
    },
    {
      icon: FlaskConical,
      title: "Diagnostics",
      text: "Testing and medical diagnostic support.",
    },
    {
      icon: Stethoscope,
      title: "Specialist Care",
      text: "Access to specialist medical support when required.",
    },
  ];

  const benefits = [
    "Available 24/7",
    "Hotel & villa visits",
    "Tourist-focused care",
    "International insurance",
    "Card payments",
    "Telemedicine support",
  ];

  const locations = [
    {
      name: "Zanzibar",
      description: "Our primary home-call medical service area.",
      featured: true,
    },
    {
      name: "Tanzania Mainland",
      description: "Medical assistance through our regional network.",
      featured: false,
    },
    {
      name: "Mafia Island",
      description: "Tourist medical support when assistance is needed.",
      featured: false,
    },
    {
      name: "Kenya",
      description: "Regional support through trusted medical partners.",
      featured: false,
    },
    {
      name: "Mauritius",
      description: "Medical assistance through our extended network.",
      featured: false,
    },
    {
      name: "Madagascar",
      description: "Connected care across the Indian Ocean region.",
      featured: false,
    },
  ];

  const insurancePartners = [
    {
      name: "Europ Assistance",
      src: "/insurance/europ-assistance.jpg",
    },
    {
      name: "Global Assistance",
      src: "/insurance/global-assistance.jpg",
    },
    {
      name: "Allianz Partners",
      src: "/insurance/allianz-partners.jpg",
    },
  ];

  const paymentMethods = [
    { name: "Visa", src: "/payments/visa.svg" },
    { name: "Mastercard", src: "/payments/mastercard.svg" },
    { name: "Maestro", src: "/payments/maestro.svg" },
    { name: "UnionPay", src: "/payments/unionpay.svg" },
    { name: "American Express", src: "/payments/americanexpress.svg" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* TOP CONTACT BAR */}
      <div className="bg-[#064722] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
          <div className="flex items-center gap-2 font-medium">
            <Clock3 size={15} className="shrink-0" />
            <span>24/7 Tourist Medical Assistance in Zanzibar</span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="mailto:info@housecalldoctorsznz.co.tz"
              className="flex items-center gap-2 transition hover:text-green-200"
            >
              <Mail size={15} />
              info@housecalldoctorsznz.co.tz
            </a>

            <a
              href="tel:+255629227983"
              className="flex items-center gap-2 transition hover:text-green-200"
            >
              <Phone size={15} />
              +255 629 227 983
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="relative z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          {/* BRAND */}
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
              <Image
                src="/housecall-logo.jpg"
                alt="House Call Doctors Zanzibar logo"
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[14px] font-extrabold tracking-tight text-[#111111] sm:text-[15px]">
                HOUSE CALL DOCTORS
              </p>

              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#0A6B2E] sm:text-[11px]">
                ZANZIBAR
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#services" className="transition hover:text-[#0A6B2E]">
              Services
            </a>
            <a
              href="#how-it-works"
              className="transition hover:text-[#0A6B2E]"
            >
              How It Works
            </a>
            <a href="#about" className="transition hover:text-[#0A6B2E]">
              About
            </a>
            <a href="#coverage" className="transition hover:text-[#0A6B2E]">
              Coverage
            </a>
            <a href="#insurance" className="transition hover:text-[#0A6B2E]">
              Insurance
            </a>
            <a href="#contact" className="transition hover:text-[#0A6B2E]">
              Contact
            </a>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="ml-3 flex shrink-0 items-center gap-2">
            <RequestDoctor
              label="Get a Doctor"
              className="hidden items-center gap-2 rounded-full bg-[#0A6B2E] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#064722] hover:shadow-lg sm:flex"
            />

            <MobileMenu />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F6FBF7]">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/70 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-[#0A6B2E] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#0A6B2E]" />
              Doctors available 24/7
            </div>

            <h1 className="max-w-3xl text-[44px] font-extrabold leading-[1.03] tracking-[-0.045em] text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
              Medical care,
              <span className="block text-[#0A6B2E]">wherever you are.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              Professional medical care delivered directly to your hotel,
              villa or residence {"\u2014"} anywhere in Zanzibar.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <RequestDoctor
                label="Request a Doctor"
                className="flex items-center justify-center gap-2 rounded-full bg-[#064722] px-7 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0A6B2E]"
              />

              <a
                href="https://wa.me/255629227983"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-[#111111] shadow-sm transition hover:-translate-y-1 hover:border-[#0A6B2E] hover:shadow-md"
              >
                <MessageCircle size={19} className="text-[#0A6B2E]" />
                WhatsApp 24/7
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-7 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <Check size={17} className="text-[#0A6B2E]" />
                Hotel Visits
              </span>
              <span className="flex items-center gap-2">
                <Check size={17} className="text-[#0A6B2E]" />
                International Insurance
              </span>
              <span className="flex items-center gap-2">
                <Check size={17} className="text-[#0A6B2E]" />
                Card Payments
              </span>
              <span className="flex items-center gap-2">
                <Check size={17} className="text-[#0A6B2E]" />
                24/7 Support
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-green-200/50 to-amber-100/30 blur-2xl" />

            <div
              className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-cover bg-center shadow-2xl sm:min-h-[500px] lg:min-h-[520px]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(4,47,20,0.25), rgba(4,47,20,0.02)), url('/doctor-hero.png')",
              }}
            >
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                <div className="max-w-sm rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-[#0A6B2E]">
                      <Stethoscope size={23} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A6B2E]">
                        Doctor on call
                      </p>

                      <p className="mt-1 font-bold text-[#111111]">
                        Need medical assistance?
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Contact us and a medical professional can come directly
                        to your location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-5 top-8 hidden rounded-2xl border border-white bg-white px-5 py-4 shadow-xl md:block">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Availability
              </p>
              <div className="mt-1 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0A6B2E]" />
                <p className="font-bold text-[#111111]">
                  24 hours {"\u00B7"} 7 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-[#0A6B2E] transition group-hover:bg-[#0A6B2E] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="font-bold text-[#111111]">{service.title}</h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#F8FBF8]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A5A2B]">
              Simple & Convenient
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
              Medical care in three simple steps.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Getting medical assistance should not be complicated. Tell us
              where you are and we&apos;ll help arrange the care you need.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-[#0A6B2E]">
                <MessageCircle size={25} />
              </div>

              <p className="mt-6 text-xs font-extrabold tracking-[0.2em] text-[#8A5A2B]">
                STEP 01
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#111111]">
                Contact Us
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Call, WhatsApp or use the doctor request form to tell us where
                you are and the medical assistance you need.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-[#0A6B2E]">
                <Navigation size={25} />
              </div>

              <p className="mt-6 text-xs font-extrabold tracking-[0.2em] text-[#8A5A2B]">
                STEP 02
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#111111]">
                Doctor Comes to You
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A medical professional is arranged to visit your hotel, villa,
                residence or other location.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-[#0A6B2E]">
                <Stethoscope size={25} />
              </div>

              <p className="mt-6 text-xs font-extrabold tracking-[0.2em] text-[#8A5A2B]">
                STEP 03
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#111111]">
                Receive Care
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Get professional medical assessment and treatment without
                having to leave the comfort of your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HOUSE CALL DOCTORS */}
      <section id="about" className="bg-[#064722] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-200">
              Why House Call Doctors
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Healthcare designed around your journey.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Whether you are travelling, staying at a resort or living in
              Zanzibar, medical care can come directly to you when you need it.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-green-200">
                    <Check size={17} />
                  </div>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <RequestDoctor
                label="Request Medical Assistance"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A6B2E] px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#11803B]"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6">
            <div className="rounded-[1.7rem] bg-white p-6 text-slate-900 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8A5A2B]">
                Built for travellers
              </p>

              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111111]">
                Medical help without disrupting your stay.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Instead of finding transport, searching for a clinic or waiting
                in unfamiliar surroundings, medical support can come directly
                to you.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F6FBF7] p-5">
                  <Clock3 size={22} className="mb-4 text-[#0A6B2E]" />
                  <p className="text-3xl font-extrabold text-[#0A6B2E]">24/7</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Availability
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F6FBF7] p-5">
                  <MapPin size={22} className="mb-4 text-[#0A6B2E]" />
                  <p className="text-3xl font-extrabold text-[#0A6B2E]">
                    On-site
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Hotel & villa care
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F6FBF7] p-5">
                  <ShieldCheck size={22} className="mb-4 text-[#0A6B2E]" />
                  <p className="text-3xl font-extrabold text-[#0A6B2E]">
                    Global
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Insurance support
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F6FBF7] p-5">
                  <Headset size={22} className="mb-4 text-[#0A6B2E]" />
                  <p className="text-3xl font-extrabold text-[#0A6B2E]">Easy</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    Phone & WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A5A2B]">
                Our Coverage
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
                Medical support across the region.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Through our medical network and partnerships, House Call
                Doctors supports travellers across East Africa and the Indian
                Ocean.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F6FBF7] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A6B2E] text-white">
                  <Globe2 size={25} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8A5A2B]">
                    Based in Zanzibar
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#111111]">
                    Local care. Regional reach.
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Fast access to medical assistance for tourists,
                    accommodation providers and travellers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location.name}
                className={`rounded-[1.7rem] border p-7 transition hover:-translate-y-1 hover:shadow-lg ${
                  location.featured
                    ? "border-[#0A6B2E] bg-[#064722] text-white"
                    : "border-slate-100 bg-white"
                }`}
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full ${
                    location.featured
                      ? "bg-[#0A6B2E] text-white"
                      : "bg-green-50 text-[#0A6B2E]"
                  }`}
                >
                  <MapPin size={20} />
                </div>

                <h3
                  className={`text-xl font-extrabold ${
                    location.featured ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {location.name}
                </h3>

                <p
                  className={`mt-2 leading-7 ${
                    location.featured ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section id="insurance" className="bg-[#F8FBF8]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8A5A2B]">
              Insurance & Payments
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
              Travel with greater peace of mind.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              International assistance and insurance support together with
              convenient card payment options for travellers.
            </p>
          </div>

          <div className="mt-14">
            <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8A5A2B]">
                  International Assistance
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-[#111111]">
                  Insurance & assistance partners
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                Contact the team to confirm coverage for your specific insurer
                and policy.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {insurancePartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex min-h-36 items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 30vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-[#0A6B2E]">
                  <ShieldCheck size={23} />
                </div>

                <h3 className="mt-5 text-2xl font-extrabold text-[#111111]">
                  International insurance accepted
                </h3>

                <p className="mt-3 max-w-lg leading-7 text-slate-600">
                  Our team can assist with the information required during your
                  medical visit. Coverage depends on your insurer and
                  individual policy.
                </p>

                <a
                  href="https://wa.me/255629227983?text=Hello%20House%20Call%20Doctors%2C%20I%20would%20like%20to%20confirm%20whether%20my%20insurance%20is%20accepted."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#0A6B2E] transition hover:text-[#064722]"
                >
                  Ask about your insurance
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="lg:border-l lg:border-slate-200 lg:pl-10">
                <div className="flex items-center gap-3">
                  <CreditCard size={21} className="text-[#0A6B2E]" />

                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                    Cards Accepted
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.name}
                      className="flex min-h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                    >
                      <img
                        src={method.src}
                        alt={method.name}
                        className="h-9 max-w-[120px] object-contain"
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Major card payment options are available for international
                  travellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#064722] px-5 py-14 text-center text-white shadow-2xl sm:px-8 md:px-12 md:py-20">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-300/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-green-200">
                <span className="h-2 w-2 rounded-full bg-green-300" />
                Available 24 hours a day
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Feeling unwell in Zanzibar?
              </h2>

              <p className="mt-4 text-2xl font-bold text-green-200 md:text-3xl">
                A doctor can come to you.
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Whether you&apos;re at a hotel, villa or private residence,
                contact House Call Doctors for medical assistance.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <RequestDoctor
                  label="Request a Doctor"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-extrabold text-[#064722] shadow-lg transition hover:-translate-y-1"
                />

                <a
                  href="tel:+255629227983"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <Phone size={19} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/255629227983"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#0A6B2E] px-8 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#11803B]"
                >
                  <MessageCircle size={19} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-[#F8FBF8] pb-20 sm:pb-0">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/housecall-logo.jpg"
                    alt="House Call Doctors Zanzibar logo"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-extrabold text-[#111111]">
                    HOUSE CALL DOCTORS
                  </p>

                  <p className="text-xs font-bold tracking-[0.25em] text-[#0A6B2E]">
                    ZANZIBAR
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md leading-7 text-slate-600">
                24/7 tourist-focused house-call medical services and
                telemedicine from Zanzibar across the region.
              </p>
            </div>

            <div>
              <h3 className="font-extrabold text-[#111111]">Quick Links</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="#services" className="hover:text-[#0A6B2E]">
                  Services
                </a>
                <a href="#how-it-works" className="hover:text-[#0A6B2E]">
                  How It Works
                </a>
                <a href="#about" className="hover:text-[#0A6B2E]">
                  Why Us
                </a>
                <a href="#coverage" className="hover:text-[#0A6B2E]">
                  Coverage
                </a>
                <a href="#insurance" className="hover:text-[#0A6B2E]">
                  Insurance
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-[#111111]">Contact</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a
                  href="tel:+255629227983"
                  className="flex items-center gap-2 hover:text-[#0A6B2E]"
                >
                  <Phone size={15} />
                  +255 629 227 983
                </a>

                <a
                  href="mailto:info@housecalldoctorsznz.co.tz"
                  className="flex items-start gap-2 break-all hover:text-[#0A6B2E]"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  info@housecalldoctorsznz.co.tz
                </a>

                <p className="flex items-center gap-2">
                  <MapPin size={15} />
                  Zanzibar, Tanzania
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 House Call Doctors Zanzibar.</p>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#0A6B2E]" />
              24/7 Tourist Medical Assistance
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/255629227983"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact House Call Doctors on WhatsApp"
        className="fixed bottom-4 right-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[#0A6B2E] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#064722] sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-4"
      >
        <MessageCircle size={21} />
        <span className="hidden text-sm font-extrabold sm:inline">
          WhatsApp
        </span>
      </a>
    </main>
  );
}