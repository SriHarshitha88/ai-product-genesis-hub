
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function HeroSection() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    toast.success("Thank you for joining our waitlist!");
    setEmail("");
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10 z-0"></div>
      
      {/* Abstract AI shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-tpf-purple-light opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-tpf-blue opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            From Product Manager to 
            <span className="text-gradient block mt-2">AI Product Builder in 6 Weeks</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A TPF community-powered learning experience
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-ai-gradient hover:opacity-90">Join Waitlist</Button>
            </form>
          </div>
          
          <p className="text-sm text-gray-500 mt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Program starts June 24, 2025 • Limited spots available
          </p>
        </div>
        
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-tpf-purple mb-2">12</div>
              <div className="text-gray-600">Sessions</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-tpf-purple mb-2">10</div>
              <div className="text-gray-600">Expert Speakers</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-tpf-purple mb-2">1</div>
              <div className="text-gray-600">Complete AI Product</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
