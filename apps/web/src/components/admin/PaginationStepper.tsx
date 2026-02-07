"use client";

import { useEffect, useRef } from "react";

type Step = {
  id: number;
  title: string;
  subtitle: string;
};

interface Props {
  steps: Step[];
  activeStep: number;
}

export default function PaginationStepper({ steps, activeStep }: Props) {
  const stepRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Auto-scroll active step into view
  useEffect(() => {
    const el = stepRefs.current[activeStep];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeStep]);

  return (
    <div className="relative bg-white rounded-xl border shadow-sm p-3">
      {/* ===== STEPPER ===== */}
      <div className="stepper-scroll flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-2">
        {steps.map((step) => {
          const isCompleted = step.id < activeStep;
          const isActive = step.id === activeStep;

          return (
            <div
              key={step.id}
              ref={(el) => {
                stepRefs.current[step.id] = el;
              }}
              className={`
                snap-center
                w-[260px] flex-shrink-0
                flex items-start gap-3
                px-4 py-3
                rounded-lg
                border
                transition-all duration-200
                ${
                  isActive
                    ? "border-teal-600 bg-teal-50"
                    : "border-gray-200 bg-white"
                }
              `}
            >
              {/* STEP NUMBER */}
              <div
                className={`
                  w-8 h-8 shrink-0 rounded-full
                  flex items-center justify-center font-medium text-sm
                  ${
                    isCompleted
                      ? "bg-teal-600 text-white"
                      : isActive
                      ? "border-2 border-teal-600 text-teal-600"
                      : "border border-gray-300 text-gray-400"
                  }
                `}
              >
                {isCompleted ? "✓" : step.id}
              </div>

              {/* STEP TEXT */}
              <div className="flex flex-col min-w-0">
                <p
                  className={`text-sm font-medium leading-tight ${
                    isActive ? "text-teal-600" : "text-gray-700"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-400">{step.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* SCROLLBAR STYLING */}
      <style jsx>{`
        .stepper-scroll {
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: #0d9488 #e5e7eb;
        }

        .stepper-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .stepper-scroll::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 10px;
        }

        .stepper-scroll::-webkit-scrollbar-thumb {
          background-color: #0d9488;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
