import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { NavBar } from "@/components/nav-bar";
import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <NavBar />
      <main className="container pt-24 pb-16 pl-[18%]">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
            Projects
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Appointment Scheduler
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Client: Magenta Hair & Beauty, Dandenong VIC Australia
                    </p>
                  </div>
                  <p className="text-sm">
                    A mobile application built with React Native Expo and
                    Firebase for scheduling appointments.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Technologies:</p>
                    <p className="text-sm text-muted-foreground">
                      React Native, Expo, Firebase
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Intelligent FAQ System
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Swinburne University Project
                    </p>
                  </div>
                  <p className="text-sm">
                    An AI-powered FAQ system using modern NLP techniques and
                    machine learning models.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Technologies:</p>
                    <p className="text-sm text-muted-foreground">
                      Flask, Hugging Face, Sentence-Transformers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Procurement Management System
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Academic Project
                  </p>
                  <p className="text-sm">
                    A full-stack web application for managing procurement
                    processes.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Technologies:</p>
                    <p className="text-sm text-muted-foreground">
                      MERN Stack, Heroku
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Web Based Sysytem to Analyze Malicious Attacks Using a
                      Hybrid Machine Learning Model
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Swinburne Research Project associated with DFAT Australia
                    </p>
                  </div>
                  <p className="text-sm">
                    A hybrid machine learning model for analyzing and detecting
                    malicious attacks.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Technologies:</p>
                    <p className="text-sm text-muted-foreground">
                      Flask, React JS, MongoDB, Scikit-Learn, Hard Voting
                      Ensemble (KNN & Logistic Regression), Hybrid Ensemble
                      (Random Forest & LSTM)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Enhancing Online Learning and Teaching Experience
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Final Year Research Project
                    </p>
                  </div>
                  <p className="text-sm">
                    Developed a solution to enhance the online learning
                    experience with SpaCy, DeepSpeech, Python, Flask, React.js,
                    Node.js, and MongoDB.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Technologies:</p>
                    <p className="text-sm text-muted-foreground">
                      SpaCy, DeepSpeech, Python, Flask, React.js, Node.js,
                      MongoDB
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
