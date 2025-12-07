import React from 'react';
import { Scale, BookOpen, Mail, Heart, ExternalLink, Zap, Brain, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Resources: [
      'LLB 1st Year Notes',
      'LLB 2nd Year Notes',
      'LLB 3rd Year Notes',
      'LLB 4th Year Notes',
      'LLB 5th Year Notes',
    ],
    Preparation: [
      'LAT Preparation',
      'GAT Materials',
      'Judiciary Notes',
      'Past Papers',
      'AI Quiz System',
    ],
    Community: [
      'Student Forums',
      'Study Groups',
      'Success Stories',
      'Contributor Network',
      'AI Help Center',
    ],
    Legal: [
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'AI Ethics Policy',
      'Copyright Info',
    ],
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className=""></div>
                <div className="  rounded-xl">
  <Link to="/">
    <img
      src={Logo}
      alt="Lexnex"
      className="h-[102px] w-[110px] object-contain ml-[-15px] transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
    />
  </Link>
</div>

              </div>
              <div>
                <Link to="/">
                <h1 className="ml-[-25px] text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  LEXNEX
                </h1>
                <p className="ml-[-25px] text-xs text-cyan-300/80 font-medium tracking-wider">
                  NEXT-GEN LEGAL EDUCATION
                </p>
                </Link>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pakistan's most advanced AI-powered legal education platform. Revolutionizing how law students 
              learn, practice, and excel in their academic journey through cutting-edge technology and 
              comprehensive resources.
            </p>
            
            <div className="flex items-center space-x-3 text-sm">
              <div className="flex items-center space-x-2 text-pink-400">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Made with passion</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Brain className="h-4 w-4" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group text-gray-400 hover:text-cyan-300 transition-all duration-300 text-sm flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                      <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 mb-12 border border-cyan-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg mr-3">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-300">
                Get notified about new AI features, study materials, and important updates for law students.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-4 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <button className="group relative overflow-hidden px-6 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center whitespace-nowrap">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} LawHub Pakistan. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="group text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                </a>
                <a href="#" className="group text-gray-400 hover:text-green-400 transition-colors duration-300">
                  <span className="sr-only">WhatsApp</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">W</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>Made in Pakistan</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4 text-purple-400" />
                <span>AI-Powered Education</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-green-400" />
                <span>Future of Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;