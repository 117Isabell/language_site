import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, User } from "lucide-react";

export default function Page() {
  const testimonials = [
    {
      quote:
        "Learning Chinese has never been so enjoyable! The tutor's approach is both engaging and effective.",
      name: "Sarah Johnson",
      title: "Beginner Student",
    },
    {
      quote:
        "I've made significant progress in my Chinese skills thanks to the personalized lessons and patient guidance.",
      name: "Michael Chen",
      title: "Intermediate Student",
    },
    {
      quote:
        "The group classes are fantastic for practicing conversation and making new friends who share my interest in Chinese culture.",
      name: "Emma Wilson",
      title: "Advanced Student",
    },
    {
      quote:
        "I highly recommend this tutor for anyone looking to improve their Chinese language skills. The lessons are well-structured and fun!",
      name: "David Lee",
      title: "Business Professional",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <header className="bg-blue-600 text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="/" className="text-2xl font-bold">
              Chinese Language Tutor
            </a>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/Chineselearningwithme/events"
                  className="bg-yellow-400 text-blue-800 hover:bg-yellow-500 px-3 py-1 rounded-full transition-colors"
                >
                  Free Online Meetups
                </a>
              </li>
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
                  Language Learning Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-yellow-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <a
              href="https://www.youtube.com/@learnchinesewithisabell1514"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-yellow-400 text-blue-800 hover:bg-yellow-500"
              >
                Get your daily study materials!
              </Button>
            </a>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Let&apos;s Learn Chinese Together!
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

        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              What My Students Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-blue-50 shadow-lg">
                  <CardContent className="pt-6">
                    <p className="text-gray-700 italic mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-4">
                        <User className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-800">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
