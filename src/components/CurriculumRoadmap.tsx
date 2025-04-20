
import { useState } from "react";
import { cn } from "@/lib/utils";

const weeks = [
  {
    number: 1,
    title: "AI Foundations",
    description: "Building the essential knowledge base for product professionals.",
    sessions: [
      {
        title: "Kickoff & Fundamentals",
        topics: [
          "AI landscape overview and terminology",
          "Major models and capabilities",
          "Hands-on prompt engineering workshop"
        ]
      },
      {
        title: "Product Thinking in the AI Era",
        topics: [
          "Panel on AI transformation of product development",
          "Discussion of successful AI product case studies",
          "Interactive Q&A with practitioners"
        ]
      }
    ],
    resources: [
      "AI Terminology Glossary",
      "Prompt Engineering Cheat Sheet",
      "Case Studies: Notable AI Product Launches"
    ]
  },
  {
    number: 2,
    title: "AI Product Manager's Toolkit",
    description: "Developing practical product skills for AI-powered solutions.",
    sessions: [
      {
        title: "AI Product Requirements & Scoping",
        topics: [
          "Identifying AI-suitable problems",
          "Creating AI-specific PRDs",
          "Workshop: Traditional → AI-enhanced solutions"
        ]
      },
      {
        title: "Product Teardown Night",
        topics: [
          "Live deconstruction of successful AI products",
          "Pattern recognition in AI interfaces",
          "Group analysis of UX elements"
        ]
      }
    ],
    resources: [
      "AI PRD Template",
      "AI Feature Specification Guide",
      "Product Teardown Framework"
    ]
  },
  {
    number: 3,
    title: "Building with AI: Tools & Techniques",
    description: "Exploring the development landscape for AI products.",
    sessions: [
      {
        title: "No-Code/Low-Code AI Development",
        topics: [
          "Survey of accessible AI tools",
          "Live demo of application building",
          "Tool selection framework"
        ]
      },
      {
        title: "Technical Considerations",
        topics: [
          "Data requirements",
          "Model selection strategies",
          "PM-Engineer collaboration techniques"
        ]
      }
    ],
    resources: [
      "AI Tool Comparison Matrix",
      "Data Requirements Checklist",
      "Technical-Product Collaboration Guide"
    ]
  },
  {
    number: 4,
    title: "AI UX & User Research",
    description: "Creating intuitive AI experiences that users love.",
    sessions: [
      {
        title: "Designing Intuitive AI Interfaces",
        topics: [
          "Best practices for AI UX",
          "Handling uncertainty and errors",
          "Workshop: Redesigning with AI capabilities"
        ]
      },
      {
        title: "User Research for AI Products",
        topics: [
          "Testing methods specific to AI",
          "Measuring AI experience metrics",
          "Peer feedback session on concepts"
        ]
      }
    ],
    resources: [
      "AI UX Pattern Library",
      "User Testing Script for AI Products",
      "Feedback Framework Template"
    ]
  },
  {
    number: 5,
    title: "AI Ethics & Responsible Innovation",
    description: "Building trust and responsibility into AI products.",
    sessions: [
      {
        title: "Ethics by Design",
        topics: [
          "Responsible AI product principles",
          "Addressing bias and transparency issues",
          "Risk assessment frameworks"
        ]
      },
      {
        title: "Mini-Hackathon: Ethical AI Solutions",
        topics: [
          "Team collaboration on ethical challenges",
          "Solution development and presentation",
          "Expert feedback on approaches"
        ]
      }
    ],
    resources: [
      "AI Ethics Checklist",
      "Responsible AI Design Canvas",
      "Case Studies in AI Ethics Failures"
    ]
  },
  {
    number: 6,
    title: "Launch & Scale",
    description: "Taking your AI product to market successfully.",
    sessions: [
      {
        title: "From Prototype to Production",
        topics: [
          "Launch strategies for AI products",
          "Metrics that matter for success",
          "Iteration and improvement cycles"
        ]
      },
      {
        title: "Demo Day & Celebration",
        topics: [
          "Project showcase presentations",
          "Expert panel feedback",
          "Awards and recognition"
        ]
      }
    ],
    resources: [
      "AI Launch Playbook",
      "Metrics Framework for AI Products",
      "Presentation Template for Demo Day"
    ]
  }
];

export function CurriculumRoadmap() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Roadmap</h2>
          <p className="text-lg text-gray-700">
            A comprehensive journey from AI fundamentals to launching your own AI product
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10">
          {weeks.map((week) => (
            <div 
              key={week.number}
              onClick={() => setActiveWeek(activeWeek === week.number ? null : week.number)}
              className={cn(
                "cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105",
                activeWeek === week.number 
                  ? "bg-tpf-purple text-white shadow-lg" 
                  : "bg-gray-100 hover:bg-tpf-purple-soft"
              )}
            >
              <div className="text-center">
                <div className={cn(
                  "mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-3",
                  activeWeek === week.number ? "bg-white text-tpf-purple" : "bg-tpf-purple text-white"
                )}>
                  {week.number}
                </div>
                <h3 className={cn(
                  "font-bold mb-1", 
                  activeWeek === week.number ? "text-white" : "text-gray-800"
                )}>
                  Week {week.number}
                </h3>
                <p className={cn(
                  "text-sm",
                  activeWeek === week.number ? "text-white" : "text-gray-600"
                )}>
                  {week.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {activeWeek !== null && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 animate-fade-in">
            <div className="md:flex md:gap-10">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Week {weeks[activeWeek - 1].number}: {weeks[activeWeek - 1].title}</h3>
                <p className="text-gray-700 mb-6">{weeks[activeWeek - 1].description}</p>
                
                <div className="space-y-6">
                  {weeks[activeWeek - 1].sessions.map((session, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-tpf-purple mb-2">Session {index + 1}: {session.title}</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {session.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-tpf-purple-soft p-5 rounded-lg">
                  <h4 className="font-bold text-tpf-purple mb-3">Resources</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {weeks[activeWeek - 1].resources.map((resource, index) => (
                      <li key={index} className="text-gray-700">{resource}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 bg-tpf-purple-soft p-5 rounded-lg">
                  <h4 className="font-bold text-tpf-purple mb-3">Weekly Project Milestone</h4>
                  <p className="text-gray-700">
                    {activeWeek === 1 && "Problem & Opportunity Definition"}
                    {activeWeek === 2 && "AI Solution Specification"}
                    {activeWeek === 3 && "Technical Approach & Tools Selection"}
                    {activeWeek === 4 && "User Experience Design"}
                    {activeWeek === 5 && "Ethical Considerations & Mitigation"}
                    {activeWeek === 6 && "Final Presentation & Demo"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeWeek === null && (
          <div className="text-center py-10 text-gray-500">
            Click on any week above to see detailed curriculum information
          </div>
        )}
      </div>
    </section>
  );
}
