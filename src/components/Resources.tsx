import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Download,
  Eye,
  Star,
  Filter,
  Search,
  ChevronRight,
} from "lucide-react";

const Resources = () => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const resources = {
    "LLB 1st Year": [
      {
        name: "LLB Part I",
        type: "Handmade Notes",
        downloads: 1250,
        rating: 4.8,
        link: "https://drive.google.com/drive/folders/1O6xUtbu7ECF5EE4orlHIfLpQ6wvhVGqG?usp=sharing", // <--- apna link
      },
      // { name: 'Legal System of Pakistan', type: 'Academy Notes', downloads: 980, rating: 4.7, size: '3.2 MB' },
      // { name: 'English & Communication Skills', type: 'Past Papers', downloads: 1100, rating: 4.6, size: '1.8 MB' },
      // { name: 'Pakistan Studies', type: 'Guess Papers', downloads: 850, rating: 4.5, size: '2.1 MB' },
    ],
    "LLB 2nd Year": [
      {
        name: "LLB Part II",
        type: "Handmade Notes",
        downloads: 1450,
        rating: 4.9,
         link: "https://drive.google.com/drive/folders/10UFFIUAZz4MD2JlBHW0F_Q_kSZexr3KW?usp=sharing", // <--- apna link
      },
      // { name: 'Law of Contract', type: 'Academy Notes', downloads: 1200, rating: 4.8, size: '3.8 MB' },
      // { name: 'Law of Tort', type: 'Past Papers', downloads: 950, rating: 4.6, size: '2.9 MB' },
      // { name: 'Criminal Law', type: 'Handmade Notes', downloads: 1350, rating: 4.7, size: '3.5 MB' },
    ],
    "LLB 3rd Year": [
      {
        name: "LLB Part III",
        type: "Academy Notes",
        downloads: 1100,
        rating: 4.7,
         link: "https://drive.google.com/drive/folders/1p0Tz-lmpqGdsiaiV6B6bX-Mp-tWojFE7?usp=sharing", // <--- apna link
      },
      // { name: 'Family Law', type: 'Handmade Notes', downloads: 1300, rating: 4.8, size: '2.8 MB' },
      // { name: 'Property Law', type: 'Past Papers', downloads: 900, rating: 4.5, size: '3.4 MB' },
      // { name: 'Administrative Law', type: 'Guess Papers', downloads: 750, rating: 4.4, size: '2.6 MB' },
    ],
    "LLB 4th Year": [
      {
        name: "LLB Part IV",
        type: "Academy Notes",
        downloads: 950,
        rating: 4.6,
         link: "https://drive.google.com/drive/folders/1uxgGv5QiaopHN8HvBhONgq05G8O6ii4m?usp=sharing", // <--- apna link
      },
      // { name: 'Evidence Law', type: 'Handmade Notes', downloads: 1150, rating: 4.7, size: '3.0 MB' },
      // { name: 'Jurisprudence', type: 'Past Papers', downloads: 800, rating: 4.5, size: '2.4 MB' },
      // { name: 'Banking Law', type: 'Academy Notes', downloads: 650, rating: 4.3, size: '2.2 MB' },
    ],
    "LLB 5th Year": [
      {
        name: "LLB Part V",
        type: "Handmade Notes",
        downloads: 1000,
        rating: 4.8,
         link: "https://drive.google.com/drive/folders/1zM0RPfxhDES3VO4WJI4BkdsfLx3NhBDA?usp=sharing", // <--- apna link
      },
      // { name: 'Intellectual Property Law', type: 'Academy Notes', downloads: 750, rating: 4.6, size: '3.3 MB' },
      // { name: 'Environmental Law', type: 'Past Papers', downloads: 600, rating: 4.4, size: '2.1 MB' },
      // { name: 'Cyber Law', type: 'Guess Papers', downloads: 550, rating: 4.2, size: '1.9 MB' },
    ],
    "LAT Preparation": [
      { name: "LAT Notes", type: "Study Guide", downloads: 2100, rating: 4.9, link: "https://drive.google.com/drive/folders/1zWYilMQzPU8FS_Kr-yEFXvCow4HpVqTY?usp=sharing" }// <--- apna link },
       
      // { name: 'English Comprehension', type: 'Practice Tests', downloads: 1800, rating: 4.8, size: '3.8 MB' },
      // { name: 'Analytical Reasoning', type: 'Solved Papers', downloads: 1650, rating: 4.7, size: '4.1 MB' },
      // { name: 'Current Affairs Pakistan', type: 'Monthly Updates', downloads: 1900, rating: 4.8, size: '2.9 MB' },
    ],
    "GAT Materials": [
      {
        name: "GAT Notes",
        type: "Complete Guide",
        downloads: 1400,
        rating: 4.7,
         link: "https://drive.google.com/file/d/abcd123/view", // <--- apna link
      },
      // { name: 'Quantitative Reasoning', type: 'Practice Sets', downloads: 1200, rating: 4.6, size: '4.3 MB' },
      // { name: 'Analytical Writing', type: 'Sample Essays', downloads: 950, rating: 4.5, size: '2.8 MB' },
    ],
    "Judiciary Preparation": [
      {
        name: "Judiciary Notes",
        type: "Comprehensive Notes",
        downloads: 800,
        rating: 4.8,
        link: "https://drive.google.com/file/d/abcd123/view", // <--- apna link
      },
      // { name: 'Criminal Procedure Code', type: 'Case Studies', downloads: 650, rating: 4.6, size: '4.8 MB' },
      // { name: 'Civil Procedure Code', type: 'Practice Questions', downloads: 700, rating: 4.7, size: '3.9 MB' },
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

  return (
    <section id="resources" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-cyan-500/30 text-cyan-300 mb-8">
            <BookOpen className="h-5 w-5 mr-3" />
            <span className="text-sm font-bold tracking-wider">
              COMPREHENSIVE RESOURCE LIBRARY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              DIGITAL RESOURCES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access our extensive collection of study materials, notes, and
            preparation resources for all legal education needs
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300 appearance-none"
                >
                  <option value="all">All Categories</option>
                  {Object.keys(resources).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300 appearance-none"
                >
                  <option value="all">All Types</option>
                  <option value="Handmade Notes">Handmade Notes</option>
                  <option value="Academy Notes">Academy Notes</option>
                  <option value="Past Papers">Past Papers</option>
                  <option value="Guess Papers">Guess Papers</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="space-y-12">
          {Object.entries(resources).map(([category, items]) => {
            if (selectedYear !== "all" && selectedYear !== category)
              return null;

            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                  <span className="text-gray-400 text-sm">
                    {items.length} resources
                  </span>
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
                              <div className="text-purple-400 font-bold"></div>
                              <div className="text-gray-500"></div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <a
                              href={resource.link}
  target="_blank"
  rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group/btn"
                            >
                              Click Here
                            </a>
{/* 
                            <button className="px-4 py-3 bg-black/50 border border-cyan-500/30 text-cyan-300 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                              <Eye className="h-4 w-4" />
                            </button> */}
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

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 text-cyan-300 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all duration-300">
            Load More Resources
            <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
