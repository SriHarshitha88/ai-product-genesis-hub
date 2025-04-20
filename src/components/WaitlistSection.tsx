
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name) {
      toast.error("Please enter your name");
      return;
    }
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You're on the waitlist! We'll be in touch soon.");
      setName("");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 bg-ai-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl mb-8">
            Join our waitlist for early access and exclusive benefits.
            Program starts on June 24, 2025.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Join the Waitlist</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-tpf-purple hover:bg-tpf-purple/90"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Join Waitlist"}
              </Button>
            </form>
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              By joining, you agree to receive updates about the program. We respect your privacy and will never share your information.
            </p>
          </div>
          
          <div className="mt-8 text-white/80 text-sm">
            <p>Limited to 300 participants. Applications open June 3, 2025.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
