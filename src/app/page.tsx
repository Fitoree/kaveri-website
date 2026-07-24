"use client";
import Image from "next/image";
import { Search } from "lucide-react";
import { Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Users, ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import { useState } from "react";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  
} from "react-icons/fa"

const translations = {
  fi: {
    home: "Etusivu",
    services: "Palvelut",
    about: "Meistä",
    gallery: "Galleria",
    contact: "Yhteystiedot",

    heroTitle: "Luotettavat kiinteistöpalvelut Suomessa",

    heroSubtitle: "Luotettavat kiinteistöpalvelut Suomessa",

    heroText:
      "Ammattitaitoista siivousta, kiinteistöhuoltoa ja ylläpitopalveluita Vantaan, Helsingin ja Espoon alueella.",

    call: "Soita nyt",
    quote: "Pyydä tarjous",
    servicesTitle: "Palvelumme",
servicesDescription: "Ammattitaitoista kiinteistöhuoltoa toimistoille, taloyhtiöille ja yksityisasiakkaille.",

cleaning: "Siivous",
cleaningText: "Ammattitaitoista siivousta toimistoille, taloyhtiöille ja liikekiinteistöille.",

garden: "Puutarhanhoito",
gardenText: "Ruohonleikkuuta, kausittaista puutarhanhoitoa ja ulkoalueiden ylläpitoa ympäri vuoden.",

snow: "Lumityöt",
snowText: "Nopeat ja luotettavat lumityöt, jotka pitävät kiinteistösi turvallisena talvella.",

freeQuote: "Pyydä ilmainen tarjous",
aboutLabel: "Meistä",

aboutTitle: "Luotettavaa kiinteistöhuoltoa Suomessa",

aboutText:
  "Kaveri Kiinteistöpalvelut tarjoaa luotettavia kiinteistöpalveluita taloyhtiöille, yrityksille ja yksityisasiakkaille ympäri Suomea. Kokenut tiimimme sitoutuu laadukkaaseen työhön, luotettavaan palveluun ja pitkäaikaiseen asiakastyytyväisyyteen jokaisessa projektissa.",

experience: "Yli 4 vuoden kokemus",
reliable: "Luotettava palvelu",
quality: "Laatu taattu",
serving: "Palvelemme Uudellamaalla",
galleryLabel: "Työmme",

galleryTitle: "Viimeisimmät projektit",

galleryText:
  "Katso joitakin viimeisimpiä siivous-, puutarhanhoito- ja talvikunnossapitoprojektejamme Helsingin alueella.",
  contactLabel: "Yhteystiedot",

contactTitle: "Tehdään yhteistyötä",

contactText:
  "Ota meihin yhteyttä ja pyydä ilmainen tarjous. Autamme luotettavilla kiinteistöpalveluilla Helsingin alueella.",

address: "Osoite",
phone: "Puhelin",
email: "Sähköposti",

yourName: "Nimesi",
yourEmail: "Sähköpostisi",
yourMessage: "Viestisi",

sending: "Lähetetään...",
sendMessage: "Lähetä viesti",
footerText:
  "Kaveri Kiinteistöpalvelut tarjoaa luotettavia kiinteistöpalveluita Vantaan, Helsingin ja Espoon alueella. Erikoistumme ammattimaiseen siivoukseen, ikkunoiden pesuun, puutarhanhoitoon, lumitöihin ja pysäköintialueiden ylläpitoon.",

footerContact: "Yhteystiedot",
footerServices: "Palvelut",

staircase: "Por­rassiivous",
office: "Toimistosiivous",
window: "Ikkunanpesu",
lawn: "Ruohonleikkuu",
yard: "Piha-alueiden ylläpito",
parking: "Pysäköintialueiden ylläpito",

  },

  en: {
    home: "Home",
    services: "Services",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",

    heroTitle: "Reliable Property Maintenance Services in Finland",

    heroSubtitle: "Reliable Property Maintenance Services in Finland",

    heroText:
      "Professional cleaning, property maintenance and outdoor services across Vantaa, Helsinki and Espoo.",

    call: "Call Now",
    quote: "Get Free Quote",
    servicesTitle: "Our Services",
servicesDescription: "Professional property maintenance services for offices, housing companies and private customers.",

cleaning: "Cleaning",
cleaningText: "Professional cleaning services for offices, housing companies and commercial properties.",

garden: "Garden Care",
gardenText: "Lawn mowing, seasonal garden care and outdoor maintenance throughout the year.",

snow: "Snow Removal",
snowText: "Fast and reliable snow removal to keep your property safe during winter.",

freeQuote: "Get a Free Quote",
aboutLabel: "About Us",

aboutTitle: "Reliable Property Maintenance in Finland",

aboutText:
  "At Kaveri Kiinteistöpalvelut, we provide reliable property maintenance services for housing companies, businesses and private customers throughout Finland. Our experienced team is committed to delivering high-quality work, dependable service and long-term customer satisfaction in every project.",

experience: "4+ Years Experience",
reliable: "Reliable Service",
quality: "Quality Guaranteed",
serving: "Serving Uusimaa",
galleryLabel: "Our Work",

galleryTitle: "Recent Projects",

galleryText:
  "Take a look at some of our recent cleaning, garden care and winter maintenance projects across the Helsinki region.",
  contactLabel: "Contact",

contactTitle: "Let's Work Together",

contactText:
  "Contact us today for a free quote. We are ready to help with reliable property maintenance services across the Helsinki region.",

address: "Address",
phone: "Phone",
email: "Email",

yourName: "Your Name",
yourEmail: "Your Email",
yourMessage: "Your Message",

sending: "Sending...",
sendMessage: "Send Message",
footerText:
  "Kaveri Property Maintenance provides reliable property maintenance services across Vantaa, Helsinki and Espoo. We specialize in professional cleaning, window cleaning, garden maintenance, snow removal and parking area maintenance.",


footerContact: "Contact",
footerServices: "Services",

staircase: "Staircase Cleaning",
office: "Office Cleaning",
window: "Window Cleaning",
lawn: "Lawn Mowing",
yard: "Yard Maintenance",
parking: "Parking Area Maintenance",

  },
};

