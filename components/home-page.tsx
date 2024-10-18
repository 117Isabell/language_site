import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, User } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <header className="bg-blue-600 text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chinese Language Tutor</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Learn Chinese with a Professional Tutor
            </h2>
            <p className="text-xl mb-8">Personalized lessons for all levels</p>
            <Button
              size="lg"
              className="bg-yellow-400 text-blue-800 hover:bg-yellow-500"
            >
              Get Started
            </Button>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <Users className="mr-2" />
                    Group Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Join our interactive group classes and learn Chinese with
                    peers.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <User className="mr-2" />
                    1-on-1 Tutoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get personalized attention with our one-on-one tutoring
                    sessions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="blog" className="bg-blue-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Latest Blog Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-blue-600">
                      Chinese Learning Tip #{i}
                    </CardTitle>
                    <CardDescription>Posted on May {i}, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Short preview of the blog post content...
                    </p>
                    <Button
                      variant="link"
                      className="mt-4 p-0 text-blue-500 hover:text-blue-700"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto max-w-md">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Contact Us
            </h2>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="border-blue-300 focus:border-blue-500"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="border-blue-300 focus:border-blue-500"
              />
              <Textarea
                placeholder="Your Message"
                className="border-blue-300 focus:border-blue-500"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Chinese Language Tutor. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
