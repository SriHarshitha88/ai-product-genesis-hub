
export function CommunityExperience() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Experience</h2>
          <p className="text-lg text-gray-700">
            Join a vibrant community of product professionals on the same journey,
            providing support, insights, and collaboration opportunities.
          </p>
        </div>
        
        <div className="md:flex gap-10 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Community Platform Mockup */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Platform Header */}
              <div className="bg-ai-gradient p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">TPF Community Platform</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Platform Content */}
              <div className="p-4 bg-gray-50">
                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="w-1/4 bg-white rounded-lg p-3 shadow-sm">
                    <div className="mb-4">
                      <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                    </div>
                    
                    <div>
                      <div className="h-3 bg-tpf-purple-soft rounded-full w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-3/4">
                    <div className="mb-4">
                      <div className="h-6 bg-gray-200 rounded-lg w-1/2 mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                      <div className="flex gap-2 items-center mb-2">
                        <div className="w-8 h-8 bg-tpf-purple rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex gap-2 items-center mb-2">
                        <div className="w-8 h-8 bg-tpf-blue rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Build Together, Learn Faster</h3>
            
            <div className="space-y-6">
              <div className="bg-tpf-purple-soft rounded-lg p-5">
                <h4 className="font-bold text-lg mb-2">Accountability Groups</h4>
                <p>
                  Join a small group of 5-6 peers who will support your journey, provide feedback on your 
                  work, and keep you accountable throughout the program.
                </p>
              </div>
              
              <div className="bg-tpf-purple-soft rounded-lg p-5">
                <h4 className="font-bold text-lg mb-2">Knowledge Sharing</h4>
                <p>
                  Access shared resources, insights, and discoveries from the entire cohort. Learn from others' 
                  experiments and share your own breakthroughs.
                </p>
              </div>
              
              <div className="bg-tpf-purple-soft rounded-lg p-5">
                <h4 className="font-bold text-lg mb-2">Expert Office Hours</h4>
                <p>
                  Get guidance directly from industry experts during dedicated office hours sessions to 
                  troubleshoot issues and refine your approach.
                </p>
              </div>
              
              <div className="bg-tpf-purple-soft rounded-lg p-5">
                <h4 className="font-bold text-lg mb-2">Post-Program Network</h4>
                <p>
                  Continue your learning journey with lifetime access to the alumni community, creating 
                  valuable connections for your career in AI product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
