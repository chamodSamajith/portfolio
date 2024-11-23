import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { NavBar } from "@/components/nav-bar";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <NavBar />
      <main className="container pt-24 pb-16 pl-[22%]">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
            Contact Me
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h2 className="font-medium">Address</h2>
                <p className="text-sm text-muted-foreground">
                  58 Simpson Dr, Dandenong, Australia, 3175
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h2 className="font-medium">Email</h2>
                <p className="text-sm text-muted-foreground">
                  chamodsr@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h2 className="font-medium">Phone</h2>
                <p className="text-sm text-muted-foreground">
                  +61 0466 525 361
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
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
          </div>
        </div>
      </main>
    </div>
  );
}
