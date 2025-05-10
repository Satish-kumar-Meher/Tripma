// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { Facebook, InstagramIcon, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner pt-10 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b pb-6 border-gray-200">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-violet-600 mb-4">Tripma</h2>
        </div>

        {/* About */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-violet-600">About Tripma</a></li>
            <li><a href="#" className="hover:text-violet-600">How it works</a></li>
            <li><a href="#" className="hover:text-violet-600">Careers</a></li>
            <li><a href="#" className="hover:text-violet-600">Press</a></li>
            <li><a href="#" className="hover:text-violet-600">Blog</a></li>
            <li><a href="#" className="hover:text-violet-600">Forum</a></li>
          </ul>
        </div>

        {/* Partner with us */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Partner with us</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-violet-600">Partnership programs</a></li>
            <li><a href="#" className="hover:text-violet-600">Affiliate program</a></li>
            <li><a href="#" className="hover:text-violet-600">Connectivity partners</a></li>
            <li><a href="#" className="hover:text-violet-600">Promotions and events</a></li>
            <li><a href="#" className="hover:text-violet-600">Integrations</a></li>
            <li><a href="#" className="hover:text-violet-600">Community</a></li>
            <li><a href="#" className="hover:text-violet-600">Loyalty program</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-violet-600">Help Center</a></li>
            <li><a href="#" className="hover:text-violet-600">Contact us</a></li>
            <li><a href="#" className="hover:text-violet-600">Privacy policy</a></li>
            <li><a href="#" className="hover:text-violet-600">Terms of service</a></li>
            <li><a href="#" className="hover:text-violet-600">Trust and safety</a></li>
            <li><a href="#" className="hover:text-violet-600">Accessibility</a></li>
          </ul>
        </div>

        {/* App */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Get the app</h3>
          <ul className="space-y-2 text-sm text-gray-500 mb-4">
            <li><a href="#" className="hover:text-violet-600">Tripma for Android</a></li>
            <li><a href="#" className="hover:text-violet-600">Tripma for iOS</a></li>
            <li><a href="#" className="hover:text-violet-600">Mobile site</a></li>
          </ul>
          <div className="flex gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg"
              alt="App Store"
              className="w-32 hover:scale-105 transition-transform"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-32 hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-gray-500 text-sm">
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-violet-600"><Twitter size={20} /></a>
          <a href="#" className="hover:text-violet-600"><InstagramIcon size={20} /></a>
          <a href="#" className="hover:text-violet-600"><Facebook size={20} /></a>
        </div>
        <p className="mt-4 md:mt-0">© 2025 Tripma Incorporated</p>
      </div>
    </footer>
  );
};

export default Footer;
