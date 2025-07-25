"use client"; // This component needs to be a Client Component to use hooks like useRef and useEffect

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react"; // Import useState
import { gsap } from "gsap"; // Import gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { AnimatedLighthouseReport } from "@/components/paladin/animated-lighthouse-report"; // Import AnimatedLighthouseReport

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function WebsiteRebuildProposal() {
  const gearRef = useRef(null); // Ref specifically for the gear image
  const discoveryImageRef = useRef(null); // Ref for the discovery illustration
  // const [isLightboxOpen, setIsLightboxOpen] = useState(false) // State for lightbox - REMOVED

  useEffect(() => {
    if (gearRef.current) {
      gsap.to(gearRef.current, {
        rotation: 360, // Rotate only the gear
        ease: "none",
        scrollTrigger: {
          trigger: "body", // Trigger on body scroll
          start: "top top", // Start when the top of the body hits the top of the viewport
          end: "bottom top", // End when the bottom of the body hits the top of the viewport
          scrub: true, // Link animation to scroll position
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-paladin-white dark:bg-gray-950">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-paladin-white dark:bg-gray-950 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230A2342' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 12v-4h-2v4H6v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4H6v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="container relative z-10 px-4 md:px-6 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="space-y-6 text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-paladin-dark-blue dark:text-gray-50">
                Website Upgrade Proposal
              </h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-paladin-dark-blue/80 dark:text-gray-400 w-full max-w-none">
                A strategic plan to modernize, optimize, and elevate your
                website for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-paladin-red hover:bg-paladin-red/90 text-white px-8 py-3 text-lg rounded-md">
                  <Link href="#summary">Get Started</Link>
                </Button>
              </div>
            </div>
            {/* Container for the illustration and the rotating gear */}
            <div className="absolute hidden lg:block w-[400px] h-[400px] right-0 top-1/2 -translate-y-1/2 z-20 mr-[-100px] relative">
              {/* Base illustration (static) */}
              <img
                src="/paladin/images/website-upgrade.png"
                alt="Website Upgrade Illustration"
                className="w-full h-full object-contain absolute inset-0"
              />
              {/* Rotating gear (animated) */}
              <img
                ref={gearRef}
                src="/paladin/images/gear-only.png"
                alt="Rotating Gear"
                className="absolute z-30"
                style={{
                  width: "80px",
                  height: "80px",
                  top: "120px", // Adjusted to overlay the gear in the base image
                  left: "280px", // Adjusted to overlay the gear in the base image
                  transformOrigin: "center center",
                }}
              />
            </div>
          </div>
        </section>

        {/* Summary of Current State */}
        <section
          id="summary"
          className="w-full py-16 md:py-28 lg:py-36 bg-paladin-light-gray dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-paladin-dark-blue dark:text-gray-50">
                  Current Website: Identifying Growth Opportunities
                </h2>
                <p className="max-w-[700px] text-paladin-dark-blue/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed dark:text-gray-400">
                  Based on our initial discussion and a review of your website,
                  here are areas where a strategic rebuild can deliver
                  significant impact.
                </p>
                <div className="max-w-[700px] mt-8 flex justify-center">
                  <img
                    src="/paladin/images/paladin-homepage-screenshot.jpeg"
                    alt="Screenshot of Paladin Management Group homepage"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
              <Card className="p-8 shadow-lg bg-paladin-white dark:bg-gray-800">
                <CardHeader className="pb-12">
                  <CardTitle className="text-paladin-dark-blue dark:text-gray-50">
                    Current Challenges We Can Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-paladin-dark-blue/80 dark:text-gray-300">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      <span className="font-semibold">
                        Difficult Content Management:
                      </span>{" "}
                      A cumbersome backend wastes time and hinders content
                      updates, making the site feel stale to potential clients.
                    </li>
                    <li>
                      <span className="font-semibold">Outdated Design:</span> A
                      dated aesthetic deters visitors and diminishes brand
                      appeal.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Suboptimal Performance:
                      </span>{" "}
                      Slow loading times lead to user frustration and lost
                      opportunities.
                    </li>
                    <li>
                      <span className="font-semibold">Lack of Agility:</span>{" "}
                      The website "feels slow" because sections have to fully
                      animate in order for content to appear, and user actions
                      feel delayed due to animation speed.
                    </li>
                    <li>
                      <span className="font-semibold">Limited SEO:</span>{" "}
                      Without modern SEO, your search visibility is severely
                      limited.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Accessibility Issues:
                      </span>{" "}
                      Non-compliant sites limit your reach and impact your
                      reputation.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Best Practices for Improvement */}
        <section
          id="best-practices"
          className="w-full py-16 md:py-28 lg:py-36 bg-paladin-white dark:bg-gray-950"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-paladin-dark-blue dark:text-gray-50">
                Blueprint for Success: Modern Website Best Practices
              </h2>
              <p className="mx-auto max-w-[900px] text-paladin-dark-blue/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed dark:text-gray-400">
                How to build a user-friendly, high-performing, and future-proof
                website that best serves your business goals.
              </p>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-paladin-dark-blue dark:text-gray-50">
                      Effortless Content Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p>
                      A modern, intuitive CMS empowers your team to easily
                      update and manage content without technical expertise.
                    </p>
                    <ul className="text-sm text-paladin-dark-blue/70 dark:text-gray-400 px-6">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Combine approachable editing interfaces with custom
                        frontend coding to present content most effectively.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-paladin-dark-blue dark:text-gray-50">
                      Fresh, Specific Content
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p>
                      Make the website look alive with updated detailed content.
                    </p>
                    <ul className="text-sm text-paladin-dark-blue/70 dark:text-gray-400 space-y-2">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Prioritize placement of recent success stories, awards,
                        etc.
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Showcase results by the numbers.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-paladin-dark-blue dark:text-gray-50">
                      Stunning & Responsive Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p>
                      Exceptional user experience on every device. Clean,
                      intuitive, and visually appealing designs elevate your
                      brand.
                    </p>
                    <ul className="text-sm text-paladin-dark-blue/70 dark:text-gray-400 space-y-2">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Mobile-first approach
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Intuitive navigation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-paladin-dark-blue dark:text-gray-50">
                      Faster Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p>
                      Optimized for speed and efficiency, ensuring rapid load
                      times and seamless responsiveness.
                    </p>
                    <ul className="text-sm text-paladin-dark-blue/70 dark:text-gray-400 space-y-2">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Image optimization
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Code minification
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-paladin-dark-blue dark:text-gray-50">
                      Enhanced SEO & Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p>
                      Advanced SEO boosts search rankings; robust analytics
                      provide actionable insights.
                    </p>
                    <ul className="text-sm text-paladin-dark-blue/70 dark:text-gray-400 space-y-2">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Keyword research
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        SEO analysis tools
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-paladin-dark-blue dark:text-gray-50">
                      Inclusive Accessibility (WCAG)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p>
                      Your website will welcome everyone, adhering to WCAG
                      guidelines to expand your audience and reputation.
                    </p>
                    <ul className="text-sm text-paladin-dark-blue/70 dark:text-gray-400 space-y-2">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        ARIA attributes
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Keyboard navigation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Phase */}
        <section
          id="discovery"
          className="w-full py-8 md:py-28 lg:py-36 bg-paladin-white dark:bg-gray-950"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-paladin-dark-blue dark:text-gray-50">
                Phase 1: Discovery
              </h2>
              <p className="mx-auto max-w-[1000px] text-paladin-dark-blue/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed dark:text-gray-400">
                Every successful project begins with a thorough understanding of
                your existing setup. This initial phase ensures we align
                perfectly with your goals and current infrastructure.
              </p>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-6">
                <Card className="p-8 shadow-lg mx-auto max-w-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      Initial Site Assessment
                    </CardTitle>
                    <CardDescription className="text-paladin-dark-blue/80 dark:text-gray-400">
                      A foundational step to map out your current website and
                      backend systems.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-paladin-dark-blue/80 dark:text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>
                        Comprehensive review of existing site structure and
                        content.
                      </li>
                      <li>
                        Analysis of current backend setup and content management
                        systems.
                      </li>
                      <li>
                        Assessment of third-party integrations and dependencies.
                      </li>
                      <li>
                        Identification of key functionalities and user flows.
                      </li>
                      <li>
                        Further discussion of your immediate needs and long-term
                        vision.
                      </li>
                    </ul>
                    <p className="space-y-2 text-left text-sm text-paladin-dark-blue/80 dark:text-gray-300 mt-8 mb-12">
                      <strong>Deliverables:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-left space-y-2 pb-12">
                      <li>Overview of findings from the list above</li>
                      <li>Recommendations for Phase 2 scope</li>
                    </ul>
                    <Button className="bg-paladin-red hover:bg-paladin-red/90 text-white px-6 py-2 text-md rounded-md mx-auto">
                      <Link href="#scope">Proceed to Scope Options</Link>
                    </Button>
                  </CardContent>
                </Card>
                <div className="relative w-full rounded-lg shadow-lg p-12 flex">
                  <AnimatedLighthouseReport />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scope of Work Options */}
        <section
          id="scope"
          className="w-full py-16 md:py-28 lg:py-36 bg-paladin-light-gray dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-paladin-dark-blue dark:text-gray-50">
                Phase 2: Scope of Work
              </h2>
              <p className="mx-auto max-w-[900px] text-paladin-dark-blue/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed dark:text-xl/relaxed dark:text-gray-400">
                Flexible options designed to align with your budget and desired
                outcomes. We will clarify these together after discovery work is
                complete.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="p-8 shadow-lg bg-paladin-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      Small Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>Content management troubleshooting</li>
                      <li>Design refresh (minor UI/UX updates)</li>
                      <li>Performance audit and basic optimizations</li>
                      <li>Basic SEO improvements (meta tags, sitemap)</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-8 shadow-lg bg-paladin-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      Medium Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>
                        Migration to a modern, user-friendly CMS (e.g.,{" "}
                        <a
                          className="underline"
                          href="https://payloadcms.com/use-cases/headless-cms"
                          target="_blank"
                        >
                          Payload CMS
                        </a>
                        )
                      </li>
                      <li>
                        Moderate design enhancements (UI/UX improvements, new
                        landing pages)
                      </li>
                      <li>SEO strategy and implementation</li>
                      <li>Performance optimization</li>
                      <li>Analytics integrations</li>
                      <li>Training for content editors on the new CMS</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-8 shadow-lg bg-paladin-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      Large Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>Complete website rebuild & redesign from scratch</li>
                      <li>Highly tailored headless CMS integration</li>
                      <li>Comprehensive SEO, including content strategy</li>
                      <li>
                        Advanced analytics, custom dashboards, and A/B testing
                        setup
                      </li>
                      <li>
                        Integration with third-party services (CRM, marketing
                        automation, etc.)
                      </li>
                      <li>
                        Ongoing maintenance, support, and feature development
                      </li>
                      <li>Accessibility audit and full WCAG compliance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section
          id="case-studies"
          className="w-full py-16 md:py-28 lg:py-36 bg-paladin-white dark:bg-gray-950"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-paladin-dark-blue dark:text-gray-50">
                Similar Projects: Keeping Content Fresh
              </h2>
              <p className="mx-auto max-w-[1000px] text-paladin-dark-blue/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed dark:text-gray-400">
                We've helped various companies, organizations, and educational
                institutions to streamline their content strategy. Happy to dive
                into these further to discuss how their processes and outcomes
                have thrived.
              </p>
              <div className="grid gap-8 grid-cols-1 max-w-[1000px] mx-auto text-left">
                <Card className="p-8 shadow-lg bg-paladin-light-gray dark:bg-gray-800">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img
                        src="/paladin/images/elevated-films-chicago.jpeg"
                        alt="Elevated Films Chicago Website"
                        className="rounded-md object-cover w-full h-48 md:h-full"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                          Elevated Films Chicago: Empowering Non-Profit Growth
                        </CardTitle>
                        <CardDescription className="text-paladin-dark-blue/80 dark:text-gray-400">
                          Rebuilding a non-profit's website from the ground up
                          to enhance fundraising and agility.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                        <ul className="space-y-1 text-sm">
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Rebuilt site from the ground up, combining CMS and
                            custom coding.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Broke away from the old rudimentary structures of
                            the previous CMS to improve the speed of
                            implementing new content.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Facilitated creation of new landing pages to drive
                            essential fundraising.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Increased fundraising dollars by 100x within the
                            first couple months.
                          </li>
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
                <Card className="p-8 shadow-lg bg-paladin-light-gray dark:bg-gray-800">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img
                        src="/paladin/images/pratt-institute-design-corps.png"
                        alt="Pratt Institute Design Corps Website"
                        className="rounded-md object-cover w-full h-48 md:h-full"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                          Pratt Institute Design Corps: Tailored CMS for Visual
                          Direction
                        </CardTitle>
                        <CardDescription className="text-paladin-dark-blue/80 dark:text-gray-400">
                          Collaborating with a team of designers to build a CMS
                          that perfectly matched their visual direction and
                          content management needs.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                        <ul className="space-y-1 text-sm">
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Built a custom CMS solution to align with their
                            strong visual direction.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Empowered designers with intuitive content
                            management workflows for their very specific
                            messaging.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Ensured seamless integration of design assets and
                            content flows.
                          </li>
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
                <Card className="p-8 shadow-lg bg-paladin-light-gray dark:bg-gray-800">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img
                        src="/paladin/images/deepsounds.jpeg"
                        alt="Deep Sounds Website"
                        className="rounded-md object-cover w-full h-48 md:h-full"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                          Deep Sounds: Custom Platform for Complex User Flows
                        </CardTitle>
                        <CardDescription className="text-paladin-dark-blue/80 dark:text-gray-400">
                          Built a complex music platform from scratch,
                          collaborating with a design team to create
                          eye-catching landing pages and countless user flows to
                          drive sales.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                        <ul className="space-y-1 text-sm">
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Developed the entire site using custom code for
                            unique functionality.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Collaborated closely with a design team for visually
                            striking landing pages.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Implemented numerous user flows optimized to convert
                            visitors into customers.
                          </li>
                          <li>
                            <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                            Ensured clear communication of complex site features
                            through intuitive design.
                          </li>
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
              <p className="text-md text-paladin-dark-blue/70 dark:text-gray-400 mt-2">
                View more work and background at{" "}
                <a
                  className="underline"
                  href="https://www.thislooksnice.com"
                  target="_blank"
                >
                  https://www.thislooksnice.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Cost Estimates Section */}
        <section
          id="estimates"
          className="w-full py-16 md:py-28 lg:py-36 bg-paladin-light-gray dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-paladin-dark-blue dark:text-gray-50">
                Transparent Pricing: Your Investment in Digital Growth
              </h2>
              <p className="mx-auto max-w-[1000px] text-paladin-dark-blue/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed dark:text-gray-400">
                Here's a detailed breakdown of the estimated hours and costs for
                each phase and scope option.
              </p>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-paladin-dark-blue dark:text-gray-50">
                Phase 1: Discovery
              </h3>
              <Card className="p-6 shadow-md bg-paladin-white dark:bg-gray-800 w-full">
                <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                  <p className="text-3xl font-bold text-paladin-dark-blue dark:text-gray-50">
                    5 hours
                  </p>
                  <p className="text-lg text-paladin-dark-blue/80 dark:text-gray-400">
                    ($750)
                  </p>
                  <p className="text-sm text-paladin-dark-blue/60 dark:text-gray-500">
                    Schedule: 1 week
                  </p>
                  <p className="text-md text-paladin-dark-blue/70 dark:text-gray-400 mt-2">
                    Initial site assessment leading to recommendations for
                    specific action items in Phase 2.
                  </p>
                </CardContent>
              </Card>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-paladin-dark-blue dark:text-gray-50">
                Phase 2: Scope of Work
              </h3>
              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                <Card className="p-6 shadow-md bg-paladin-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      Small Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p className="text-3xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      10-20 hours
                    </p>
                    <p className="text-lg text-paladin-dark-blue/80 dark:text-gray-400">
                      ($1,500 - $3,000)
                    </p>
                    <p className="text-sm text-paladin-dark-blue/60 dark:text-gray-500">
                      Schedule: 4 weeks
                    </p>
                    <p className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 mt-2">
                      Troubleshooting, design tweaks, and minor performance
                      updates.
                    </p>
                    <ul className="pl-5 space-y-2 text-left pt-4">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Content management troubleshooting
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Design refresh (minor UI/UX updates)
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Performance audit and basic optimizations
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Basic SEO improvements (meta tags, sitemap)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      Medium Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p className="text-3xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      30-100 hours
                    </p>
                    <p className="text-lg text-paladin-dark-blue/80 dark:text-gray-400">
                      ($4,500 - $15,000)
                    </p>
                    <p className="text-sm text-paladin-dark-blue/60 dark:text-gray-500">
                      Schedule: 8-12 weeks
                    </p>
                    <p className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 mt-2">
                      Modern CMS integration and strategic redesign of high
                      priority elements.
                    </p>
                    <ul className="pl-5 space-y-2 text-left pt-4">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Migration to a modern, user-friendly CMS (e.g.,{" "}
                        <a
                          className="underline"
                          href="https://payloadcms.com/use-cases/headless-cms"
                          target="_blank"
                        >
                          Payload CMS
                        </a>
                        )
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Moderate design enhancements (UI/UX improvements, new
                        landing pages)
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        SEO strategy and implementation
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Performance optimization
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Analytics integrations
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Training for content editors on the new CMS
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="p-6 shadow-md bg-paladin-light-gray dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      Large Scope
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-paladin-dark-blue/80 dark:text-gray-300">
                    <p className="text-3xl font-bold text-paladin-dark-blue dark:text-gray-50">
                      100+ hours
                    </p>
                    <p className="text-lg text-paladin-dark-blue/80 dark:text-gray-400">
                      ($15,000+)
                    </p>
                    <p className="text-sm text-paladin-dark-blue/60 dark:text-gray-500">
                      Schedule: 12+ weeks
                    </p>
                    <p className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 mt-2">
                      Comprehensive rebuild with custom features and ongoing
                      support.
                    </p>
                    <ul className="pl-5 space-y-2 text-left pt-4">
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Complete website rebuild & redesign from scratch
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Highly tailored headless CMS integration
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Comprehensive SEO, including content strategy
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Advanced analytics, custom dashboards, and A/B testing
                        setup
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Integration with third-party services (CRM, marketing
                        automation, etc.)
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Ongoing maintenance, support, and feature development
                      </li>
                      <li>
                        <CheckCircle2 className="inline-block h-4 w-4 mr-2 text-paladin-red" />
                        Accessibility audit and full WCAG compliance
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Thank You Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 bg-paladin-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-paladin-dark-blue dark:text-gray-50">
              Thank You
            </h2>
            <p className="mx-auto max-w-[800px] text-paladin-dark-blue/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed dark:text-gray-400 mt-4">
              Thank you for considering our proposal. We are genuinely excited
              about the opportunity to collaborate with you and help achieve
              your digital goals. We look forward to working together!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
