
import { CheckCircle, Clock, FileText, Users } from "lucide-react";

const journeySteps = [
  {
    icon: Clock,
    title: "Live Sessions",
    description: "12 interactive sessions with industry experts, workshops and hands-on learning",
    details: ["Expert talks", "Live Q&A", "Recorded for reference"]
  },
  {
    icon: FileText,
    title: "Weekly Projects",
    description: "Build your AI product incrementally with structured milestones and feedback",
    details: ["Practical exercises", "Incremental building", "Portfolio-worthy output"]
  },
  {
    icon: Users,
    title: "Accountability Groups",
    description: "Collaborate with 5-6 peers for support, feedback and motivation",
    details: ["Peer support", "Group critiques", "Collaborative learning"]
  },
  {
    icon: CheckCircle,
    title: "Achievement Tracking",
    description: "Measure your progress with clear milestones and recognition",
    details: ["Skill badges", "Progress dashboard", "Final certification"]
  }
];

export function ParticipantJourney() {
  return (
    <section id="journey" className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Learning Journey</h2>
          <p className="text-lg text-gray-700">
            Experience a transformative path from AI basics to launching your own product,
            supported by experts and peers every step of the way.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          {/* Journey Path Visualization */}
          <div className="hidden md:block relative h-20 mb-10">
            {/* Path Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-tpf-purple-soft"></div>
            
            {/* Nodes */}
            {[0, 1, 2, 3].map((index) => (
              <div 
                key={index} 
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{ left: `${index * 33.3 + 0.5}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-tpf-purple flex items-center justify-center text-white">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          
          {/* Journey Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-tpf-purple-soft flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-tpf-purple" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 w-full">
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-sm flex items-center">
                        <CheckCircle className="h-4 w-4 text-tpf-purple mr-2" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Milestones */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-center mb-6">Your Project Milestones</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-tpf-purple-soft hidden md:block"></div>
              
              <div className="space-y-6">
                {[
                  { week: "Week 1", milestone: "Problem & Opportunity Definition" },
                  { week: "Week 2", milestone: "AI Solution Specification" },
                  { week: "Week 3", milestone: "Technical Approach & Tools Selection" },
                  { week: "Week 4", milestone: "User Experience Design" },
                  { week: "Week 5", milestone: "Ethical Considerations & Mitigation" },
                  { week: "Week 6", milestone: "Final Presentation & Demo" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-tpf-purple text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-3 rounded-lg flex-grow">
                      <div className="inline-block md:hidden mb-2 px-2 py-1 rounded-full bg-tpf-purple-soft text-tpf-purple text-xs">
                        {item.week}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="hidden md:block font-medium">{item.week}</div>
                        <div className="text-gray-800">{item.milestone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
