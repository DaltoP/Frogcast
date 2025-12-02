import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-16 mb-16">
        <div className="relative w-full min-h-screen overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/why_tcu_blog_large_1.png"
              alt="TCU Campus"
              className="w-full h-full object-cover"
            />
            {/* Purple gradient overlay to blend with theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-800/45 to-indigo-900/50"></div>
            {/* Additional dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto h-screen flex items-center justify-center">
            <div className="text-center animate-fade-in px-4">
              <div className="relative inline-block mb-8">
                <img
                  src="/thumbnail_image.png"
                  alt="Fear the Frogcast"
                  className="w-32 h-32 rounded-lg border-4 border-white shadow-2xl animate-bounce-slow hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h1 className="text-7xl font-black text-white mb-4 drop-shadow-2xl">
                Fear the Frogcast
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
                <p className="text-2xl text-white font-bold">
                  Hopping into conversations that matter
                </p>
                <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16 mt-16 relative">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl shadow-xl p-12 border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-opacity-90">
          <h2 className="text-4xl font-black text-purple-900 mb-6 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-purple-600" />
            About Fear the Frogcast
          </h2>
          <p className="text-lg text-purple-800 leading-relaxed mb-8 font-medium">
            Welcome to the Fear the Frog Cast where four people with seemingly drastic lives find out what the hell they have in common. “From the classroom to the Carter—this is TCU.” This project brings together a diverse team with shared passion for meaningful discussions. Over four episodes, we explore topics that matter to us, sharing research, insights, and personal perspectives along the way.
          </p>
          <p className="text-lg text-purple-800 leading-relaxed mb-8 font-medium">
            From introducing our vision in the first episode to diving deep into our subject matter, to featuring expert
            insights, and finally reflecting on our journey—each episode represents hours of preparation, recording, and
            refinement. We hope you enjoy listening to our conversations as much as we enjoyed creating them!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/episodes"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Listen to Episodes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-purple-50 text-purple-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-purple-600 hover:scale-105"
            >
              Meet the Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl shadow-lg p-8 text-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-5xl font-black text-white mb-2 group-hover:scale-125 transition-transform relative z-10">5</div>
            <p className="text-white font-bold text-lg relative z-10">Episodes</p>
          </div>
          <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border-2 border-purple-600 text-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/50 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-5xl font-black text-purple-900 mb-2 group-hover:scale-125 transition-transform relative z-10">4</div>
            <p className="text-purple-900 font-bold text-lg relative z-10">Team Members</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 rounded-2xl shadow-lg p-8 text-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-5xl font-black text-white mb-2 group-hover:scale-125 transition-transform relative z-10">~2.5h</div>
            <p className="text-white font-bold text-lg relative z-10">Total Content</p>
          </div>
          <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-2xl shadow-lg p-8 border-2 border-pink-500 text-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-400/50 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-5xl font-black text-purple-900 mb-2 group-hover:scale-125 transition-transform relative z-10">110%</div>
            <p className="text-purple-900 font-bold text-lg relative z-10">Passion 🔥</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
