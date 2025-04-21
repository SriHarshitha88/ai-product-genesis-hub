import { useState } from "react";
import { cn } from "@/lib/utils";

const weeks = [
  {
    number: 1,
    title: "Foundations for Product Leaders",
    description: "Essential foundations and leadership principles for AI product development.",
    sessions: [
      {
        title: "Product Leadership in AI Era",
        topics: [
          "AI landscape and product leadership",
          "Key concepts and terminology",
          "Leadership strategies in AI transformation"
        ]
      }
    ],
    resources: [
      "AI Leadership Playbook",
      "Foundation Concepts Guide",
      "Leadership Assessment Tools"
    ]
  },
  {
    number: 2,
    title: "AI Product Thinking",
    description: "Developing strategic product thinking for AI solutions.",
    sessions: [
      {
        title: "Strategic AI Product Development",
        topics: [
          "AI product strategy frameworks",
          "Problem-solution fit in AI",
          "User-centric AI product design"
        ]
      }
    ],
    resources: [
      "AI Strategy Toolkit",
      "Product Framework Templates",
      "Case Studies Collection"
    ]
  },
  {
    number: 3,
    title: "Build Without Coding",
    description: "Creating AI solutions using no-code and low-code approaches.",
    sessions: [
      {
        title: "No-Code AI Development",
        topics: [
          "No-code AI platform mastery",
          "Rapid prototyping techniques",
          "Integration strategies"
        ]
      }
    ],
    resources: [
      "No-Code Tools Guide",
      "Prototyping Templates",
      "Integration Playbook"
    ]
  },
  {
    number: 4,
    title: "Architecting Data-Strategy & Vertical Insights",
    description: "Developing data strategies and industry-specific solutions.",
    sessions: [
      {
        title: "Data Strategy & Industry Focus",
        topics: [
          "Data architecture principles",
          "Vertical-specific strategies",
          "Industry use case analysis"
        ]
      }
    ],
    resources: [
      "Data Strategy Framework",
      "Industry Insights Guide",
      "Use Case Templates"
    ]
  },
  {
    number: 5,
    title: "Responsible AI-Ethics, ROI, and Tool Mastery",
    description: "Balancing ethics, business value, and technical implementation.",
    sessions: [
      {
        title: "Ethics & Business Value",
        topics: [
          "AI ethics frameworks",
          "ROI calculation methods",
          "Advanced tool implementation"
        ]
      }
    ],
    resources: [
      "Ethics Guidelines",
      "ROI Calculator",
      "Tool Mastery Guide"
    ]
  },
  {
    number: 6,
    title: "From Pitch to Launch-Capstone",
    description: "Bringing it all together from concept to market launch.",
    sessions: [
      {
        title: "Launch Preparation",
        topics: [
          "Pitch deck creation",
          "Go-to-market strategy",
          "Launch execution plan"
        ]
      }
    ],
    resources: [
      "Pitch Deck Template",
      "Launch Checklist",
      "Success Metrics Framework"
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
