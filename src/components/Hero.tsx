import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo1 from "./assets/LExnex photoo.jpg";
import {
  BookOpen,
  Brain,
  ArrowRight,
  Sparkles,
  Database,
  Target,
  Users,
  Zap,
  Heart,
  Quote,
  Play,
  Trophy,
  Clock,
  Upload,
  CheckCircle,
  Award,
  Send,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Eye,
  Star,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Submit Materials",
    description:
      "Upload your notes, study materials, or educational content through our AI-powered submission system.",
  },
  {
    icon: CheckCircle,
    title: "AI Review Process",
    description:
      "Our advanced AI algorithms review submissions for quality, accuracy, and educational value.",
  },
  {
    icon: Star,
    title: "Get Featured",
    description:
      "Selected materials are featured on our platform with full attribution and contributor recognition.",
  },
  {
    icon: Award,
    title: "Earn Recognition",
    description:
      "Build your academic portfolio and gain recognition in Pakistan's legal education community.",
  },
];

const benefits = [
  {
    icon: Trophy,
    title: "Digital Certificates",
    description: "Receive verified digital certificates for your contributions",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Community Status",
    description: "Gain elevated status in our exclusive contributor community",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Get early access to new features and premium content",
    color: "from-purple-500 to-pink-500",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "from-green-500 to-emerald-500";
    case "Medium":
      return "from-yellow-500 to-orange-500";
    case "Hard":
      return "from-red-500 to-pink-500";
    default:
      return "from-gray-500 to-gray-600";
  }
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resources = {
    "LLB 1st Year": [
      {
        name: "LAT NOTES",
        type: "EXCLUSIVE NOTES",
        downloads: 1250,
        rating: 4.8,
        size: "2.5 MB",
      },
      {
        name: "LLB NOTES",
        type: "EXCLUSIVE NOTES",
        downloads: 980,
        rating: 4.7,
        size: "3.2 MB",
      },
      {
        name: "GAT NOTES",
        type: "EXCLUSIVE NOTES",
        downloads: 1100,
        rating: 4.6,
        size: "1.8 MB",
      },
      {
        name: "JUDICIARY NOTES",
        type: "EXCLUSIVE NOTES",
        downloads: 850,
        rating: 4.5,
        size: "2.1 MB",
      },
    ],
  };
  const getTypeColor = (type: string) => {
    const colors = {
      "Handmade Notes": "from-cyan-500 to-blue-600",
      "Academy Notes": "from-purple-500 to-pink-600",
      "Past Papers": "from-green-500 to-teal-600",
      "Guess Papers": "from-orange-500 to-red-600",
      "Study Guide": "from-indigo-500 to-purple-600",
      "Practice Tests": "from-teal-500 to-cyan-600",
      "Solved Papers": "from-pink-500 to-rose-600",
      "Monthly Updates": "from-yellow-500 to-orange-600",
      "Complete Guide": "from-violet-500 to-purple-600",
      "Practice Sets": "from-emerald-500 to-green-600",
      "Sample Essays": "from-blue-500 to-indigo-600",
      "Comprehensive Notes": "from-red-500 to-pink-600",
      "Case Studies": "from-cyan-500 to-teal-600",
      "Practice Questions": "from-purple-500 to-violet-600",
    };
    return colors[type as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize legal education in Pakistan through cutting-edge technology and comprehensive resources.",
    },
    {
      icon: Heart,
      title: "Free Access",
      description:
        "Democratizing legal education by providing world-class resources completely free for all students.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built by students, for students. A collaborative ecosystem of knowledge sharing and growth.",
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description:
        "Leveraging artificial intelligence to personalize learning experiences and optimize study paths.",
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? "#06b6d4" : "#8b5cf6",
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="mt-[100px] relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10"></div>

      {/* 3D Grid Effect */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            transform: "perspective(1000px) rotateX(60deg)",
            transformOrigin: "center bottom",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* AI Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-cyan-500/30 text-cyan-300 mb-8 group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"></div>
            <Brain className="h-5 w-5 mr-3 animate-pulse" />
            <span className="text-sm font-bold tracking-wider">
              AI-POWERED LEGAL EDUCATION PLATFORM
            </span>
            <Sparkles className="h-4 w-4 ml-3 text-purple-400" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-pulse">
              FUTURE OF
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
              LEGAL EDUCATION
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10 animate-pulse"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the next generation of legal education with our
            comprehensive AI-powered platform. From LLB notes to LAT
            preparation, everything you need for legal excellence in Pakistan.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Link to="/resources">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Database className="h-6 w-6 mr-3" />
                EXPLORE RESOURCES
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </Link>

          <Link to="/quizzes">
            <button className="group relative px-10 py-5 bg-black/50 backdrop-blur-xl text-cyan-300 rounded-2xl font-bold text-lg border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Zap className="h-6 w-6 mr-3" />
                START QUIZ
              </div>
            </button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "5", label: "YEARS COVERAGE", icon: Target },
            { value: "1000+", label: "RESOURCES", icon: Database },
            { value: "500+", label: "PAST PAPERS", icon: BookOpen },
            { value: "FREE", label: "ACCESS", icon: Sparkles },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-bold tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[60px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                PIONEERING THE FUTURE
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're not just an educational platform – we're architects of
              Pakistan's legal education revolution
            </p>
          </div>
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
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {Object.entries(resources).map(([category, items]) => {
              if (selectedYear !== "all" && selectedYear !== category)
                return null;

              return (
                <div key={category} className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Academic Resources
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((resource, index) => {
                      if (
                        selectedSubject !== "all" &&
                        selectedSubject !== resource.type
                      )
                        return null;
                      if (
                        searchTerm &&
                        !resource.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                        return null;

                      return (
                        <div
                          key={index}
                          className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          <div className="relative">
                            {/* Resource Type Badge */}
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getTypeColor(
                                resource.type
                              )} mb-4`}
                            >
                              {resource.type}
                            </div>

                            {/* Resource Name */}
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                              {resource.name}
                            </h4>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                              <div className="text-center">
                                <div className="text-cyan-400 font-bold">
                                  {resource.downloads}
                                </div>
                                <div className="text-gray-500">Downloads</div>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center justify-center text-yellow-400">
                                  <Star className="h-4 w-4 mr-1 fill-current" />
                                  {resource.rating}
                                </div>
                                <div className="text-gray-500">Rating</div>
                              </div>
                              <div className="text-center">
                                <div className="text-purple-400 font-bold">
                                  {resource.size}
                                </div>
                                <div className="text-gray-500">Size</div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3">
                              <Link
                                to="/resources"
                                className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group/btn"
                              >
                                View More
                              </Link>
                              <button className="px-4 py-3 bg-black/50 border border-cyan-500/30 text-cyan-300 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                                <Eye className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 mt-9 mb-9 backdrop-blur-xl rounded-3xl p-12 border border-green-500/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border border-yellow-500/30 text-yellow-300 mb-6">
                <Trophy className="h-5 w-5 mr-3" />
                <span className="text-sm font-bold tracking-wider">
                  ADVANCED FEATURES
                </span>
              </div>
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Next-Generation Quiz Experience
                </span>
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI-powered quiz system adapts to your learning style and
                provides personalized feedback for optimal preparation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Trophy,
                  title: "LAT Quizzes",
                  description: "Step into the world of Law",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Clock,
                  title: "GAT Quizzes",
                  description: "Advance your legal Aptitude",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Target,
                  title: "Judiciary Quizzes",
                  description: "Test knowledge for the Bench",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group text-center bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg group-hover:text-green-300 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Content */}
              <div className="mt-9">
                <h3 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Contribute to Legal Excellence
                  </span>
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Have valuable notes, solved papers, or study materials? Share
                  them with thousands of law students across Pakistan and make a
                  meaningful impact in their academic journey through our
                  AI-powered platform.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: CheckCircle,
                      title: "Quality Materials Welcomed",
                      description:
                        "We accept handwritten notes, typed documents, solved papers, and comprehensive study guides",
                    },
                    {
                      icon: Star,
                      title: "AI-Powered Recognition",
                      description:
                        "Our AI system ensures your contributions get maximum visibility and proper attribution",
                    },
                    {
                      icon: Award,
                      title: "Build Your Legacy",
                      description:
                        "Create a lasting impact on Pakistan's legal education landscape",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-left font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-left text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
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
                      <div
                        className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${benefit.color} mb-3`}
                      >
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                      <h5 className="font-bold text-white text-sm mb-1">
                        {benefit.title}
                      </h5>
                      <p className="text-gray-400 text-xs">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Application Process */}
              <div className="bg-gradient-to-br mt-12 from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
                <div className="text-center mb-6">
                  <h4 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Application Process
                    </span>
                  </h4>
                  <p className="text-gray-300">
                    Join our elite contributor network in 4 simple steps
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="relative">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-left font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {step.title}
                        </h5>
                        <p className="text-left text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
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
                  <h3 className="text-2xl font-bold text-white">
                    Founder's Message
                  </h3>
                  <p className="text-left text-cyan-400">Vision & Leadership</p>
                </div>
              </div>

              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "I created this website with the purpose of contributing
                something meaningful to society. Many students struggle to find
                proper notes and guidance in law, so I wanted to build a space
                where everything is available free of cost and easy to access. I
                hope this effort makes the learning journey smoother and opens
                the way for more students to achieve their goals in law."
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"></div>
                <div>
                  <div className="text-white font-bold">ALIAN HAMEED</div>
                  <div className="text-left text-gray-400 text-sm">Founder</div>
                </div>
              </div>
            </div>

            {/* Video Introduction */}
            <div className="relative bg-black backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 group hover:border-cyan-400/50 transition-all duration-500">
              <div className=" bg-gradient-to-br from-cyan-900/20 to-purple-1000/20 flex items-center justify-center relative overflow-hidden">
                {/* Image Instead of Video */}
                <img
                  src={Logo1}
                  alt="Platform Introduction"
                  className="w-80px h-[450px]  transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}

                {/* Text Over Image */}
                <div className="absolute inset-0 flex items-center justify-center"></div>
              </div>
            </div>
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

                <div className="space-y-6 text-left">
                  {[
                    {
                      icon: Mail,
                      title: "Email Support",
                      primary: "lexnex001@gmail.com",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: MessageSquare,
                      title: "AI Live Chat",
                      primary: "Available 24/7",
                      secondary: "Instant AI responses",
                      color: "from-green-500 to-teal-500",
                    },
                    {
                      icon: Phone,
                      title: "Phone Support",
                      primary: "+92-323-1254686",
                      secondary: "Student Helpline",
                      color: "from-purple-500 to-violet-500",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      primary: "Punjab, Pakistan",
                      secondary: "Serving nationwide",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-4"
                    >
                      <div
                        className={`bg-gradient-to-r ${contact.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 group-hover:text-pink-300 transition-colors duration-300">
                          {contact.title}
                        </h4>
                        <p className="text-gray-300">{contact.primary}</p>
                        <p className="text-gray-400 text-sm">
                          {contact.secondary}
                        </p>
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
                    <span className="text-sm font-bold">
                      JOIN OUR COMMUNITY
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Connect & Collaborate
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Join thousands of law students across Pakistan in our
                    vibrant learning community
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
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. Our AI system has received your
                    message and will route it to the appropriate team.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm">
                      Expected response time: 2-4 hours
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
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
                      <label
                        htmlFor="email"
                        className="text-left block text-sm font-medium text-gray-300 mb-2"
                      >
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
                    <label
                      htmlFor="subject"
                      className=" text-left block text-sm font-medium text-gray-300 mb-2"
                    >
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
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="ai-features">AI Features Request</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-left block text-sm font-medium text-gray-300 mb-2"
                    >
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
      </div>
    </section>
  );
};

export default Hero;
