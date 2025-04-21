import { useState } from "react";
import { cn } from "@/lib/utils";

const weeks = [
  {
    number: 1,
    title: "Foundation Setup",
    description: "Building the essential foundation for your journey.",
    sessions: [
      {
        title: "Getting Started",
        topics: [
          "Program overview and expectations",
          "Setting up tools and resources",
          "Initial assessments and goal setting"
        ]
      }
    ],
    resources: [
      "Program Guide",
      "Tools Setup Guide",
      "Goal Setting Template"
    ]
  },
  {
    number: 2,
    title: "First Role-Play & Challenge",
    description: "Developing practical skills through role-play and challenges.",
    sessions: [
      {
        title: "Role-Play Fundamentals",
        topics: [
          "Introduction to role-play scenarios",
          "First challenge briefing",
          "Feedback and improvement strategies"
        ]
      }
    ],
    resources: [
      "Role-Play Guide",
      "Challenge Framework",
      "Feedback Template"
    ]
  },
  {
    number: 3,
    title: "Community & Partnerships",
    description: "Building relationships and collaborative networks.",
    sessions: [
      {
        title: "Community Building",
        topics: [
          "Network development strategies",
          "Partnership opportunities",
          "Collaboration frameworks"
        ]
      }
    ],
    resources: [
      "Networking Guide",
      "Partnership Templates",
      "Community Guidelines"
    ]
  },
  {
    number: 4,
    title: "Second Role-Play & Content",
    description: "Advancing skills through advanced role-play scenarios.",
    sessions: [
      {
        title: "Advanced Role-Play",
        topics: [
          "Complex scenario handling",
          "Content creation strategies",
          "Performance improvement"
        ]
      }
    ],
    resources: [
      "Advanced Scenarios Guide",
      "Content Creation Templates",
      "Performance Metrics"
    ]
  },
  {
    number: 5,
    title: "Second Challenge & Engagement",
    description: "Taking on new challenges and deepening engagement.",
    sessions: [
      {
        title: "Challenge Deep Dive",
        topics: [
          "Advanced challenge strategies",
          "Engagement techniques",
          "Success metrics"
        ]
      }
    ],
    resources: [
      "Challenge Handbook",
      "Engagement Guide",
      "Metrics Dashboard"
    ]
  },
  {
    number: 6,
    title: "Third Role-Play & Promotion",
    description: "Mastering role-play scenarios and promotion strategies.",
    sessions: [
      {
        title: "Mastery & Promotion",
        topics: [
          "Expert role-play techniques",
          "Promotion strategies",
          "Success planning"
        ]
      }
    ],
    resources: [
      "Mastery Guide",
      "Promotion Toolkit",
      "Success Templates"
    ]
  },
  {
    number: 7,
    title: "Final Challenge & Certificates",
    description: "Completing final challenges and earning certification.",
    sessions: [
      {
        title: "Final Challenge",
        topics: [
          "Challenge completion",
          "Certificate requirements",
          "Final assessments"
        ]
      }
    ],
    resources: [
      "Challenge Guide",
      "Certificate Requirements",
      "Assessment Criteria"
    ]
  },
  {
    number: 8,
    title: "Final Push & Registrations",
    description: "Concluding the program and preparing for next steps.",
    sessions: [
      {
        title: "Program Conclusion",
        topics: [
          "Final steps completion",
          "Registration process",
          "Future planning"
        ]
      }
    ],
    resources: [
      "Completion Guide",
      "Registration Process",
      "Future Planning Template"
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
