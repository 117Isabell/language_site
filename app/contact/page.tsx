"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Mail className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-600">
              Get in Touch
            </h2>
          </div>
          <p className="mb-6 text-gray-600">
            Fill out the form below and I will get back to you as soon as
            possible.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="mt-1 h-32"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
