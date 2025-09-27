import React, { useState } from 'react';
import { Target, Heart, Users, Zap, Play, Quote, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize legal education in Pakistan through cutting-edge technology and comprehensive resources.',
    },
    {
      icon: Heart,
      title: 'Free Access',
      description: 'Democratizing legal education by providing world-class resources completely free for all students.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by students, for students. A collaborative ecosystem of knowledge sharing and growth.',
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Leveraging artificial intelligence to personalize learning experiences and optimize study paths.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-cyan-500/30 text-cyan-300 mb-8">
            <Users className="h-5 w-5 mr-3" />
            <span className="text-sm font-bold tracking-wider">ABOUT LAWHUB PAKISTAN</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              PIONEERING THE FUTURE
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just an educational platform – we're architects of Pakistan's legal education revolution
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative text-center">
                <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder's Message & Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Founder's Message */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Founder's Message</h3>
                <p className="text-cyan-400">Vision & Leadership</p>
              </div>
            </div>
            
            <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
              "Education is the most powerful weapon which you can use to change the world. At LawHub Pakistan, 
              we're not just providing resources – we're building the foundation for Pakistan's legal future. 
              Every note shared, every quiz taken, every student helped brings us closer to our vision of 
              accessible, world-class legal education for all."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"></div>
              <div>
                <div className="text-white font-bold">Muhammad Ahmad</div>
                <div className="text-gray-400 text-sm">Founder & CEO</div>
              </div>
            </div>
          </div>

          {/* Video Introduction */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 group hover:border-cyan-400/50 transition-all duration-500">
            <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 flex items-center justify-center relative overflow-hidden">
              {!isVideoPlaying ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="group/play relative z-10 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl shadow-cyan-500/25"
                  >
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white text-xl font-bold mb-2">Platform Introduction</div>
                      <div className="text-gray-400">Watch our story unfold</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-4">Video Coming Soon</div>
                    <div className="text-gray-400">Our introduction video is in production</div>
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose LawHub Pakistan?
              </span>
            </h3>
            <p className="text-gray-300 text-lg">The future of legal education is here</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'Comprehensive Coverage',
                  description: 'From 1st year to 5th year LLB, plus LAT, GAT, and Judiciary preparation with AI-curated content'
                },
                {
                  icon: Zap,
                  title: 'Quality Assurance',
                  description: 'All materials are AI-reviewed, student-tested, and continuously updated for maximum effectiveness'
                },
                {
                  icon: Users,
                  title: 'Student Contributions',
                  description: 'Platform built with input from successful students, top educators, and legal professionals'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation First',
                  description: 'Cutting-edge features including AI study assistants, personalized learning paths, and smart analytics'
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-3xl p-8 border border-cyan-500/20">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      50,000+
                    </div>
                    <div className="text-gray-400">Students Empowered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      2,500+
                    </div>
                    <div className="text-gray-400">Resources Available</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      100%
                    </div>
                    <div className="text-gray-400">Free Access</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <div className="text-gray-400">AI Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;