import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <NavBar />
      <main className="container pt-24 pb-16 max-w-full pl-[22%]">
        <div className="max-w-5xl w-full">
          <section className="flex flex-col-reverse lg:flex-row items-center lg:justify-between">
            <div className="space-y-4 lg:max-w-[60%]">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Software Engineer
              </h1>
              <p className="text-muted-foreground">
                With more than 3 years of experience in full-stack development,
                specializing in ASP.NET, MERN Stack, and modern web
                technologies. Currently based in Melbourne, VIC, Australia.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  <a href="/Chamod-Rathnayake-Software Engineer .pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="mb-8 lg:mb-0">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
                <Image
                  src="/Chamod_Rathnayake_DV.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover rounded-full border-4 border-background shadow-xl"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
              Featured Skills
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    React JS, React Native, Redux Saga, Material UI, Bootstrap
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Backend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    ASP.NET MVC,ASP.NET Web APIs, Node.js, Express.js
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Database & Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    MSSQL, PostgreSQL, MongoDB
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
              Latest Experience
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Software Developer</h3>
                    <p className="text-sm text-muted-foreground">
                      DTS Group • Sep 2023 - Present
                    </p>
                  </div>
                  <p className="text-sm">
                    Working on DTSOne, DTSReporting, and CRMOne Applications
                    using ASP.NET MVC, MSSQL, and modern frontend technologies.
                    Collaborating in a Rapid Application Development
                    environment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
              Connect With Me
            </h2>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn Profile</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub Profile</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:chamodsr@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email Contact</span>
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
