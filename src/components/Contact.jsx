"use client";

import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ message: "", isError: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ message: "", isError: false });

    try {
      const response = await axios.post("/api/contact", formData);
      setFormData({ name: "", email: "", message: "" });
      setStatus({ message: "Message sent successfully!", isError: false });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to send message.";
      setStatus({ message: errorMessage, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-4 border-b border-[#00ffff] px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <div>
          <label htmlFor="name" className="block text-lg text-[#ffff00] mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-[#1f2937] text-[#f8f8f8] border border-[#ff00ff] focus:outline-none focus:border-[#00ffff]"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg text-[#ffff00] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-[#1f2937] text-[#f8f8f8] border border-[#ff00ff] focus:outline-none focus:border-[#00ffff]"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg text-[#ffff00] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-3 py-2 bg-[#1f2937] text-[#f8f8f8] border border-[#ff00ff] focus:outline-none focus:border-[#00ffff]"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 bg-[#ff00ff] text-[#111827] border border:hover-[#f8f8f8] hover:bg-[#00ffff] hover:text-[#f8f8f8] transition-colors duration-200  cursor-pointer ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
        {status.message && (
          <p
            className={`${
              status.isError ? "text-[#ff00ff]" : "text-[#00ff00]"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
