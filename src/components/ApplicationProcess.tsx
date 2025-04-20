
const timeline = [
  {
    date: "April 21 - June 2",
    stage: "Waitlist Open",
    description: "Join the waitlist to get early access to application and program materials."
  },
  {
    date: "June 3 - June 16",
    stage: "Applications Open",
    description: "Submit your application with background information and goals."
  },
  {
    date: "June 17 - June 20",
    stage: "Selection Process",
    description: "Applications are reviewed and participants are selected."
  },
  {
    date: "June 21",
    stage: "Cohort Announced",
    description: "Selected participants are notified and onboarding begins."
  },
  {
    date: "June 24",
    stage: "Program Begins",
    description: "First session kicks off with orientation and foundations."
  }
];

export function ApplicationProcess() {
  return (
    <section id="application" className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
          <p className="text-lg text-gray-700">
            Join our selective cohort of product professionals ready to build the next generation of AI products.
          </p>
        </div>
        
        <div className="md:grid md:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Key Dates</h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 relative">
                      <div className="w-4 h-4 rounded-full bg-tpf-purple mt-1.5"></div>
                      {index < timeline.length - 1 && (
                        <div className="absolute top-5 bottom-0 left-2 w-0.5 -ml-px bg-tpf-purple-soft h-full"></div>
                      )}
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-tpf-purple">{item.date}</div>
                      <h4 className="font-bold mb-1">{item.stage}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-tpf-purple text-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Early Bird Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-tpf-purple font-bold text-xs mr-3 mt-0.5">✓</div>
                  <span>Access to exclusive pre-program AI toolkit</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-tpf-purple font-bold text-xs mr-3 mt-0.5">✓</div>
                  <span>One-on-one mentorship matching session</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-tpf-purple font-bold text-xs mr-3 mt-0.5">✓</div>
                  <span>Priority access to limited office hours</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center text-tpf-purple font-bold text-xs mr-3 mt-0.5">✓</div>
                  <span>Special early bird pricing ($200 discount)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 md:mt-0">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Selection Criteria</h3>
              <p className="text-gray-700 mb-6">
                Our program is designed for product managers and professionals looking to advance their AI skills. 
                The ideal candidate has:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-tpf-purple pl-4 py-1">
                  <h4 className="font-bold">Experience Level</h4>
                  <p className="text-gray-600">2+ years in product management or adjacent roles</p>
                </div>
                
                <div className="border-l-4 border-tpf-purple pl-4 py-1">
                  <h4 className="font-bold">Technical Background</h4>
                  <p className="text-gray-600">Basic understanding of technical concepts (formal education not required)</p>
                </div>
                
                <div className="border-l-4 border-tpf-purple pl-4 py-1">
                  <h4 className="font-bold">AI Interest</h4>
                  <p className="text-gray-600">Demonstrated curiosity about AI applications and technology</p>
                </div>
                
                <div className="border-l-4 border-tpf-purple pl-4 py-1">
                  <h4 className="font-bold">Project Commitment</h4>
                  <p className="text-gray-600">Ready to dedicate 5-7 hours weekly to coursework and project development</p>
                </div>
                
                <div className="border-l-4 border-tpf-purple pl-4 py-1">
                  <h4 className="font-bold">Community Mindset</h4>
                  <p className="text-gray-600">Willing to actively participate in group discussions and peer feedback</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-tpf-purple-soft rounded-lg">
                <h4 className="font-bold text-tpf-purple mb-2">Application Components</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Background information</li>
                  <li>Experience with product development</li>
                  <li>Goals for the program</li>
                  <li>Brief description of AI product concept</li>
                  <li>Commitment confirmation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#waitlist" className="inline-block px-8 py-3 bg-ai-gradient text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
