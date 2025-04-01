"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ChildrenTextbooks() {
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">
          Chinese Textbooks for Children
        </h1>

        <Card className="p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4">Easy Step Chinese 2</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/textbooks/children/easy-step-chinese-2/lesson-11"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Lesson 11: Food and Drinks
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
