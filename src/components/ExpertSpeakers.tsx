const speakers = [
  {
    name: "Utpal Chakraborty",
    role: "Chief Technology Officer",
    company: "IntellAI",
    expertise: "Data Science, Artificial Intelligence, Quantum Computing, Digital Transformation",
    topic: "AI-Driven Product Ideation and Prototyping",
    image: "/speakers/utpal-chakraborty.png"
  },
  {
    name: "Jaspreet Bindra",
    role: "Founder and Managing Director",
    company: "Tech Whisperer (India/UK)",
    expertise: "Artificial Intelligence, Blockchain, Digital Transformation, Product Strategy",
    topic: "Strategic AI Product Development for PMs",
    image: "/speakers/jaspreet-bindra.png"
  },
  {
    name: "Rahul Ganjoo",
    role: "Vice President of Product",
    company: "Zomato",
    expertise: "Product Management, Go-to-Market Strategy, Consumer Tech, AI Product Scaling",
    topic: "Crafting Winning AI Product GTM Plans",
    image: "/speakers/rahul-ganjoo.png"
  },
  {
    name: "Naiyya Saggi",
    role: "Co-Founder and CEO",
    company: "The Good Glamm Group",
    expertise: "Entrepreneurship, Ethical AI, Consumer Tech, Scaling Startups",
    topic: "Building Ethical AI Products for Scale",
    image: "/speakers/naiyya-saggi.png"
  },
  {
    name: "Dr. Shailesh Kumar",
    role: "Chief Data Scientist",
    company: "Reliance Jio",
    expertise: "Machine Learning, Data Science, AI for Telecom, Predictive Analytics",
    topic: "AI-Powered Product Innovation at Scale",
    image: "/speakers/shailesh-kumar.png"
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
