
const speakers = [
  {
    name: "Emad Mostaque",
    role: "Founder & CEO",
    company: "Stability AI",
    expertise: "Generative AI, Open Source AI",
    topic: "The Next Frontier: Generative AI for Product Builders",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "May Habib",
    role: "Co-founder & CEO",
    company: "Writer",
    expertise: "Enterprise AI Products, Go-to-Market Strategy",
    topic: "Building Enterprise-Grade AI Products",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Andrew Ng",
    role: "Founder",
    company: "DeepLearning.AI",
    expertise: "AI Education, Machine Learning",
    topic: "AI Product Management Fundamentals",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Linus Lee",
    role: "Head of AI",
    company: "Notion",
    expertise: "AI Integration, Product Design",
    topic: "Integrating AI into Existing Products",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Alexandr Wang",
    role: "Founder & CEO",
    company: "Scale AI",
    expertise: "Data Quality, AI Training",
    topic: "Data-Centric AI Product Development",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Joanne Chen",
    role: "Partner",
    company: "Foundation Capital",
    expertise: "AI Investment, Market Trends",
    topic: "What VCs Look for in AI Products",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
  },
  {
    name: "Matt Turck",
    role: "Managing Director",
    company: "FirstMark",
    expertise: "AI Ecosystem, Competitive Landscape",
    topic: "Navigating the AI Tools Landscape",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    name: "Cathy Pearl",
    role: "UX Lead",
    company: "Google Assistant",
    expertise: "Voice UI/UX, Conversational Design",
    topic: "Designing Human-Centered AI Experiences",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
  },
  {
    name: "Shreya Shankar",
    role: "ML Engineer",
    company: "formerly Stripe/Google",
    expertise: "ML Engineering, Cross-functional Collaboration",
    topic: "PM-Engineer Collaboration in AI Products",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
  },
  {
    name: "Aravind Srinivas",
    role: "Co-founder & CEO",
    company: "Perplexity AI",
    expertise: "Search AI, Consumer Products",
    topic: "Reinventing Search with AI",
    image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

export function ExpertSpeakers() {
  return (
    <section id="speakers" className="py-20 bg-tpf-purple text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tpf-purple-light opacity-20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tpf-blue opacity-20 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn from Industry Experts</h2>
          <p className="text-lg opacity-90">
            Our program features top AI product leaders who will share their insights,
            experiences, and practical knowledge to accelerate your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                <p className="text-tpf-purple mb-2">{speaker.role} at {speaker.company}</p>
                
                <div className="text-sm mb-3">
                  <span className="font-medium">Topic:</span> {speaker.topic}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {speaker.expertise.split(',').map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 bg-tpf-purple-soft text-tpf-purple rounded-full"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
