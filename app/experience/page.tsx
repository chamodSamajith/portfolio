import { NavBar } from "@/components/nav-bar";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <NavBar />
      <main className="container pt-24 pb-16 pl-[20%]">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
            Work Experience
          </h1>
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Software Developer
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      DTS Group • Sep 2023 - Present
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Cheltenham VIC Australia (In Person)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      Projects: DTSOne, DTSReporting, CRMOne
                    </p>
                    <p className="text-sm">Technologies:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        Front-End: Razor, JQuery, Vanilla JS, Bootstrap,
                        Semantic UI
                      </li>
                      <li>Back-End: ASP.NET MVC, MSSQL</li>
                      <li>Reports: SAP Crystal Reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">Software Engineer</h2>
                    <p className="text-sm text-muted-foreground">
                      Axiata Digital Labs • Jun 2022 - Jul 2023
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Colombo, Sri Lanka (Hybrid)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        SME internet banking client PWA app using ReactJS,
                        Redux-Saga, Material UI
                      </li>
                      <li>
                        SpringBoot for API development, PostgreSQL for database
                        management
                      </li>
                      <li>
                        RabbitMQ for efficient message queuing and real-time
                        transaction processing
                      </li>
                      <li>
                        Worked in Agile environment utilizing Scrum practices in
                        the Fintech Domain
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Associate Software Engineer
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Axiata Digital Labs • Nov 2021 - May 2022
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Colombo, Sri Lanka (Hybrid)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        SME internet banking admin web app using ReactJS,
                        Redux-Saga, Material UI
                      </li>
                      <li>
                        Buy Now Pay Later WebView application using React-Native
                      </li>
                      <li>
                        Kongsi Klub by Boost Credit - UI Revamp and Admin Portal
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Intern Software Engineer
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      ShoutOUT Labs • Dec 2019 - Jun 2020
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Colombo, Sri Lanka (Hybrid)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Developed SAAS products in CRM domain</li>
                      <li>
                        Worked as a Full-Stack Software Engineer Intern with
                        MERN Stack stack(React.js, Node.js, Express.js, MongoDB)
                      </li>
                      <li>
                        Contributed to ShoutOUT core, shoutOUT.AI, shoutOUT Lite
                      </li>
                    </ul>
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
