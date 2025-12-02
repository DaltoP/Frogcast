import { Sparkles, Instagram } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Reagan',
    role: '🎙️ Producer & Host',
    bio: 'I come into this conversation as a TCU junior balancing the rigor of the pre-med track with the curiosity that comes from majoring in anthropology and minoring in medical Spanish. Being part of a sorority and growing up in the Bay Area have both shaped how I navigate college—mixing a sense of community with a broader, culturally diverse perspective. I tend to look at how identity, culture, and lived experience shape the way we move through academic and social spaces, rather than seeing college as just a series of classes or social events. That lens guides what I share in the podcast, because for me, TCU is where my academic goals, my interest in people, and my personal growth intersect. It’s the environment where I’m learning not just how to become a future physician, but how to understand the many worlds people come from—and that perspective shapes how I connect my own experiences to the larger story of college life.',
  },
  {
    id: 2,
    name: 'Kaeden',
    role: '📚 Researcher & Host',
    bio: 'I come into the conversation as a TCU student who is trying to build a real foundation for my future while still figuring out college in real time. My background in entrepreneurship and real estate, along with the structure and discipline I’ve built through fitness, shapes how I see campus life. I tend to look at how habits, environment, and ambition influence who we become rather than just focusing on the social side of college. That perspective guided what I shared in the podcast, because for me, TCU is more than classes and football games. It is a place where discipline, career goals, and personal growth all collide, and that is the lens I used to connect my experiences to the broader reality of college life.',
  },
  {
    id: 3,
    name: 'Colin',
    role: '🎨 Content Creator & Editor',
    bio: 'As a sophomore at TCU’s Neeley School of Business planning to major in finance, my perspective on this podcast is shaped by both my academic path and my personal background. Coming from Greenwich, Connecticut, I bring an East Coast lens to life in Fort Worth, blending my experiences from a fast-paced financial community with the uniquely spirited culture of TCU. Being part of a fraternity also influences how I see campus life, leadership, and the social dynamics that make college what it is. Altogether, my positionality reflects a mix of business-focused ambition, TCU pride, and the personal experiences that have shaped how I view the topics we discuss on the show.',
  },
  {
    id: 4,
    name: 'Dalton',
    role: '⚡ Technical Lead',
    bio: 'As a senior Computer Science major from Houston, I bring an engineering mindset to the Fear the Frogcast team. My time at TCU has been defined by understanding how complex systems work and how they can be optimized to better connect people. I’m fascinated by the intersection of structural design and human interaction. Building the platform for this podcast has been a rewarding challenge, allowing me to apply my engineering skills to support our campus community. For me, this project is about creating a robust foundation where our diverse experiences can be shared with the entire Horned Frog family.',
  },
];

function AboutUs() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <img
            src="/podcast.jpeg"
            alt="Frog"
            className="w-24 h-24 rounded-full border-4 border-purple-600 shadow-2xl animate-bounce-slow"
          />
        </div>
        <h1 className="text-6xl font-black text-purple-900 mb-4">
          The Frog Squad 🐸
        </h1>
        <p className="text-2xl text-purple-700 max-w-2xl mx-auto font-bold">
          Meet the amazing team hopping behind Fear the Frogcast!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-lg p-8 border-2 border-purple-300 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-purple-600 group flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg mx-auto overflow-hidden">
              <img
                src={
                  member.name === 'Kaeden'
                    ? '/IMG_6203.jpeg'
                    : member.name === 'Reagan'
                      ? '/download.jpeg'
                      : member.name === 'Dalton'
                        ? '/dalton_profile.jpeg'
                        : '/podcast.jpeg'
                }
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-black text-purple-900 mb-2 group-hover:text-purple-600 transition-colors text-center">
              {member.name}
            </h3>
            <div className="flex-1 min-h-0">
              <p className="text-purple-800 leading-relaxed font-medium max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-purple-100 to-white rounded-3xl shadow-xl p-10 border-2 border-purple-400 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-black text-purple-900 mb-4 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-purple-600" />
          Our Mission
        </h2>
        <p className="text-purple-800 leading-relaxed text-lg font-medium mb-8">
          Fear the Frogcast represents our commitment to collaborative learning, creative expression, and having a ribbiting good time! 🐸 Through
          thoughtful discussion and research-backed insights, we aim to engage our audience and share the knowledge
          we've gained throughout this amazing project. Each team member brought their unique perspective and skills to create
          something we're incredibly proud of. Let's hop to it! 🎉
        </p>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/fearthefrog_pod?igsh=MTdvOHd4Yzg0MmNpaA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
