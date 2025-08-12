"use client";

import { ArrowRight, Rocket, Satellite, Globe2, Anchor, ExternalLink, Mail, Menu, Users, Phone, Info, FolderKanban, Shield } from "lucide-react";
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
      bio: "Harish is a self-taught innovator in satellites, rocketry, and defense technology. As the founder of IARRD, he leads strategic initiatives to drive advancements in space exploration and security, fostering global collaboration and cutting-edge innovation.",
      photo: "https://i.pinimg.com/736x/a6/18/3a/a6183a72cb5248dfae42cbacb890d2e0.jpg"
    },
    {
      name: "Keerthi Sai",
      role: "CTO & R&D Team Lead",
      bio: "Keerthi Sai is the Chief Technology Officer and leads the R&D team at IARRD. With a strong background in data analysis, she drives technological innovation and oversees the development of key projects within the organization.",
      photo: "https://i.pinimg.com/736x/65/2a/1c/652a1ca38f31a529c63740e6eda5e156.jpg"
    },
    {
      name: "Goutham GV",
      role: "CFO & Fund & Finance Lead",
      bio: "Goutham GV serves as the Chief Financial Officer at IARRD, managing all financial strategies and fundraising initiatives. With a keen focus on budgeting, resource allocation, and funding operations, he ensures financial stability while supporting innovation and sustainable growth.",
      photo: "https://i.pinimg.com/736x/af/c7/c1/afc7c1f038e75d5459e2050669aa4d0c.jpg"
    },
    {
  name: "Sahana Raga Sri Vk",
  role: "CBDE & Creative Head at Social Media Team",
  bio: "Sahana Raga Sri Vk leads IARRD’s business and creative efforts as Chief Business Executive and Creative Head. She manages outreach, collaborations, and social media strategy, helping the organization grow its presence while staying true to its vision.",
  photo: "https://i.pinimg.com/736x/27/0a/32/270a32a411438222f0a49fe35fb8eb90.jpg"
},
    {
      name: "Aadhi",
      role: "Astronomy Team Lead",
      bio: "Aadhi leads the Astronomy team at IARRD, focusing on developing AI-driven tools to enhance astronomical research and observations. His work advances our understanding of the universe through innovative technologies.",
      photo: "https://i.pinimg.com/736x/85/64/cf/8564cf68c67b454d3d5ab66459b3c26a.jpg"
    },
    {
      name: "HemaGiri Raj",
      role: "Defence Team Lead",
      bio: "Hema Giri leads the Defence team, researching space security and defense technologies, contributing to IARRD’s mission of sustainable space exploration.",
      photo: "https://i.pinimg.com/736x/97/68/49/976849146979e50a1aeeceb8b5af2ec6.jpg"
    },
    {
      name: "Sharan Murali",
      role: "Satellite Team Lead",
      bio: "Sharan heads the satellite division, working on the development of CubeSat technologies and satellite payload systems to monitor the Earth and beyond.",
      photo: "https://i.pinimg.com/736x/6c/c5/71/6cc57192e584bff418a87a3f9653534c.jpg"
    },
    {
      name: "Jai Suruthi",
      role: "Social Media Team Lead",
      bio: "Suruthi manages all outreach efforts, promoting IARRD’s work and securing partnerships through social media and public engagements.",
      photo: "https://i.pinimg.com/736x/2b/14/3d/2b143d81b9cdbe67fca5e22132ec97f2.jpg"
    },
    {
      name: "Mabasha",
      role: "Startup & Business Strategy Mentor",
      bio: "Mabasha guides IARRD in startup management, funding, and operations, helping the organization scale effectively. His expertise supports IARRD’s growth in space technology and defense innovation.",
      photo: "https://i.pinimg.com/736x/fb/56/bf/fb56bfb3fa43a38b942af3ef84f90a30.jpg"
    }
  ];

  const projects = [
    {
      name: "PrithiviSat",
      description: "PrithiviSat is an AI-powered CubeSat designed for disaster mitigation, environmental monitoring, and real-time weather forecasting. It is specifically aimed at managing natural disasters and agricultural optimization.",
      progress: 80,
      timeline: "2023-2026",
      image: "https://i.pinimg.com/736x/59/3e/d2/593ed24b756ec62002e7d694deea60a5.jpg"
    },
    {
      name: "IRAI-Q2",
      description: "IARRD is advancing its IRAI-Q2 Drone project to develop cutting-edge drone technology for surveillance, security applications, and disaster management. These drones will provide affordable and efficient solutions for defense and public safety.",
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
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
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

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
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
    <>
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
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-50 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
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
              aria-label="Navigate to About section"
            >
              <Info className="w-5 h-5" />
              <span className="text-lg">About</span>
            </button>
            <button
              onClick={() => handleNavigation('Projects')}
              className="flex items-center gap-4 text-white/80 hover:text-white w-full p-3 rounded-lg hover:bg-white/10 transition-all"
              aria-label="Navigate to Projects section"
            >
              <FolderKanban className="w-5 h-5" />
              <span className="text-lg">Projects</span>
            </button>
            <button
              onClick={() => handleNavigation('Team')}
              className="flex items-center gap-4 text-white/80 hover:text-white w-full p-3 rounded-lg hover:bg-white/10 transition-all"
              aria-label="Navigate to Team section"
            >
              <Users className="w-5 h-5" />
              <span className="text-lg">Team</span>
            </button>
            <button
              onClick={() => handleNavigation('Contact')}
              className="flex items-center gap-4 text-white/80 hover:text-white w-full p-3 rounded-lg hover:bg-white/10 transition-all"
              aria-label="Navigate to Contact section"
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
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/HeroVideo.mp4"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Welcome to IARRD
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl text-white">
            Innovating Space, Inspiring Earth
          </p>
          <button
            onClick={handleMissionClick}
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 text-lg"
            aria-label="View latest missions"
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
              <h3 className="text-2xl font-bold mb-4">Pioneering Space & Defense Innovations</h3>
              <p className="text-gray-400 mb-6">IARRD (Indian Astronomy Rocket Research and Development), founded on May 27, 2023, by Harish Ragavendra Srinivasan, is a visionary space technology organization dedicated to advancing space exploration, astronomy, rocketry, defense, and marine technology in India. Our mission is to make cutting-edge technologies affordable, sustainable, and impactful in solving real-world challenges.</p>
              <p className="text-gray-400 mb-6">At IARRD, we specialize in:
                • Low-cost CubeSats for environmental monitoring and disaster management
                • Hybrid rocket propulsion systems for cost-effective space access
                • AI-powered astronomical research tools to enhance space observations
                • Advanced defense systems, including drone technology and surveillance solutions
                • Marine exploration innovations for underwater research and defense applications</p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-2">
                  <h4 className="text-white text-xl font-bold">Vision:</h4>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  To revolutionize space, defense, and marine technology by making them affordable, accessible, and sustainable, driving global progress through innovation.
                </li>
                <li className="flex items-center gap-2">
                  <h4 className="text-white text-xl font-bold">Mission:</h4>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  We are committed to:
                  Developing next-generation CubeSat missions
                  Advancing hybrid rocket propulsion for cost-effective launches
                  Integrating AI-powered satellites for environmental & defense applications
                  Enhancing marine technology for research and security
                  Promoting education & collaboration to empower the next generation of innovators
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80"
                alt="IARRD space research facility"
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
                <Globe2 className="w-12 h-12" />
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
                <Anchor className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Marine</h3>
              <p className="text-gray-400">Exploring and protecting ocean ecosystems with AI-driven research, autonomous underwater vehicles, and innovative marine technology for sustainable resource management.</p>
            </div>
            <div className="text-center cursor-pointer hover:transform hover:scale-105 transition-transform">
              <div className="bg-white/10 p-6 rounded-lg mb-6 inline-block">
                <Rocket className="w-12 h-12" />
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
                    aria-label={`View details for ${project.name}`}
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
                      alt={`Portrait of ${member.name}, ${member.role}`}
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
              onClick={() => handleLearnMore("PrithiviSat")}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              aria-label="Learn more about PrithiviSat"
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
                  <span>+91 8903272879</span>
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
                  aria-label="Email address for newsletter subscription"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  aria-label="Subscribe to newsletter"
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
    </>
  );
}