import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import { SignatureEffect } from '@/components/effects/SignatureEffect';
import { SignatureInteraction } from '@/components/effects/SignatureInteraction';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#030303] text-white font-sans overflow-x-hidden cursor-crosshair min-h-screen selection:bg-purple-600 selection:text-white">
      {/* Global Styles & Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&family=Syne:wght@400;700;800&display=swap');
        
        :root {
          --cursor-size: 20px;
        }
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-syne {
          font-family: 'Syne', sans-serif;
        }
        
        /* Noise Texture Overlay */
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 50;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #6d28d9;
        }

        /* Utilities */
        .text-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
        .text-outline:hover {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
          color: transparent;
        }

        .hover-card-zoom {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .group:hover .hover-card-zoom {
          transform: scale(1.05);
        }

        .glitch-hover:hover {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
          color: #d8b4fe;
        }
        @keyframes glitch {
          0% { transform: translate(0) } 
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
      `}</style>

      {/* Noise Texture */}
      <div className="noise-overlay"></div>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-40 top-0 left-0 px-6 py-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/50' : 'mix-blend-difference'}`}
      >
        <div className="text-2xl font-bold font-syne tracking-tighter uppercase tracking-widest">
          Eclipsis<span className="text-purple-500">.</span>
        </div>
        <div className="hidden md:flex space-x-12 text-sm font-semibold tracking-widest uppercase">
          {['The Rooms', 'Patio & Bar', 'Lineup'].map((item, i) => (
            <a 
              key={i} 
              href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
              className="hover:text-purple-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <a href="#reserve" className="border border-white/20 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-bold backdrop-blur-sm">
          Reserve Table
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2670&auto=format&fit=crop" 
            alt="Nightclub Crowd" 
            className="w-full h-full object-cover opacity-60 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/80 via-transparent to-[#030303]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-4">
          <Reveal width="100%">
            <p className="text-purple-400 tracking-[0.3em] text-xs uppercase font-bold mb-4 animate-bounce mx-auto">
              Dallas, TX • Deep Ellum
            </p>
          </Reveal>
          <Reveal width="100%">
            <h1 className="text-7xl md:text-[9rem] font-syne font-extrabold leading-[0.85] tracking-tighter mb-6 uppercase mix-blend-overlay">
              Eclipsis<br/>
              <SignatureEffect effect="outline">Nightlife</SignatureEffect>
            </h1>
          </Reveal>
          <Reveal width="100%">
            <p className="text-neutral-400 max-w-lg mx-auto text-lg md:text-xl font-light leading-relaxed">
              A multi-sensory sanctuary featuring 5 distinct sonic environments, an open-air skyline patio, and the city's most exclusive mixology.
            </p>
          </Reveal>
          
          <Reveal className="mt-12">
            <a href="#rooms" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-none hover:bg-purple-600 hover:border-purple-600">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative uppercase tracking-widest text-sm">Explore The Venue</span>
            </a>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </header>

      {/* Concept Text */}
      <section className="py-24 px-6 md:px-12 bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-syne font-bold leading-tight max-w-4xl">
              Forget what you know about the night. <span className="text-purple-500">ECLIPSIS</span> is an ecosystem of sound, designed to break the monotony of the Dallas scene.
            </h2>
          </Reveal>
          <div className="flex justify-end mt-12">
            <Reveal>
              <p className="text-neutral-500 max-w-md text-sm uppercase tracking-widest border-l border-neutral-800 pl-6">
                Located in the heart of the arts district. Strict dress code. No cameras on the dance floor. Experience the moment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The 5 Rooms Grid */}
      <section id="rooms" className="py-24 px-6 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
          <Reveal width="100%">
            <h3 className="text-5xl md:text-7xl font-syne font-bold uppercase text-white">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Five</span> Realms
            </h3>
          </Reveal>
          <p className="hidden md:block text-neutral-500 uppercase tracking-widest text-xs mb-2">Select a room to preview</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">
          
          {/* Room 1: Main Stage (Large) */}
          <div className="md:col-span-8 md:row-span-2">
            <Reveal className="h-full w-full">
              <div className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer border border-white/5">
                <img src="https://images.unsplash.com/photo-1574391884720-385e6e28266b?q=80&w=1500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover hover-card-zoom grayscale group-hover:grayscale-0 transition-all duration-700" alt="Main Stage" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-xs text-purple-400 font-bold uppercase tracking-[0.2em] mb-2">Capacity: 1200</div>
                  <h4 className="text-5xl font-syne font-bold uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-500">The Void</h4>
                  <p className="mt-4 text-neutral-300 max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    EDM, House, and Top 40. The beating heart of Eclipsis featuring a suspended CO2 grid and 40ft LED wall.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Room 2: Techno (Tall) */}
          <div className="md:col-span-4 md:row-span-1">
            <Reveal className="h-full w-full">
              <div className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer border border-white/5">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover hover-card-zoom grayscale group-hover:grayscale-0 transition-all duration-700" alt="Techno Room" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-3xl font-syne font-bold uppercase">Basement</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Berlin Techno / Industrial</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Room 3: Hip Hop (Square) */}
          <div className="md:col-span-4 md:row-span-1">
            <Reveal className="h-full w-full">
              <div className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer border border-white/5">
                <img src="https://images.unsplash.com/photo-1621319253406-b51c5c6fb6c0?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover hover-card-zoom grayscale group-hover:grayscale-0 transition-all duration-700" alt="Red Room" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-black/40 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-3xl font-syne font-bold uppercase">Red Room</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Hip-Hop / R&B</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Room 4: Latin (Square) */}
          <div className="md:col-span-6 md:row-span-1 h-64 md:h-auto">
            <Reveal className="h-full w-full">
              <div className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer border border-white/5">
                <img src="https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover hover-card-zoom grayscale group-hover:grayscale-0 transition-all duration-700" alt="Latin" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-3xl font-syne font-bold uppercase">Havana</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Reggaeton / Latin House</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Room 5: Speakeasy (Square) */}
          <div className="md:col-span-6 md:row-span-1 h-64 md:h-auto">
            <Reveal className="h-full w-full">
              <div className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer border border-white/5">
                <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover hover-card-zoom grayscale group-hover:grayscale-0 transition-all duration-700" alt="Speakeasy" />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-3xl font-syne font-bold uppercase">The Library</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mt-1">Members Only / Jazz / Vinyl</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Patio & Bar Split Section */}
      <section id="features" className="relative bg-black text-white">
        {/* Onyx Bar */}
        <div className="flex flex-col md:flex-row h-auto md:h-screen">
          <div className="w-full md:w-1/2 relative group overflow-hidden border-r border-white/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60"></div>
            <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-24 bg-black/40 group-hover:bg-black/20 transition-all">
              <Reveal>
                <SignatureEffect effect="glitch">
                  <h3 className="text-5xl font-syne font-bold mb-4">ONYX BAR</h3>
                </SignatureEffect>
              </Reveal>
              <Reveal>
                <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  Molecular mixology meets high-speed service. Our 60ft monolithic black marble bar serves signature infusions you won't find anywhere else in Texas.
                </p>
              </Reveal>
              <a href="#" className="text-xs uppercase tracking-widest border-b border-purple-500 pb-1 w-max hover:text-purple-400">View Menu</a>
            </div>
          </div>
          {/* Skyline Patio */}
          <div className="w-full md:w-1/2 relative group overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519671482538-518b48add96e?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60"></div>
            <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-24 bg-black/40 group-hover:bg-black/20 transition-all">
              <div className="absolute top-12 right-12 border border-white px-3 py-1 text-[10px] uppercase rounded-full">Open Air</div>
              <Reveal>
                <SignatureEffect effect="glitch">
                  <h3 className="text-5xl font-syne font-bold mb-4">SKYLINE PATIO</h3>
                </SignatureEffect>
              </Reveal>
              <Reveal>
                <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  Escape the intensity. 3,000 sq ft of open-air luxury with panoramic views of the Dallas skyline, fire pits, and ambient house vibes.
                </p>
              </Reveal>
              <a href="#" className="text-xs uppercase tracking-widest border-b border-purple-500 pb-1 w-max hover:text-purple-400">Book Cabana</a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <div className="bg-purple-600 text-black overflow-hidden py-4">
        <SignatureInteraction type="marquee">
          <span className="text-4xl font-syne font-black mx-8 uppercase">Next Event: FRIDAY 13TH / DJ SNAKE / 10PM</span>
          <span className="text-4xl font-syne font-black mx-8 uppercase">//</span>
          <span className="text-4xl font-syne font-black mx-8 uppercase">RESIDENT: ALESSO / SATURDAY</span>
          <span className="text-4xl font-syne font-black mx-8 uppercase">//</span>
          <span className="text-4xl font-syne font-black mx-8 uppercase">LADIES NIGHT THURSDAYS</span>
          <span className="text-4xl font-syne font-black mx-8 uppercase">//</span>
        </SignatureInteraction>
      </div>

      {/* Footer / CTA */}
      <footer id="reserve" className="bg-[#030303] pt-32 pb-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-syne font-bold mb-8 leading-none">
              GET ON<br/><span className="text-purple-500">THE LIST</span>
            </h2>
            <form className="space-y-6 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600 font-syne uppercase" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="FIRST NAME" className="w-full bg-transparent border-b border-neutral-700 py-4 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600 font-syne uppercase" />
                <input type="text" placeholder="LAST NAME" className="w-full bg-transparent border-b border-neutral-700 py-4 text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-neutral-600 font-syne uppercase" />
              </div>
              <button className="mt-8 px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300 w-full md:w-auto">
                Submit Request
              </button>
            </form>
          </Reveal>

          <Reveal className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8 text-sm text-neutral-400 font-light leading-7">
              <div>
                <strong className="block text-white uppercase tracking-widest mb-4 font-syne">Location</strong>
                2900 Main St<br/>
                Dallas, TX 75226<br/>
                Deep Ellum District
              </div>
              <div>
                <strong className="block text-white uppercase tracking-widest mb-4 font-syne">Hours</strong>
                Thu-Sat: 10pm - 4am<br/>
                Sun: 4pm - 12am<br/>
                Mon-Wed: Private Events
              </div>
              <div>
                <strong className="block text-white uppercase tracking-widest mb-4 font-syne">Contact</strong>
                vip@eclipsis.com<br/>
                (214) 555-0199
              </div>
              <div>
                <strong className="block text-white uppercase tracking-widest mb-4 font-syne">Socials</strong>
                <a href="#" className="hover:text-purple-400 block">Instagram</a>
                <a href="#" className="hover:text-purple-400 block">TikTok</a>
                <a href="#" className="hover:text-purple-400 block">Twitter</a>
              </div>
            </div>
            <div className="mt-16 md:mt-0 text-[10rem] leading-none font-syne font-bold text-neutral-900 select-none overflow-hidden -ml-4">
              DALLAS
            </div>
          </Reveal>
        </div>
        
        <div className="mt-24 text-center text-neutral-600 text-xs uppercase tracking-widest">
          &copy; 2024 Eclipsis Nightclub. Drink Responsibly.
        </div>
      </footer>
    </div>
  );
};

export default Index;
