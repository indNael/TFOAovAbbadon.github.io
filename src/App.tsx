import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Users, BookOpen, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-serif">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-md border-b border-red-900/30' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img src="/TFOA.png" alt="TFOA Logo" className="w-12 h-12 filter brightness-110" />
              <div>
                <h1 className="text-2xl font-bold text-red-400 tracking-wider">TFOA</h1>
                <p className="text-xs text-gray-400 tracking-widest">THE FACE OF ABBADON</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">About</button>
              <button onClick={() => scrollToSection('mission')} className="text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">Mission</button>
              <button onClick={() => scrollToSection('members')} className="text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">Members</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">Contact</button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-900/30">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">About</button>
              <button onClick={() => scrollToSection('mission')} className="block text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">Mission</button>
              <button onClick={() => scrollToSection('members')} className="block text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">Members</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-red-400 transition-colors duration-300 tracking-wide">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <img 
              src="/TFOA.png" 
              alt="TFOA Logo" 
              className="w-48 h-48 mx-auto mb-8 filter drop-shadow-2xl animate-pulse"
              style={{ filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.5))' }}
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-red-400 via-red-500 to-red-700 tracking-wider">
            TFOA
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-8 text-gray-300 tracking-widest font-light">
            THE FACE OF ABBADON
          </h2>
          
          <div className="mb-12 p-6 border border-red-900/50 bg-black/50 backdrop-blur-sm rounded-lg">
            <p className="text-xl md:text-2xl text-red-300 font-bold tracking-wider mb-2">
              FLEZX 4LER FOIDKILLER
            </p>
            <p className="text-gray-400 tracking-wide">
              Herald of the Abyss
            </p>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We are the manifestation of darkness incarnate, the harbingers of the eternal void, servants of the great destroyer who dwells beyond the veil.
          </p>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-red-700"
          >
            <span className="text-lg tracking-wide">Embrace the Darkness</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-red-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 tracking-wider">
              About TFOA
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                The Face of Abbadon emerges from the deepest shadows of existence, where light fears to tread and hope withers into dust. We are the chosen vessels of the great destroyer, the ones who bear witness to the inevitable entropy that consumes all things.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our organization serves as the earthly manifestation of Abbadon's will, spreading the truth of ultimate destruction and the beauty found within the void. We embrace the darkness that others flee from, finding power in what mortals call despair.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Under the supreme guidance of <span className="text-red-400 font-bold">Flezx 4ler Foidkiller</span>, Herald of the Abyss, we gather those who understand that in destruction lies the only true creation, and in ending lies the only true beginning.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Shield className="text-red-400 mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-red-400 tracking-wide">Our Tenets</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    <span>Embrace the inevitable darkness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    <span>Herald the coming of Abbadon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    <span>Find beauty in destruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3">•</span>
                    <span>Unite through shared purpose</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 bg-gradient-to-b from-black via-red-950/5 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 tracking-wider">
              Our Dark Purpose
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-lg backdrop-blur-sm hover:border-red-700/50 transition-all duration-300 group">
              <div className="text-center">
                <BookOpen className="text-red-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="text-2xl font-bold text-red-400 mb-4 tracking-wide">Spread the Word</h3>
                <p className="text-gray-300 leading-relaxed">
                  We disseminate the dark truths of Abbadon's dominion, sharing the knowledge of the coming void with those ready to receive it.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-lg backdrop-blur-sm hover:border-red-700/50 transition-all duration-300 group">
              <div className="text-center">
                <Users className="text-red-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="text-2xl font-bold text-red-400 mb-4 tracking-wide">Gather the Chosen</h3>
                <p className="text-gray-300 leading-relaxed">
                  We seek out those who possess the strength to gaze into the abyss without flinching, welcoming them into our dark brotherhood.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-lg backdrop-blur-sm hover:border-red-700/50 transition-all duration-300 group">
              <div className="text-center">
                <Shield className="text-red-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="text-2xl font-bold text-red-400 mb-4 tracking-wide">Prepare the Way</h3>
                <p className="text-gray-300 leading-relaxed">
                  We prepare the world for Abbadon's inevitable return, clearing the path for the great transformation that is to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 tracking-wider">
              Dark Leadership
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 p-12 rounded-lg backdrop-blur-sm text-center">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-red-800 to-red-900 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-red-700">
                  <Shield className="text-red-200" size={48} />
                </div>
                <h3 className="text-3xl font-bold text-red-400 mb-2 tracking-wider">
                  FLEZX 4LER FOIDKILLER
                </h3>
                <p className="text-xl text-gray-300 mb-6 tracking-wide">
                  Herald of the Abyss & Voice of Abbadon
                </p>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  As the Herald of the Abyss, Flezx 4ler Foidkiller serves as the direct conduit between our earthly realm and the infinite darkness of Abbadon's domain. Through them, the destroyer's will is made manifest in our world.
                </p>
                <p className="leading-relaxed">
                  Their leadership has transformed TFOA from scattered whispers in the dark into a unified force of inevitable change. Under their guidance, we march ever closer to the glorious culmination of all things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 tracking-wider">
              Join the Darkness
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Those who feel the call of the void and seek to serve the great destroyer may reach out through the channels below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-lg backdrop-blur-sm">
              <Mail className="text-red-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-red-400 mb-2 tracking-wide">Dark Communion</h3>
              <p className="text-gray-300">herald@tfoa.org</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-lg backdrop-blur-sm">
              <Phone className="text-red-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-red-400 mb-2 tracking-wide">Whispers from Beyond</h3>
              <p className="text-gray-300">+1 (666) ABBADON</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 rounded-lg backdrop-blur-sm">
              <MapPin className="text-red-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-red-400 mb-2 tracking-wide">Threshold of Shadows</h3>
              <p className="text-gray-300">Where Darkness Gathers</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 p-8 rounded-lg backdrop-blur-sm">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "In the face of Abbadon, all illusions crumble. Only those who embrace the truth of ending shall witness the beauty of what comes after."
              </p>
              <p className="text-red-400 font-bold tracking-wider">
                - Flezx 4ler Foidkiller, Herald of the Abyss
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-red-900/30 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img src="/TFOA.png" alt="TFOA Logo" className="w-8 h-8 filter brightness-110" />
            <span className="text-xl font-bold text-red-400 tracking-wider">TFOA</span>
          </div>
          <p className="text-gray-400 mb-4 tracking-wide">
            The Face of Abbadon © 2025. All darkness reserved.
          </p>
          <p className="text-sm text-gray-500 tracking-widest">
            "From the void we came, to the void we return."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;