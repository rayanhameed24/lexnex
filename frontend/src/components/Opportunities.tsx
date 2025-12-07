import React from 'react';
import { Upload, CheckCircle, Star, Award, Send, Zap, Users, Trophy, Sparkles } from 'lucide-react';

const Opportunities = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Submit Materials',
      description: 'Upload your notes, study materials, or educational content through our AI-powered submission system.',
    },
    {
      icon: CheckCircle,
      title: 'AI Review Process',
      description: 'Our advanced AI algorithms review submissions for quality, accuracy, and educational value.',
    },
    {
      icon: Star,
      title: 'Get Featured',
      description: 'Selected materials are featured on our platform with full attribution and contributor recognition.',
    },
    {
      icon: Award,
      title: 'Earn Recognition',
      description: 'Build your academic portfolio and gain recognition in Pakistan\'s legal education community.',
    },
  ];

  const benefits = [
    {
      icon: Trophy,
      title: 'Digital Certificates',
      description: 'Receive verified digital certificates for your contributions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Community Status',
      description: 'Gain elevated status in our exclusive contributor community',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Get early access to new features and premium content',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section id="opportunities" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-purple-500/30 text-purple-300 mb-8">
            <Sparkles className="h-5 w-5 mr-3" />
            <span className="text-sm font-bold tracking-wider">JOIN THE REVOLUTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              CONTRIBUTOR
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              OPPORTUNITIES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Shape the future of legal education in Pakistan. Share your knowledge and become part of our elite contributor network.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contribute to Legal Excellence
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Have valuable notes, solved papers, or study materials? Share them with thousands of law students 
              across Pakistan and make a meaningful impact in their academic journey through our AI-powered platform.
            </p>
            
            <div className="space-y-6 mb-8 ">
              {[
                {
                  icon: CheckCircle,
                  title: 'Quality Materials Welcomed',
                  description: 'We accept handwritten notes, typed documents, solved papers, and comprehensive study guides'
                },
                {
                  icon: Star,
                  title: 'AI-Powered Recognition',
                  description: 'Our AI system ensures your contributions get maximum visibility and proper attribution'
                },
                {
                  icon: Award,
                  title: 'Build Your Legacy',
                  description: 'Create a lasting impact on Pakistan\'s legal education landscape'
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${benefit.color} mb-3`}>
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <h5 className="font-bold text-white text-sm mb-1">{benefit.title}</h5>
                  <p className="text-gray-400 text-xs">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Application Process */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Application Process
                </span>
              </h4>
              <p className="text-gray-300">Join our elite contributor network in 4 simple steps</p>
            </div>
            
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {step.title}
                    </h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full group relative overflow-hidden py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Send className="h-5 w-5 mr-3" />
                Submit Your Materials
                <Sparkles className="h-5 w-5 ml-3" />
              </div>
            </button>
          </div>
        </div>

        {/* What We're Looking For */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What We're Looking For
              </span>
            </h3>
            <p className="text-gray-300">Help us build Pakistan's most comprehensive legal education resource library</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: 'Study Notes',
                description: 'Comprehensive notes for any LLB subject or year, handwritten or digital',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: CheckCircle,
                title: 'Solved Papers',
                description: 'Past papers with detailed solutions, explanations, and marking schemes',
                color: 'from-purple-500 to-violet-500'
              },
              {
                icon: Star,
                title: 'Study Guides',
                description: 'Comprehensive guides for LAT, GAT, Judiciary, or specialized legal topics',
                color: 'from-green-500 to-teal-500'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;