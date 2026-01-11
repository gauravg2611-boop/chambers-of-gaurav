"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white text-[#020202]">
        <div className="max-w-7xl flex items-center gap-4 mx-auto px-6 py-8 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Image
                src="/logo.svg"
                alt="Chambers of Gaurav Logo"
                width={120}
                height={196}
                priority
                className="w-auto h-24 md:h-32"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight tracking-tighter">
              Chambers of Gaurav
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 mb-4 pl-1">
              Gaurav G Nair (BBA, LLB Hons.)
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl pl-1">
              Dedicated to providing professional legal services with integrity,
              expertise, and a commitment to justice.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-4 bg-[#020202] text-white font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
          {/* <img
            src="https://images.unsplash.com/photo-1619771833572-325fa5664609?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gaurav G Nair"
            className="w-full h-[200px] object-cover"
          /> */}
        </div>
      </section>

      {/* About & Specializations Section */}
      <section id="about" className="md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-4 md:mb-16">
            <h2 className="text-3xl font-bold text-[#020202] mb-2">
              About & Specializations
            </h2>
            <p className="text-lg text-zinc-500">
              Providing comprehensive legal services across various practice
              areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-[#020202] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#020202] rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#020202] mb-3">
                Civil Litigation
              </h3>
              <p className="text-[#020202]">
                Expert representation in civil disputes, property matters, and
                contractual issues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#020202] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#020202] rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#020202] mb-3">
                Corporate Law
              </h3>
              <p className="text-[#020202]">
                Comprehensive legal solutions for businesses, contracts, and
                commercial transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#020202] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#020202] rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#020202] mb-3">
                Family Law
              </h3>
              <p className="text-[#020202]">
                Sensitive handling of matrimonial disputes, custody matters, and
                family settlements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#020202] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#020202] rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#020202] mb-3">
                Criminal Defense
              </h3>
              <p className="text-[#020202]">
                Strong defense strategies and representation in criminal
                proceedings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#020202] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#020202] rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#020202] mb-3">
                Banking & Finance
              </h3>
              <p className="text-[#020202]">
                Legal guidance on financial matters, loan disputes, and banking
                regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#020202] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#020202] rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#020202] mb-3">
                Legal Drafting
              </h3>
              <p className="text-[#020202]">
                Professional drafting of legal documents, agreements, and
                contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#020202] mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-[#020202] max-w-2xl mx-auto">
              Have a legal question? Drop your email and we'll get back to you
              promptly.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#020202] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-[#020202] rounded-lg focus:ring-2 focus:ring-[#020202] focus:border-[#020202] outline-none transition-all bg-white text-[#020202]"
                  placeholder="your.email@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 cursor-pointer bg-[#020202] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? "Thank you! We'll be in touch." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer with Map and Contact Details */}
      <footer className="bg-[#020202] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Chambers of Gaurav</h3>
              <div className="space-y-4 text-white">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p>Your Chamber Address</p>
                    <p>City, State - PIN Code</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p>+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p>contact@chambersofgaurav.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Find Us</h3>
              <div className="w-full h-64 bg-[#020202] rounded-lg overflow-hidden border border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
              <p className="text-sm text-white mt-4 opacity-80">
                * Update the map embed URL with your actual location coordinates
              </p>
            </div>
          </div>

          <div className="border-t border-white mt-12 pt-8 text-center text-white opacity-80">
            <p>
              &copy; {new Date().getFullYear()} Chambers of Gaurav. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
