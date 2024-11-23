import { Metadata } from "next";
import { NavBar } from "@/components/nav-bar";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Education | Chamod Rathnayake",
};

export default function Education() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <NavBar />
      <main className="container pt-24 pb-16 pl-[20%]">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
            Education
          </h1>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Master of Information Technology (Professional Computing)
                </h2>
                <p className="text-lg font-medium text-primary mb-1">
                  Swinburne University Of Technology
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  2023 – 2025 (May)
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Specializing in Software Development</li>
                  <li>Currently Reading</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  BSc (Hons) in Information Technology
                </h2>
                <p className="text-lg font-medium text-primary mb-1">
                  Sri Lanka Institute of Information Technology
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  2018 - 2021
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Specializing in Software Engineering</li>
                  <li>Graduated with Second Class Honors Upper Division</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
