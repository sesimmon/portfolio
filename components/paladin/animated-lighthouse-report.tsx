"use client";

import { useEffect, useState, useRef } from "react";
import { CheckCircle2, XCircle, TriangleAlert, Info } from "lucide-react"; // Import necessary icons
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/paladin/ui/accordion"; // Import Accordion components

interface ProgressBarProps {
  label: string;
  value: number;
  unit: string;
  color: string;
  delay: number;
  isTriggered: boolean;
}

function AnimatedProgressBar({
  label,
  value,
  unit,
  color,
  delay,
  isTriggered,
}: ProgressBarProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isTriggered) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      const duration = 1200;
      const steps = 50;
      const increment = value / steps;
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= value) {
          currentValue = value;
          clearInterval(interval);
        }
        setAnimatedValue(currentValue);
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, isTriggered]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-paladin-dark-blue/80 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm font-bold text-paladin-dark-blue dark:text-gray-50">
          {animatedValue.toFixed(value % 1 === 0 ? 0 : 1)}
          {unit}
        </span>
      </div>
      {/* The screenshot doesn't show progress bars for these metrics, only values.
          Keeping the bar for potential future use or visual interest, but it can be removed if strictly matching. */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-1200 ease-out"
          style={{
            backgroundColor: color,
            width: isVisible
              ? value === 0
                ? "100%"
                : `${Math.min((animatedValue / value) * 100, 100)}%`
              : "0%",
          }}
        />
      </div>
    </div>
  );
}

interface OpportunityItemProps {
  text: string;
  color: string;
  delay: number;
  isTriggered: boolean;
}

function OpportunityItem({
  text,
  color,
  delay,
  isTriggered,
}: OpportunityItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isTriggered) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isTriggered]);

  return (
    <div className="flex items-center space-x-2">
      <TriangleAlert
        className={`h-4 w-4 ${color} transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        className={`transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export function AnimatedLighthouseReport() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationsTriggered) {
            setIsVisible(true);
            // Small delay before triggering animations
            setTimeout(() => {
              setAnimationsTriggered(true);
            }, 300);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [animationsTriggered]);

  return (
    <div
      ref={containerRef}
      className={`bg-white dark:bg-gray-800 w-full transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-paladin-dark-blue dark:text-gray-50">
            Performance Analysis
          </h3>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <AnimatedProgressBar
          label="First Contentful Paint"
          value={1.1}
          unit="s"
          color="#ef4444"
          delay={200}
          isTriggered={animationsTriggered}
        />
        <AnimatedProgressBar
          label="Largest Contentful Paint"
          value={1.9}
          unit="s"
          color="#f59e0b"
          delay={400}
          isTriggered={animationsTriggered}
        />
        <AnimatedProgressBar
          label="Total Blocking Time"
          value={10}
          unit="ms"
          color="#10b981"
          delay={600}
          isTriggered={animationsTriggered}
        />
        <AnimatedProgressBar
          label="Cumulative Layout Shift"
          value={0}
          unit=""
          color="#10b981"
          delay={800}
          isTriggered={animationsTriggered}
        />
        <AnimatedProgressBar
          label="Speed Index"
          value={2.3}
          unit="s"
          color="#ef4444"
          delay={1000}
          isTriggered={animationsTriggered}
        />
      </div>

      {/* Capture Info */}
      <div className="text-xs text-paladin-dark-blue/60 dark:text-gray-400 mb-6 space-y-1">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span>Captured at Jul 24, 2025, 6:32 PM CDT</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-monitor"
          >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="12" x2="12" y1="17" y2="21" />
            <line x1="8" x2="16" y1="21" y2="21" />
          </svg>
          <span>Emulated Desktop with Lighthouse 12.8.0</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-gauge"
          >
            <path d="M12 14a4 4 0 0 0-4 4" />
            <path d="M14.8 13.2A10 10 0 1 0 2 12" />
            <path d="M10.2 21.6L14.8 13.2" />
            <path d="M12 12V2" />
          </svg>
          <span>Custom throttling</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Single page session</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chrome"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="19.94" y2="12" />
          </svg>
          <span>Using HeadlessChromium 137.0.7151.119 with lr</span>
        </div>
      </div>

      {/* Progressive Painting Thumbnails */}
      <div className="mb-6">
        <img
          src="/paladin/images/progressive-painting.png"
          alt="Progressive Painting Screenshots"
          className="w-full h-auto object-contain rounded"
        />
      </div>

      {/* Insights */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-sm font-semibold text-paladin-dark-blue dark:text-gray-50 mb-2">
          INSIGHTS
        </h4>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm font-medium text-paladin-dark-blue dark:text-gray-50 hover:no-underline">
              <div className="flex items-center space-x-2">
                <TriangleAlert className="h-4 w-4 text-red-500" />
                <span>Document request latency — Est savings of 550 ms</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 space-y-2 p-2">
              <p>
                Your first network request is the most important. Reduce its
                latency by avoiding redirects, ensuring a fast server response,
                and enabling text compression.{" "}
                <span className="font-bold">[LCP] [FCP]</span>
              </p>
              <div className="flex items-start space-x-2">
                <Info className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
                <span>
                  Choose a lightweight theme (ideally a block theme) and
                  implement full-page caching or a static site solution. Disable
                  unnecessary plugins to minimize server overhead. Consider
                  upgrading your hosting to managed or dedicated service.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Avoids redirects</span>
              </div>
              <div className="flex items-center space-x-2">
                <XCircle className="h-4 w-4 text-red-500" />
                <span>Server responded slowly (observed 651 ms)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Applies text compression</span>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Opportunities */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm font-medium text-paladin-dark-blue dark:text-gray-50 hover:no-underline">
              <div className="flex items-center space-x-2">
                <TriangleAlert className="h-4 w-4 text-red-500" />
                <span>Improve image delivery — Est savings of 100 KiB</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 space-y-2 p-2">
              <p>
                Optimizing image delivery can significantly reduce page load
                times.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm font-medium text-paladin-dark-blue dark:text-gray-50 hover:no-underline">
              <div className="flex items-center space-x-2">
                <TriangleAlert className="h-4 w-4 text-red-500" />
                <span>
                  Use efficient cache lifetimes — Est savings of 22 KiB
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 space-y-2 p-2">
              <p>
                Leverage browser caching to speed up repeat visits for users.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm font-medium text-paladin-dark-blue dark:text-gray-50 hover:no-underline">
              <div className="flex items-center space-x-2">
                <TriangleAlert className="h-4 w-4 text-red-500" />
                <span>Render blocking requests — Est savings of 40 ms</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 space-y-2 p-2">
              <p>
                Eliminate resources that block the first paint of your page.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-sm font-medium text-paladin-dark-blue dark:text-gray-50 hover:no-underline">
              <div className="flex items-center space-x-2">
                <TriangleAlert className="h-4 w-4 text-red-500" />
                <span>Forced reflow</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 space-y-2 p-2">
              <p>Avoid layout thrashing to improve rendering performance.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-sm font-medium text-paladin-dark-blue dark:text-gray-50 hover:no-underline">
              <div className="flex items-center space-x-2">
                <TriangleAlert className="h-4 w-4 text-red-500" />
                <span>LCP request discovery</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-xs text-paladin-dark-blue/70 dark:text-gray-400 space-y-2 p-2">
              <p>
                Ensure the largest contentful paint element is discovered
                quickly by the browser.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
