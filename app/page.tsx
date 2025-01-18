"use client";

import { ArrowRight, Rocket, Satellite, Globe2, ExternalLink, Mail, Menu, X, Users, Phone, Info, FolderKanban, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const teamMembers = [
    {
      name: "Harish Ragavendra Srinivasan",
      role: "Founder & CEO",
      bio: "Harish is the founder of IARRD, with expertise in AI and Data Science. He leads all teams and oversees the strategic direction of the organization’s key projects.",
      photo: "https://i.pinimg.com/736x/42/cb/6f/42cb6fa73677625a053d3dbd7fd213c9.jpg"
    },
    {
      name: "Keerthi Sai",
      role: "Chief Technology Officer (CTO) & R&D Team Lead",
      bio: "Keerthi Sai is the Chief Technology Officer and leads the R&D team at IARRD. With a strong background in data analysis, she drives technological innovation and oversees the development of key projects within the organization.",
      photo: "https://i.pinimg.com/736x/42/cb/6f/42cb6fa73677625a053d3dbd7fd213c9.jpg"
    },
    {
      name: "Aadhi",
      role: "Astronomy Team Lead",
      bio: "Aadhi leads the Astronomy team at IARRD, focusing on developing AI-driven tools to enhance astronomical research and observations. His work advances our understanding of the universe through innovative technologies.",
      photo: "https://i.pinimg.com/736x/42/cb/6f/42cb6fa73677625a053d3dbd7fd213c9.jpg"
    },
    {
      name: "Shravanthi S.",
      role: "Defence Team Lead",
      bio: "Shravanthi leads the Defence team, researching space security and defense technologies, contributing to IARRD’s mission of sustainable space exploration.",
      photo: "https://i.pinimg.com/736x/42/cb/6f/42cb6fa73677625a053d3dbd7fd213c9.jpg"
    },
    {
      name: "Syed Aarish",
      role: "Satellite Team Lead",
      bio: "Syed heads the satellite division, working on the development of CubeSat technologies and satellite payload systems to monitor the Earth and beyond.",
      photo: "https://i.pinimg.com/736x/42/cb/6f/42cb6fa73677625a053d3dbd7fd213c9.jpg"
    },
    {
      name: "Dhiphika.P",
      role: "Social Media Team Lead",
      bio: "Dhiphika manages all outreach efforts, promoting IARRD’s work and securing partnerships through social media and public engagements.",
      photo: "https://i.pinimg.com/736x/42/cb/6f/42cb6fa73677625a053d3dbd7fd213c9.jpg"
    }
  ];

  const projects = [
    {
      name: "PrithiviSat",
      description: "PrithiviSat is an AI-powered CubeSat designed for disaster mitigation, environmental monitoring, and real-time weather forecasting. It is specifically aimed at managing natural disasters and agricultural optimization.",
      progress: 80,
      timeline: "2023-2036",
      image: "https://i.pinimg.com/736x/59/3e/d2/593ed24b756ec62002e7d694deea60a5.jpg"
    },
    {
      name: "Amaran Drone",
      description: "IARRD is advancing its Amaran Drone project to develop cutting-edge drone technology for surveillance, security applications, and disaster management. These drones will provide affordable and efficient solutions for defense and public safety.",
      progress: 45,
      timeline: "2024-2027",
      image: "https://i.pinimg.com/736x/16/b1/b2/16b1b2022ed00c739b1a18fe1d29b496.jpg"
    },
    {
      name: "Astronomy Research Tools",
      description: "IARRD is creating advanced AI-driven tools to enhance astronomical observations and research. These tools aim to provide accessible and innovative solutions for educational and research institutions, supporting the study of celestial phenomena.",
      progress: 15,
      timeline: "2025-2027",
      image: "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMissionClick = () => {
    const missionSection = document.querySelector('#latest-mission');
    missionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = (projectName: string) => {
    setSidebarOpen(false);
    const projectDetails = projects.find(p => p.name === projectName);
    if (projectDetails) {
      alert(`
    Project: ${projectDetails.name}
    Timeline: ${projectDetails.timeline}
    Current Progress: ${projectDetails.progress}%

    Description: ${projectDetails.description}

    Status: Active - Click OK to view detailed documentation.
          `);
        }
      };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus("Please enter an email address");
      return;
    }
    setSubscribeStatus("Thank you for subscribing! Check your email for confirmation.");
    setEmail("");
    setTimeout(() => setSubscribeStatus(""), 3000);
  };

  const handleNavigation = (section: string) => {
    setSidebarOpen(false);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-3">
              <Rocket className="w-6 h-6 text-white" />
              <span className="text-xl font-orbitron text-white">IARRD</span>
            </div>
          </div>
        </div>
      </div>

<aside 
  className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-50 transition-transform transform ${
    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <div className="p-6">
    <div className="flex items-center mb-12">
      <div className="flex items-center gap-3">
        <Rocket className="w-8 h-8 text-white" />
        <span className="text-xl font-orbitron text-white">IARRD</span>
      </div>
    </div>
    <nav className="space-y-6">
      <button
        onClick={() => handleNavigation('About')}
        className="flex items-center gap-4 text-white/80 hover:text-white w-full p-3 rounded-lg hover:bg-white/10 transition-all"
      >
        <Info className="w-5 h-5" />
        <span className="text-lg">About</span>
      </button>
      <button
        onClick={() => handleNavigation('Team')}
        className="flex items-center gap-4 text-white/80 hover:text-white w-full p-3 rounded-lg hover:bg-white/10 transition-all"
      >
        <Users className="w-5 h-5" />
        <span className="text-lg">Team</span>
      </button>
      <button
        onClick={() => handleNavigation('Projects')}
        className="flex items-center gap-4 text-white/80 hover:text-white w-full p-3 rounded-lg hover:bg-white/10 transition-all"
      >
        <FolderKanban className="w-5 h-5" />
        <span className="text-lg">Projects</span>
      </button>
      <button
        onClick={() => handleNavigation('Contact')}
        className="flex items-center gap-4 text-white/80 hover:text-white w-full p-3 rounded-lg hover:bg-white/10 transition-all"
      >
        <Phone className="w-5 h-5" />
        <span className="text-lg">Contact</span>
      </button>
    </nav>
  </div>
</aside>

<button
  className="fixed z-50 top-6 right-6 bg-black/50 p-3 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
  onClick={() => setSidebarOpen(!isSidebarOpen)} 
>
  <Menu className="w-6 h-6 text-white" />
</button>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 overflow-auto pt-16">
        <section className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">Welcome to IARRD </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">Innovating Space, Inspiring Earth</p>
            <button 
              onClick={handleMissionClick}
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 text-lg"
            >
              Latest Missions <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Pioneering Space Exploration</h3>
                <p className="text-gray-400 mb-6">IARRD (Indian Astronomy Rocket Research and Development), founded on May 27, 2023, by Harish Ragavendra Srinivasan, is a trailblazing space technology organization dedicated to advancing space exploration, astronomy, rocket science, and defense technology in India. Our mission is to democratize access to space technologies by making them more sustainable, affordable, and impactful in solving real-world challenges.</p>
                <p className="text-gray-400 mb-6" >At IARRD, we specialize in the development of low-cost satellites, hybrid rocket propulsion systems, AI-powered astronomical research tools, and defense innovations. Through these technologies, we aim to enhance India's space and defense capabilities and make meaningful contributions to the global space and security community.</p>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center gap-2">
                  <h4 className="text-white-200 text-xl font-bold">Vision: </h4>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    
                    To revolutionize space exploration and defense technology by making them affordable, accessible, and sustainable, addressing global challenges through innovative space and defense solutions.
                  </li>
                  <li className="flex items-center gap-2">
                    <h4 className="text-white-200 text-xl font-bold">Mission:</h4>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    We are committed to developing CubeSat missions, hybrid rocket propulsion, AI-powered satellites designed for environmental monitoring, disaster mitigation, educational outreach, and defense applications, thus bringing space technology closer to the community.  
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80" 
                  alt="Space center"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
                <div className="bg-white/10 p-6 rounded-lg mb-6 inline-block">
                  <Rocket className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Astronomy</h3>
                <p className="text-gray-400">Advancing our understanding of the universe with cutting-edge observational tools and AI-driven research methodologies.</p>
              </div>
              <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
                <div className="bg-white/10 p-6 rounded-lg mb-6 inline-block">
                  <Shield className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Defence</h3>
                <p className="text-gray-400">Innovating in advanced defence systems with drone technology and AI solutions for enhanced national security and surveillance.</p>
              </div>
              <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
                <div className="bg-white/10 p-6 rounded-lg mb-6 inline-block">
                  <Globe2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Rocket</h3>
                <p className="text-gray-400">Developing cost-effective and reusable rocket propulsion systems to enable affordable and sustainable space exploration.</p>
              </div>
              <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
                <div className="bg-white/10 p-6 rounded-lg mb-6 inline-block">
                  <Satellite className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Satellite</h3>
                <p className="text-gray-400">Creating innovative CubeSat solutions for environmental monitoring, disaster management, and global connectivity.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Current Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-black/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-white rounded-full h-2 transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{project.timeline}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleLearnMore(project.name)}
                      className="w-full bg-white text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-lg hover:transform hover:scale-105 transition-transform text-center">
                  <div className="mb-6 mx-auto">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white/10">
                      <img 
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="latest-mission" className="relative min-h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Latest Mission</h2>
            <div className="bg-black/80 p-6 sm:p-8 rounded-lg max-w-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">PrithiviSat</h3>
              <p className="text-gray-300 mb-6">PrithiviSat is an AI-powered CubeSat designed for disaster mitigation, environmental monitoring, and real-time weather forecasting.</p>
              <button 
                onClick={() => handleLearnMore("Orbital Mission XR-27")}
                className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                Learn More <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
        

       <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>iarrd.official@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+91 99526 57214</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Globe2 className="w-5 h-5" />
                    <span>Anaicut road, Ranipet-13</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black border border-white/20 px-6 py-3 rounded-lg focus:outline-none focus:border-white"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    Subscribe to Newsletter <Mail className="w-5 h-5" />
                  </button>
                </form>
                {subscribeStatus && (
                  <p className={`mt-4 ${subscribeStatus.includes("Thank you") ? "text-green-400" : "text-red-400"}`}>
                    {subscribeStatus}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}