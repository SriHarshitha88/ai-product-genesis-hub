import { CheckCircle } from "lucide-react";

const milestones = [
  {
    week: "Week 1",
    title: "Foundations for Product Leaders",
    description: "Master essential AI concepts and leadership principles"
  },
  {
    week: "Week 2",
    title: "AI Product Thinking",
    description: "Develop strategic approaches to AI product development"
  },
  {
    week: "Week 3",
    title: "Build Without Coding",
    description: "Create AI solutions using no-code and low-code platforms"
  },
  {
    week: "Week 4",
    title: "Architecting Data-Strategy & Vertical Insights",
    description: "Design data strategies and industry-specific solutions"
  },
  {
    week: "Week 5",
    title: "Responsible AI-Ethics, ROI, and Tool Mastery",
    description: "Balance ethics, business value, and technical implementation"
  },
  {
    week: "Week 6",
    title: "From Pitch to Launch-Capstone",
    description: "Execute your project from concept to market launch"
  }
];

export function ProgramOverview() {
  return (
    <section id="program" className="py-20 bg-soft-gradient relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Overview</h2>
          <p className="text-lg text-gray-700">
            Transform into a confident AI product builder through structured learning, 
            hands-on practice, and community collaboration.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tpf-purple-soft z-0 hidden md:block"></div>
          
          {/* Milestones */}
          <div className="space-y-12 relative z-10">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.week} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Timeline node */}
                <div className="hidden md:block w-12 h-12 rounded-full border-4 border-white bg-tpf-purple flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div 
                  className={`w-full md:w-5/12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-tpf-purple-soft text-tpf-purple text-sm font-medium mb-3">
                    {milestone.week}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4 text-center">By the end of the program, you'll:</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Create AI products that solve real problems",
              "Understand AI technology fundamentals",
              "Navigate AI tools confidently",
              "Design intuitive AI user experiences",
              "Build with ethical considerations",
              "Present and launch AI products effectively"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-tpf-purple h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
