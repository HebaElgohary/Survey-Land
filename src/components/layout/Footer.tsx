import SurveyInfinity from '@/assets/svg/Group (1).svg?react';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'; 
import Logo from '@/assets/svg/logo.svg?react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="text-white" style={{ background: "#210048" }}>
      <div className="container mx-auto px-9 py-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {/* Section 1 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex mb-6">
              <Logo width={41} height={48} className="mr-3" />
              <SurveyInfinity width={120} height={48} className="max-w-[120px]" />
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-left pr-0 sm:pr-9">
              Create, distribute, and analyze surveys with ease. Get valuable insights from your audience.
            </p>
            <ul className="flex space-x-3 mt-6 justify-center sm:justify-start">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="X"
                >
                  <Twitter size={20} strokeWidth={0} fill="currentColor" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={0} fill="currentColor" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} strokeWidth={0} fill="currentColor" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={2} />
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300 text-sm text-center sm:text-left">
              <li><a href="/Help Center" className="hover:text-white">Help Center</a></li>
              <li><a href="/Blog" className="hover:text-white">Blog</a></li>
              <li><a href="/Tutorials" className="hover:text-white">Tutorials</a></li>
              <li><a href="/Case Studies" className="hover:text-white">Case Studies</a></li>
              <li><a href="/Templates" className="hover:text-white">Templates</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm text-center sm:text-left">
              <li><a href="/Survey Builder" className="hover:text-white">Survey Builder</a></li>
              <li><a href="/Quiz Maker" className="hover:text-white">Quiz Maker</a></li>
              <li><a href="/Form Creator" className="hover:text-white">Form Creator</a></li>
              <li><a href="/Poll System" className="hover:text-white">Poll System</a></li>
              <li><a href="/Analytics Dashboard" className="hover:text-white">Analytics Dashboard</a></li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col items-center sm:items-start ">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-3 text-sm text-center sm:text-left">
              Subscribe to our newsletter for tips and updates
            </p>
            <div className="w-full max-w-[250px] mx-auto sm:mx-0">
              <Input
                id="newsletter-email"
                type="email"
                style={{ background: "#3D3751", border: "none" }}
                className="placeholder:text-gray-400 mb-2"
                placeholder="Enter your Email"
              />
              <Button
                style={{ width: "100%" }}
                className="bg-violet-700 hover:bg-violet-600"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-600 mt-8" />
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2025 SurveyPro. All rights reserved.</p>
          <ul className="flex gap-4 flex-wrap justify-center">
            <li><a href="/terms" className="hover:text-white">Terms</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
            <li><a href="/security" className="hover:text-white">Security</a></li>
            <li><a href="/cookies" className="hover:text-white">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
