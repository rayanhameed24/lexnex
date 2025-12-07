import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle, Zap, Users, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-pink-500/30 text-pink-300 mb-8">
            <MessageSquare className="h-5 w-5 mr-3" />
            <span className="text-sm font-bold tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
              CONNECT WITH
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              THE FUTURE
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or want to collaborate? Connect with our AI-powered support system and community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/20">
              <h3 className="text-2xl font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email Support',
                    primary: 'lexnex001@gmail.com',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: MessageSquare,
                    title: 'AI Live Chat',
                    primary: 'Available 24/7',
                    secondary: 'Instant AI responses',
                    color: 'from-green-500 to-teal-500'
                  },
                  {
                    icon: Phone,
                    title: 'Phone Support',
                    primary: '+92-323-1254686',
                    secondary: 'Student Helpline',
                    color: 'from-purple-500 to-violet-500'
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    primary: 'Punjab, Pakistan',
                    color: 'from-orange-500 to-red-500'
                  },
                ].map((contact, index) => (
                  <div key={index} className="group flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-pink-300 transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-gray-300">{contact.primary}</p>
                      <p className="text-gray-400 text-sm">{contact.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Section */}
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 text-pink-300 mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm font-bold">JOIN OUR COMMUNITY</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect & Collaborate</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of law students across Pakistan in our vibrant learning community
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="group relative overflow-hidden px-6 py-4 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 text-green-300 rounded-xl font-semibold hover:from-green-600/30 hover:to-teal-600/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">WhatsApp Group</span>
                </button>
                <button className="group relative overflow-hidden px-6 py-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 text-blue-300 rounded-xl font-semibold hover:from-blue-600/30 hover:to-indigo-600/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Facebook Page</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/20">
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Send us a Message
              </span>
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full inline-block mb-6">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h4>
                <p className="text-gray-300 mb-6">Thank you for reaching out. Our AI system has received your message and will route it to the appropriate team.</p>
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Expected response time: 2-4 hours</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black/50 border border-pink-500/30 rounded-xl text-white focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="contribution">Content Contribution</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="ai-features">AI Features Request</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-black/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full relative overflow-hidden py-4 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                    <Sparkles className="h-5 w-5 ml-3" />
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;