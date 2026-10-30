import React, { useState, useEffect } from 'react';
import { Trophy, MapPin, Calendar, Zap, UserPlus, Star, ChevronRight } from 'lucide-react';

const App = () => {
  // Injecting custom fonts and soft background patterns via JS to keep it strictly single-file
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Oswald:wght@500;700&display=swap');
      
      .font-oswald { font-family: 'Oswald', sans-serif; }
      .font-montserrat { font-family: 'Montserrat', sans-serif; }
      
      .hero-pattern {
        background-color: #152A4A;
        background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
      }
      
      .brand-navy { color: #152A4A; }
      .bg-brand-navy { background-color: #152A4A; }
      .brand-red { color: #B21E27; }
      .bg-brand-red { background-color: #B21E27; }
      .brand-gold { color: #C8A153; }
      .bg-brand-gold { background-color: #C8A153; }
      
      /* Smooth scroll for anchor links */
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [voted, setVoted] = useState(null);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleVote = (id) => {
    setVoted(id);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1000);
  };

  const polls = [
    { id: 1, title: 'SATURDAY', sport: 'FOOTBALL', time: '16:00' },
    { id: 2, title: 'SUNDAY', sport: 'FOOTBALL', time: '10:00' },
    { id: 3, title: 'SATURDAY', sport: 'BASKETBALL', time: '18:00' },
    { id: 4, title: 'SUNDAY', sport: 'BASKETBALL', time: '15:00' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Marco V.', goals: 12, assists: 4 },
    { rank: 2, name: 'Alessandro M.', goals: 9, assists: 7 },
    { rank: 3, name: 'Luca B.', goals: 6, assists: 8 },
    { rank: 4, name: 'Giovanni T.', goals: 5, assists: 2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat text-gray-900 overflow-x-hidden">
      
      {/* HEADER */}
      <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* Small logo element */}
          <div className="w-10 h-10 rounded-full border-2 border-[#152A4A] overflow-hidden flex items-center justify-center">
             <img src="Gemini_Generated_Image_5lo0425lo0425lo0_2.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-oswald text-2xl tracking-wide uppercase brand-navy font-bold">Milano ASC</h1>
        </div>
        <nav className="mt-4 md:mt-0 flex gap-6 font-semibold text-sm">
          <a href="#polls" className="text-gray-600 hover:brand-red transition-colors">POLLS</a>
          <a href="#join" className="text-gray-600 hover:brand-red transition-colors">JOIN</a>
          <a href="#stats" className="text-gray-600 hover:brand-red transition-colors">STATS</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero-pattern py-20 md:py-32 px-4 relative flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-white opacity-10"><Star size={120} /></div>
        <div className="absolute bottom-10 right-10 text-white opacity-10"><Trophy size={120} /></div>

        <div className="flex-1 max-w-xl relative z-10 text-center md:text-left text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 text-brand-gold px-4 py-1.5 rounded-full font-semibold text-sm mb-6 backdrop-blur-sm border border-white/20">
            <Star size={14} className="fill-brand-gold" /> EST. 2026
          </div>
          <h2 className="font-oswald text-5xl md:text-7xl uppercase mb-6 leading-tight">
            The Premier <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A153] to-[#F5D061]">Amateur Club</span><br/>
            of Milano.
          </h2>
          <p className="text-gray-300 font-medium text-lg max-w-md mb-8 mx-auto md:mx-0 leading-relaxed">
            Join the community. We dynamically calculate the most central pitch based on where our players are. Step onto the field, no excuses.
          </p>
          <a href="#join" className="inline-flex items-center gap-2 bg-brand-red text-white font-oswald text-xl px-8 py-4 rounded-full shadow-lg shadow-red-900/30 hover:-translate-y-1 hover:shadow-xl transition-all uppercase tracking-wide">
            Get on the roster <ChevronRight size={20} />
          </a>
        </div>
        
        {/* Prominent Logo Display */}
        <div className="flex-1 flex justify-center w-full relative z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-brand-gold rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10 overflow-hidden border-4 border-white">
              <img 
                src="Gemini_Generated_Image_5lo0425lo0425lo0_2.jpg" 
                alt="Milano ASC Official Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-brand-navy text-white flex-col items-center justify-center p-4 text-center">
                <Star className="brand-gold mb-2 fill-brand-gold" size={48} />
                <span className="font-oswald text-3xl">MILANO<br/>ASC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY POLLS */}
      <section id="polls" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl brand-navy uppercase mb-4">Weekly Match Poll</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Vote for your preferred time and sport. The location algorithm will trigger once the poll closes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {polls.map((poll) => (
            <div key={poll.id} className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between hover:border-[#152A4A]/20 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-gray-100 brand-navy px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {poll.time}
                  </span>
                  {poll.sport === 'FOOTBALL' ? (
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">⚽️</div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">🏀</div>
                  )}
                </div>
                <h3 className="font-oswald text-3xl brand-navy leading-none mb-2">{poll.title}</h3>
                <p className="text-gray-500 font-medium text-sm tracking-widest uppercase mb-8">{poll.sport}</p>
              </div>
              
              <button 
                onClick={() => handleVote(poll.id)}
                disabled={voted !== null}
                className={`w-full font-oswald text-lg py-3 rounded-xl uppercase tracking-wider transition-all
                  ${voted === poll.id 
                    ? 'bg-brand-navy text-white shadow-md' 
                    : voted !== null 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-brand-navy hover:text-brand-navy'
                  }
                `}
              >
                {voted === poll.id ? '✓ Voted' : 'Vote Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PLAYER HUB / REGISTRATION */}
      <section id="join" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-brand-red mb-6">
               <MapPin size={32} />
            </div>
            <h2 className="font-oswald text-4xl brand-navy uppercase mb-6">Join The Roster</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Register your general location. We use the Haversine formula to automatically find the most central public ground for everyone attending the match.
            </p>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 flex items-start gap-4">
              <Zap className="shrink-0 brand-gold mt-1" />
              <p className="text-sm text-amber-900 font-medium leading-relaxed">
                <strong>Privacy First:</strong> Just drop a Google Maps link to your general neighborhood or preferred metro stop. Exact home addresses are not required!
              </p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserPlus size={40} />
                  </div>
                  <h3 className="font-oswald text-3xl brand-navy mb-2">YOU'RE IN!</h3>
                  <p className="text-gray-600">Your location has been logged. See you on the pitch.</p>
                </div>
              ) : (
                <form onSubmit={handleJoin} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Full Name</label>
                    <input required type="text" placeholder="e.g. Marco Rossi" className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Email Address</label>
                    <input required type="email" placeholder="marco@example.com" className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-sm">Google Maps Link</label>
                    <input required type="url" placeholder="https://maps.app.goo.gl/..." className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="mt-4 bg-brand-navy text-white font-oswald text-xl py-4 rounded-xl shadow-md hover:bg-[#1A365D] hover:shadow-lg transition-all uppercase tracking-wide flex justify-center items-center"
                  >
                    {formStatus === 'submitting' ? (
                       <span className="animate-pulse">Loading...</span>
                    ) : 'Register Location'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* STATS LEADERBOARD */}
      <section id="stats" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 brand-navy mb-6">
               <Trophy size={32} />
            </div>
            <h2 className="font-oswald text-4xl brand-navy uppercase">Top Performers</h2>
            <p className="text-gray-600 mt-2">All-time friendly match statistics.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-5 font-oswald text-gray-500 font-medium tracking-wider uppercase text-center w-16">#</th>
                    <th className="p-5 font-oswald text-gray-500 font-medium tracking-wider uppercase">Player</th>
                    <th className="p-5 font-oswald text-gray-500 font-medium tracking-wider uppercase text-center">Goals</th>
                    <th className="p-5 font-oswald text-gray-500 font-medium tracking-wider uppercase text-center">Assists</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leaderboard.map((player, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-5 font-bold text-gray-400 text-center">{player.rank}</td>
                      <td className="p-5 font-bold brand-navy flex items-center gap-3">
                         {index === 0 && <Star size={16} className="fill-brand-gold brand-gold" />}
                         {player.name}
                      </td>
                      <td className="p-5 font-semibold text-center text-lg">{player.goals}</td>
                      <td className="p-5 text-gray-600 text-center">{player.assists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-navy text-white py-12 px-6 text-center border-t-4 border-brand-red">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
             <img src="Gemini_Generated_Image_5lo0425lo0425lo0_2.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="font-oswald text-2xl mb-2 tracking-widest text-white">MILANO ASC</p>
        <p className="text-gray-400 text-sm uppercase tracking-wider">© 2026 Amateur Sports Club. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;
