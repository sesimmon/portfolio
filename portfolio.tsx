import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Mail, MapPin, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Wells Fargo",
    logo: "/images/wells-fargo-logo.png?height=60&width=140",
  },
  { name: "Lowe's", logo: "/images/lowes-logo.png?height=60&width=140" },
  {
    name: "Northern Trust",
    logo: "/images/northern-trust-logo.png?height=60&width=140",
  },
  {
    name: "Jack Daniels",
    logo: "/images/jack-daniels-logo.png?height=60&width=140",
  },
  { name: "Glenlivet", logo: "/images/glenlivet-logo.jpg?height=60&width=140" },
  {
    name: "General Mills",
    logo: "/images/general-mills-logo.png?height=60&width=140",
  },
  {
    name: "Eastman Chemical Company",
    logo: "/images/eastman-logo.png?height=60&width=140",
  },
  {
    name: "The University of Iowa",
    logo: "/images/iowa-logo.png?height=60&width=140",
  },
  {
    name: "Elevated Films Chicago",
    logo: "/images/elevated-films-logo.png?height=60&width=140",
  },
  {
    name: "Proofpoint",
    logo: "/images/proofpoint-logo.png?height=60&width=140",
  },
];

const projects = [
  {
    id: 1,
    title: "Deep Sounds",
    description:
      "A comprehensive music licensing platform with AI-powered recommendations, subscription management, and content creator tools for unlimited music access.",
    whatIDid:
      "I co-founded this company and made the app from the ground up, working alongside my co-founder/CEO and a design team to create product, strategy, and user experience.",
    image: "/images/deepsounds.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Stripe",
      "Tailwind CSS",
      "AI",
    ],
    role: "Design, UX, Full Stack Developer",
    liveUrl: "https://www.deepsounds.com",
    githubUrl: "https://github.com/example/deepsounds",
    featured: true,
  },
  {
    id: 2,
    title: "Elevated Films Chicago",
    description:
      "A nonprofit organization website dedicated to advancing independent cinema and empowering youth through filmmaking mentorship and community outreach programs.",
    whatIDid:
      "I created the branding, strategy, content, design, and I developed the site from scratch.",
    image: "/images/elevated-films.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Branding, Design, Full Stack Developer",
    liveUrl: "https://www.elevatedfilmschicago.com",
    githubUrl: "https://github.com/example/elevated-films",
    featured: true,
  },
  {
    id: 3,
    title: "Proofpoint",
    description:
      "Enterprise cybersecurity platform website focused on human-centric security solutions, protecting organizations from email threats, data loss, and compliance risks.",
    whatIDid:
      "I worked as part of a wonderful mid-sized team, taking on various development tasks to maintain and enhance the site.",
    image: "/images/proofpoint.png",
    technologies: ["Drupal", "HTML", "CSS", "jQuery"],
    role: "Full Stack Developer",
    liveUrl: "https://www.proofpoint.com/us",
    githubUrl: "https://github.com/example/proofpoint",
    featured: true,
  },
  {
    id: 4,
    title: "Cloudmark",
    description:
      "Carrier-grade messaging security platform providing protection and visibility for mobile messaging, email, and social media communications across multiple channels.",
    image: "/images/cloudmark.png",
    whatIDid:
      "I worked as part of a wonderful mid-sized team, though I largely worked solo on a big upgrade for the site.",
    technologies: ["Drupal", "HTML", "CSS", "jQuery"],
    role: "Full Stack Developer",
    liveUrl: "https://www.cloudmark.com/en",
    githubUrl: "https://github.com/example/cloudmark",
    featured: true,
  },
  {
    id: 5,
    title: "Events Calendar",
    description:
      "I'm currently developing a comprehensive events calendar website to attempt to catalog every event in the city, at all times.",
    image: "/images/logo.png?height=200&width=400",
    technologies: ["Next.js", "Tailwind CSS", "REST API", "AI"],
    role: "Branding, Design, UX, Full Stack Developer",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: 6,
    title: "Film Tax Credit Management",
    description:
      "I'm currently developing a web application to apply, manage, submit, and finalize film tax credits.",
    image: "/images/logo.png?height=200&width=400",
    technologies: ["Next.js", "Tailwind CSS", "REST API", "AI"],
    role: "Branding, Design, UX, Full Stack Developer",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

const getRoleColor = (role: string) => {
  switch (role) {
    case "Full Stack Developer":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Frontend Developer":
    case "Frontend Lead":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Backend Developer":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "Branding, Full Stack Developer":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b mb-8">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Shane Simmons
                </h1>
                <p className="text-xl text-muted-foreground mt-1">
                  Designer, Full Stack Developer, Producer
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Chicago, IL
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    shane@thislooksnice.com
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  className="py-6 text-md"
                  size="lg"
                  variant={"outline"}
                  asChild
                >
                  <Link
                    href="/ShaneSimmonsResume-Developer.pdf"
                    target="_blank"
                  >
                    Download Resume <FileDown />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 lg:flex lg:gap-6">
          <div className="max-w-3xl lg:w-1/3">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Building digital experiences that matter
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              I'm a designer/developer/producer with 15+ years of experience
              working everywhere from boutique agencies to enterprise
              institutions, creating human-focused marketing websites and
              scalable web applications. I specialize in React, Node.js, Drupal,
              and modern web technologies, with a passion for making user
              experience mesh perfectly with brand goals.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center px-12">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white group"
                >
                  <Image
                    src={client.logo || "/images/logo.png"}
                    alt={`${client.name} logo`}
                    width={140}
                    height={60}
                    className="max-w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
            <div className="w-full text-center mt-12">
              <p className="text-sm text-gray-500 w-full">
                From Fortune 500 companies to innovative startups and
                nonprofits, I bring the same level of dedication and expertise
                to every project.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-6 mb-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Featured Projects
            </h3>
            <p className="text-muted-foreground">
              A selection of my most impactful work
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/images/logo.png"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={getRoleColor(project.role)}>
                      {project.role}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <CardDescription className="text-sm mt-2 leading-relaxed">
                        {project.whatIDid}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Visit
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="container mx-auto" />

        {/* Other Projects */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Other Projects
            </h3>
            <p className="text-muted-foreground">
              Additional work and experiments
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-md transition-shadow duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Badge
                      className={getRoleColor(project.role)}
                      variant="secondary"
                    >
                      {project.role}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      {project.liveUrl ? (
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </Link>
                      ) : (
                        "Coming Soon"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Shane Simmons. Built with Next.js and Tailwind CSS.
              </p>
              <div className="flex gap-4">
                {/* <Link
                href="https://github.com/shanesimmons"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="w-5 h-5" />
              </Link> */}
                <Link
                  href="mailto:shane@thislooksnice.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
