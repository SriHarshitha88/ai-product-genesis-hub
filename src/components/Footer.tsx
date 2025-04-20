
export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-tpf-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TPF AI Cohort</h3>
            <p className="text-sm text-gray-300">
              Transforming product professionals into confident AI product builders through structured learning,
              hands-on practice, and community collaboration.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Program</h4>
            <ul className="space-y-2">
              <li><a href="#program" className="text-sm text-gray-300 hover:text-white">Overview</a></li>
              <li><a href="#curriculum" className="text-sm text-gray-300 hover:text-white">Curriculum</a></li>
              <li><a href="#speakers" className="text-sm text-gray-300 hover:text-white">Speakers</a></li>
              <li><a href="#application" className="text-sm text-gray-300 hover:text-white">Apply</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">TPF Website</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:cohorts@tpf.com" className="text-sm text-gray-300 hover:text-white">cohorts@tpf.com</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Support</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Partnerships</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {year} The Product Folks. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
