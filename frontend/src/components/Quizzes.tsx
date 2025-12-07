import React, { useState } from 'react';
import { Play, Trophy, Clock, Users, ChevronRight, Star, Zap, Brain, Target, Sparkles } from 'lucide-react';

const Quizzes = () => {
  const [selectedCategory, setSelectedCategory] = useState('LAT');

  const quizCategories = [
    {
      name: 'LAT',
      description: 'AI-powered Law Admission Test preparation',
      quizzes: [
        { title: 'General Knowledge - AI Adaptive', questions: 50, time: '45 min', difficulty: 'Easy', participants: 1250, aiFeatures: true },
        { title: 'English Comprehension Pro', questions: 40, time: '35 min', difficulty: 'Medium', participants: 890, aiFeatures: true },
        { title: 'Analytical Reasoning Master', questions: 30, time: '40 min', difficulty: 'Hard', participants: 650, aiFeatures: true },
        { title: 'Current Affairs Pakistan 2024', questions: 25, time: '25 min', difficulty: 'Medium', participants: 1100, aiFeatures: false },
      ],
    },
    {
      name: 'GAT',
      description: 'Smart Graduate Assessment Test practice',
      quizzes: [
        { title: 'Verbal Reasoning AI', questions: 35, time: '40 min', difficulty: 'Medium', participants: 750, aiFeatures: true },
        { title: 'Quantitative Reasoning Pro', questions: 30, time: '45 min', difficulty: 'Hard', participants: 580, aiFeatures: true },
        { title: 'Analytical Writing Smart', questions: 20, time: '60 min', difficulty: 'Medium', participants: 420, aiFeatures: true },
      ],
    },
    {
      name: 'Judiciary',
      description: 'Advanced judicial service examination prep',
      quizzes: [
        { title: 'Constitutional Law Expert', questions: 60, time: '60 min', difficulty: 'Hard', participants: 340, aiFeatures: true },
        { title: 'Criminal Law Mastery', questions: 45, time: '50 min', difficulty: 'Medium', participants: 520, aiFeatures: true },
        { title: 'Civil Procedure Advanced', questions: 40, time: '45 min', difficulty: 'Hard', participants: 280, aiFeatures: true },
        { title: 'Legal Reasoning Pro', questions: 35, time: '40 min', difficulty: 'Medium', participants: 460, aiFeatures: true },
      ],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-500 to-emerald-500';
      case 'Medium': return 'from-yellow-500 to-orange-500';
      case 'Hard': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="quizzes" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-xl rounded-full border border-green-500/30 text-green-300 mb-8">
            <Brain className="h-5 w-5 mr-3" />
            <span className="text-sm font-bold tracking-wider">AI-POWERED ASSESSMENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
              INTERACTIVE
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              QUIZ SYSTEM
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of exam preparation with our AI-powered quiz system featuring adaptive learning and real-time analytics
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {quizCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-2xl shadow-green-500/25 scale-105'
                  : 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 hover:from-gray-700 hover:to-gray-800 border border-gray-700 hover:border-green-500/50'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">{category.name} Quizzes</span>
            </button>
          ))}
        </div>

        {/* Selected Category Info */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              {quizCategories.find(cat => cat.name === selectedCategory)?.name} Preparation
            </span>
          </h3>
          <p className="text-gray-300 text-lg">
            {quizCategories.find(cat => cat.name === selectedCategory)?.description}
          </p>
        </div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {quizCategories
            .find(cat => cat.name === selectedCategory)
            ?.quizzes.map((quiz, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h4 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300 mr-3">
                          {quiz.title}
                        </h4>
                        {quiz.aiFeatures && (
                          <div className="flex items-center px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                            <Sparkles className="h-3 w-3 text-purple-400 mr-1" />
                            <span className="text-xs font-bold text-purple-300">AI</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                        {quiz.questions}
                      </div>
                      <div className="text-gray-500 text-sm">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {quiz.time}
                      </div>
                      <div className="text-gray-500 text-sm">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {quiz.participants}
                      </div>
                      <div className="text-gray-500 text-sm">Taken</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  {quiz.aiFeatures && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {['Adaptive Learning', 'Real-time Analytics', 'Smart Hints'].map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{quiz.participants} students</span>
                    </div>
                    
                    <button className="group/btn relative overflow-hidden px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center">
                        <Play className="h-4 w-4 mr-2" />
                        Start Quiz
                        <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-12 border border-green-500/20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border border-yellow-500/30 text-yellow-300 mb-6">
              <Trophy className="h-5 w-5 mr-3" />
              <span className="text-sm font-bold tracking-wider">ADVANCED FEATURES</span>
            </div>
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Next-Generation Quiz Experience
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered quiz system adapts to your learning style and provides personalized feedback for optimal preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Smart Achievements',
                description: 'Earn AI-verified badges and certificates based on your performance and consistency',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Clock,
                title: 'Adaptive Timing',
                description: 'AI adjusts question difficulty and timing based on your progress and skill level',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Target,
                title: 'Precision Analytics',
                description: 'Get detailed insights into your strengths, weaknesses, and improvement areas',
                color: 'from-purple-500 to-pink-500'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg group-hover:text-green-300 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quizzes;