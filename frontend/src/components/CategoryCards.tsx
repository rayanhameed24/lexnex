import React from 'react';
import { BookOpen, Scale, GraduationCap, FileText, BrainCircuit, Users, ArrowRight, Sparkles } from 'lucide-react';

const CategoryCards = () => {
  const categories = [
    {
      title: 'LLB Notes',
      description: 'Complete AI-curated notes for all 5 years of LLB, handmade and academy notes',
      icon: BookOpen,
      color: 'from-cyan-500 to-blue-600',
      items: ['1st Year Complete', '2nd Year Complete', '3rd Year Complete', '4th Year Complete', '5th Year Complete'],
      count: '1,200+ Resources',
    },
    {
      title: 'LAT Preparation',
      description: 'Comprehensive LAT preparation with AI-powered practice tests',
      icon: GraduationCap,
      color: 'from-green-500 to-teal-600',
      items: ['Smart Practice Tests', 'Adaptive Learning', 'Performance Analytics', 'Mock Examinations', 'Success Tracking'],
      count: '800+ Questions',
    },
    {
      title: 'GAT Materials',
      description: 'Advanced GAT preparation with intelligent study paths',
      icon: BrainCircuit,
      color: 'from-purple-500 to-violet-600',
      items: ['Verbal Reasoning', 'Quantitative Analysis', 'Analytical Writing', 'Practice Sessions', 'Score Prediction'],
      count: '600+ Resources',
    },
    {
      title: 'Judiciary Prep',
      description: 'Specialized judiciary preparation with expert-curated content',
      icon: Scale,
      color: 'from-orange-500 to-red-600',
      items: ['Constitutional Law', 'Criminal Procedures', 'Civil Procedures', 'Case Studies', 'Interview Prep'],
      count: '400+ Materials',
    },
    {
      title: 'Past Papers',
      description: 'Extensive collection with AI-powered analysis and predictions',
      icon: FileText,
      color: 'from-teal-500 to-cyan-600',
      items: ['University Papers', 'Board Examinations', 'Competitive Tests', 'Solved Examples', 'Trend Analysis'],
      count: '2,000+ Papers',
    },
    {
      title: 'Community Hub',
      description: 'Connect with Pakistan\'s largest legal education community',
      icon: Users,
      color: 'from-pink-500 to-rose-600',
      items: ['Study Groups', 'Peer Mentoring', 'Expert Sessions', 'Success Stories', 'Career Guidance'],
      count: '10,000+ Members',
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-cyan-500/30 text-cyan-300 mb-8">
            <Sparkles className="h-5 w-5 mr-3" />
            <span className="text-sm font-bold tracking-wider">EXPLORE OUR UNIVERSE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              RESOURCE CATEGORIES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI-powered educational resources designed for the modern law student
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className="w-full group/btn relative overflow-hidden py-4 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-xl font-semibold hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <span>Explore {category.title}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Legal Education?
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of law students who are already experiencing the future of legal education
            </p>
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              <BrainCircuit className="h-6 w-6 mr-3" />
              Start Your Journey
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;