export default function Home() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [sending, setSending] = useState(false);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
const [menuOpen, setMenuOpen] = useState(false);
const [language, setLanguage] = useState("fi");
const t = translations[language as "fi" | "en"];
const [languageOpen, setLanguageOpen] = useState(false);

async function handleSubmit() {
  setSending(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  if (res.ok) {
alert("✅ Thank you! Your message has been sent successfully. We'll get back to you within 2 working days.");    setName("");
    setEmail("");
    setMessage("");
  } else {
alert("❌ Sorry, something went wrong. Please try again or contact us by email.");  }

  setSending(false);
}
  return (
    <>
          {/* Navbar */}
    <nav className="sticky top-0 z-50 bg-[#F8FAFC] shadow-lg border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">      <div className="flex items-center">
  <a href="#home" className="flex items-center gap-3">

    <Image
      src="/images/icoon.png"
      alt="Kaveri"
      width={56}
      height={56}
      priority
      className="w-12 h-12 object-contain -mt-3"
    />

 <span
  className="hidden md:block text-[32px] font-bold leading-none whitespace-nowrap"
  style={{ color: "#8B5CF6" }}
>
  Kaveri Kiinteistöpalvelut
</span>

  </a>
</div>
<div className="hidden lg:flex items-center gap-8">
      {/* Language */}
<div className="relative">

<button
onClick={() => setLanguageOpen(!languageOpen)}
className="font-bold text-gray-800 hover:text-purple-700 transition"
>
{language === "fi" ? "FI" : "EN"} ▼
</button>


{languageOpen && (
<div className="absolute right-0 mt-3 bg-white rounded-xl shadow-xl border border-gray-200 w-36 overflow-hidden z-50">

<button
onClick={() => {
setLanguage("fi");
setLanguageOpen(false);
}}
className="block w-full px-4 py-3 text-left text-gray-800 hover:bg-purple-50"
>
Suomi
</button>


<button
onClick={() => {
setLanguage("en");
setLanguageOpen(false);
}}
className="block w-full px-4 py-3 text-left text-gray-800 hover:bg-purple-50"
>
English
</button>

</div>
)}

</div>

      <a
        href="#home"
        className="relative text-gray-800 font-bold hover:text-purple-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
      >
        {t.home}
      </a>

      <a
        href="#services"
        className="relative text-gray-800 font-bold hover:text-purple-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
      >
        {t.services}
      </a>

      <a
        href="#about"
        className="relative text-gray-800 font-bold hover:text-purple-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
      >
        {t.about}
      </a>

      <a
        href="#gallery"
        className="relative text-gray-800 font-bold hover:text-purple-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
      >
        {t.gallery}
      </a>

      <a
        href="#contact"
        className="relative text-gray-800 font-bold hover:text-purple-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
      >
        {t.contact}
      </a>

    </div>  
    <div className="lg:hidden">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? (
      <X size={30} className="text-[#8B5CF6]" />
    ) : (
      <Menu size={30} className="text-[#8B5CF6]" />
    )}
  </button>
</div>
    
            </div>
          
            {menuOpen && (
  <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
    <div className="flex flex-col px-6 py-5 gap-5">
      <div className="border-b border-gray-200 pb-4 mb-2">

  <p className="font-bold text-gray-800 mb-3">
    Language
  </p>

  <div className="flex gap-4">

    <button
      onClick={() => {
        setLanguage("fi");
        setMenuOpen(false);
      }}
      className={`font-semibold ${
        language === "fi"
          ? "text-purple-700"
          : "text-gray-700"
      }`}
    >
      Suomi
    </button>

    <button
      onClick={() => {
        setLanguage("en");
        setMenuOpen(false);
      }}
      className={`font-semibold ${
        language === "en"
          ? "text-purple-700"
          : "text-gray-700"
      }`}
    >
      English
    </button>

  </div>

</div>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="font-bold text-gray-800 hover:text-purple-700"
      >
        {t.home}
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="font-bold text-gray-800 hover:text-purple-700"
      >
        {t.services}
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="font-bold text-gray-800 hover:text-purple-700"
      >
        {t.about}
      </a>

      <a
        href="#gallery"
        onClick={() => setMenuOpen(false)}
        className="font-bold text-gray-800 hover:text-purple-700"
      >
        {t.gallery}
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="font-bold text-gray-800 hover:text-purple-700"
      >
        {t.contact}
      </a>

    </div>
  </div>
)}
          </nav>

      {/* Hero */}
      <section
  id="home"
  className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white"
>
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  Kaveri Kiinteistöpalvelut
</h1>

            <p className="mt-6 text-base md:text-lg lg:text-xl">
  {t.heroSubtitle}
</p>

<div className="mt-10 flex flex-col sm:flex-row gap-4">              <a
  href="tel:+358406785788"
className="bg-white text-purple-700 px-6 md:px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-center">
   📞 {t.call}
</a>

          <a
  href="#contact"
className="border-2 border-white px-6 md:px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-white hover:text-purple-700 hover:scale-105 transition-all duration-300 text-center">
{t.quote}
</a>
            </div>
          </div>

          {/* Right */}
          <div>
          
<div className="relative h-72 md:h-[500px] lg:h-[600px] w-full">  <Image
    src="/images/Hero.jpg"
    alt="Property Maintenance"
    fill
    priority
    className="rounded-3xl shadow-2xl object-cover"
  />
</div>


          </div>

        </div>
      </section>

      {/* Services */}
<section
  id="services"
  className="py-28 bg-gray-50"
>
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
  {t.servicesTitle}
</h2>
<p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
{t.servicesDescription}</p>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
  {/* Card 1 */}
 <div className="group bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300">
    <img
      src="/images/Cleaning.jpg"
className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition duration-500"    />

    <div className="p-6 md:p-8">
<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {t.cleaning}
      </h3>

<p className="min-h-[96px] text-sm md:text-base text-gray-600 leading-7">  {t.cleaningText}
</p>
<a
  href="#contact"
  className="inline-flex items-center gap-2 mt-6 text-[#8B5CF6] font-semibold transition-all duration-300 hover:text-[#7C3AED] group"
>
{t.freeQuote}
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-2"
  />
</a>    </div>
  </div>

  {/* Card 2 */}
 <div className="group bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300">
    <img
      src="/images/Garden.jpg"
className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition duration-500"   />

    <div className="p-8">
<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">      
{t.garden}      </h3>

<p className="min-h-[96px] text-sm md:text-base text-gray-600 leading-7">   {t.gardenText}
</p>
<a
  href="#contact"
  className="inline-flex items-center gap-2 mt-6 text-[#8B5CF6] font-semibold transition-all duration-300 hover:text-[#7C3AED] group"
>
{t.freeQuote}
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-2"
  />
</a>
    </div>
  </div>

  {/* Card 3 */}
 <div className="group bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 transition-all duration-300">
    <img
      src="/images/Snow.jpg"
className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition duration-500"    />

    <div className="p-8">
<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
{t.snow}      </h3>

<p className="text-gray-600 leading-7 h-24">
{t.snowText}</p><a
  href="#contact"
className="inline-flex items-center gap-2 mt-6 text-sm md:text-base text-[#8B5CF6] font-semibold transition-all duration-300 hover:text-[#7C3AED] group">
{t.freeQuote}
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-2"
  />
</a></div>
  </div>

</div>
</div>

</section>
  {/* About */}
  <section
    id="about"
    className="py-24 bg-white"
  >
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      <div>
        <img
          src="/images/About.jpg"
          alt="About Kaveri"
className="rounded-3xl shadow-2xl w-full h-72 md:h-[500px] object-cover"        />
      </div>

      <div>

        <p className="text-purple-700 text-sm md:text-base font-bold uppercase tracking-widest">
{t.aboutLabel}        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
{t.aboutTitle}        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-600 leading-7 md:leading-8">
   {t.aboutText}
  </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

    <div className="group bg-white rounded-2xl border border-purple-100 p-5 md:p-6 flex items-center gap-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-purple-300 transition-all duration-300" >
          <ShieldCheck className="text-[#8B5CF6] group-hover:scale-110 transition duration-300" />
      <span className="text-sm md:text-base font-semibold text-gray-800">
{t.experience}      </span>
    </div>

    <div className="group bg-white rounded-2xl border border-purple-100 p-5 md:p-6 flex items-center gap-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-purple-300 transition-all duration-300">
      <ShieldCheck className="text-[#8B5CF6] group-hover:scale-110 transition duration-300" />
      <span className="text-sm md:text-base font-semibold text-gray-800">
{t.reliable}      </span>
    </div>

    <div className="group bg-white rounded-2xl border border-purple-100 p-5 md:p-6 flex items-center gap-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-purple-300 transition-all duration-300">
          <ShieldCheck className="text-[#8B5CF6] group-hover:scale-110 transition duration-300" />
      <span className="text-sm md:text-base font-semibold text-gray-800">
{t.quality}      </span>
    </div>

    <div className="group bg-white rounded-2xl border border-purple-100 p-5 md:p-6 flex items-center gap-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-purple-300 transition-all duration-300">
          <ShieldCheck className="text-[#8B5CF6] group-hover:scale-110 transition duration-300" />
      <span className="text-sm md:text-base font-semibold text-gray-800">
{t.serving}      </span>
    </div>

  </div>

      </div>

    </div>
  </section>
{/* Gallery */}
<section
  id="gallery"
  className="py-24 bg-gray-50"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <p className="text-[#8B5CF6] font-bold uppercase tracking-widest">
{t.galleryLabel}</p>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">  {t.galleryTitle}
</h2>

<p className="mt-5 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-8">{t.galleryText}
</p>
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
    <div className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
  <img
    src="/images/gallery1.jpg"
    alt="Gallery"
className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"  />
</div>
      <div className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
  <img
    src="/images/gallery2.jpg"
    alt="Gallery"
className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"  />
</div>

     <div className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
  <img
    src="/images/gallery3.jpg"
    alt="Gallery"
className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"  />
</div>
      <div className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
  <img
    src="/images/gallery4.jpg"
    alt="Gallery"
className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"  />
</div>

    <div className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
  <img
    src="/images/gallery5.jpg"
    alt="Gallery"
className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"  />
</div>

     <div className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
  <img
    src="/images/gallery6.jpg"
    alt="Gallery"
className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"  />
</div>

    </div>

  </div>

</section>
      
     {/* Contact */}
<section
  id="contact"
className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-[#8B5CF6] font-bold uppercase tracking-widest text-center">
  {t.contactLabel}
</p>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mt-4">  {t.contactTitle}
</h2>

<p className="text-center text-gray-600 mt-5 mb-10 md:mb-16 max-w-2xl mx-auto leading-8 text-base sm:text-lg">  {t.contactText}
</p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Left */}
      <div className="space-y-8">

        <div className="group bg-white border border-purple-100 p-6 rounded-3xl shadow-md hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
<div className="flex items-start sm:items-center gap-4">    <FaMapMarkerAlt className="text-[#8B5CF6] text-3xl" />

    <div>
      <h3 className="text-xl font-bold text-gray-900">
        {t.address}
      </h3>

      <p className="text-gray-600 mt-1">
        Finland
      </p>
    </div>
  </div>
</div>

       <div className="group bg-white border border-purple-100 p-6 rounded-3xl shadow-md hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
<div className="flex items-start sm:items-center gap-4">    <FaMapMarkerAlt className="text-[#8B5CF6] text-3xl" />

    <div>
      <h3 className="text-xl font-bold text-gray-900">
        {t.phone}
      </h3>

      <p className="text-gray-600 mt-1">
        040 678 5788
      </p>
    </div>
  </div>
</div>
<div className="group bg-white border border-purple-100 p-6 rounded-3xl shadow-md hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
<div className="flex items-start sm:items-center gap-4">    <FaMapMarkerAlt className="text-[#8B5CF6] text-3xl" />

    <div>
      <h3 className="text-xl font-bold text-gray-900">
{t.email}      </h3>

<p className="text-gray-600 mt-1 break-all">        toimisto@kaverikp.fi
      </p>
    </div>
  </div>
</div>

      </div>

      {/* Right */}
<div className="bg-white border border-purple-100 p-5 sm:p-8 rounded-3xl shadow-lg">
        <input
  type="text"
placeholder={t.yourName}  value={name}
  onChange={(e) => setName(e.target.value)}
className="w-full p-4 border border-gray-300 rounded-xl mb-5 text-black focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] transition"/>

<input
  type="email"
 placeholder={t.yourEmail}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
className="w-full p-4 border border-gray-300 rounded-xl mb-5 text-black focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] transition"/>

<textarea
  rows={6}
  placeholder={t.yourMessage}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
className="w-full p-4 border border-gray-300 rounded-xl mb-5 text-black focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] transition"/>
<button
  onClick={handleSubmit}
  disabled={sending}
className="w-full bg-[#8B5CF6] text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#7C3AED] transition-all duration-300">
  {sending ? t.sending : t.sendMessage}
</button>

      </div>

    </div>

  </div>
</section>  
    {/* Footer */}
<footer className="bg-[#5B21B6] text-white py-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Company */}
    <div>
<h3 className="text-2xl sm:text-3xl font-bold tracking-tight">      Kaveri Kiinteistöpalvelut
      </h3>

<p className="mt-4 text-purple-200 leading-7 text-base sm:text-[17px]">        {t.footerText}
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-2xl font-bold mb-6">
        {t.footerContact}
      </h3>

      <div className="space-y-4">

<div className="flex items-center gap-3 hover:translate-x-1 transition duration-300">          <FaPhoneAlt className="text-[#C4B5FD]" />
          <span>+358 40 678 5788</span>
        </div>

<div className="flex items-center gap-3 hover:translate-x-1 transition duration-300">          <FaEnvelope className="text-[#C4B5FD]" />
          <span>toimisto@kaverikp.fi</span>
        </div>

<div className="flex items-start gap-3 hover:translate-x-1 transition duration-300">      <FaMapMarkerAlt className="text-[#C4B5FD]" />
          <span className="leading-6">
{t.serving}
</span>
        </div>

      </div>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-2xl font-bold mb-6">
        {t.footerServices}
      </h3>

      <div className="space-y-3">

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-purple-300" />
          <span>{t.staircase}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-purple-300" />
          <span>{t.office}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-purple-300" />
          <span>{t.window}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-purple-300" />
          <span>{t.lawn}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-purple-300" />
          <span>{t.yard}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-purple-300" />
          <span>{t.parking}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-purple-300" />
          <span>{t.snow}</span>
        </div>

      </div>
    </div>

  </div>

<div className="border-t border-purple-700 mt-8 pt-5 px-4 text-center text-sm sm:text-base text-purple-300 leading-6">© {new Date().getFullYear()} Kaveri Kiinteistöpalvelut. All rights reserved. Designed with ❤️ in Finland.  </div>
</footer>
</>
  )
}

