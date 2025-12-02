// import { Sparkles } from 'lucide-react';
import PodcastCard from '../components/PodcastCard';

const podcasts = [
  {
    id: 1,
    title: 'Episode 1: Introductions',
    description: 'Hi, welcome to Fear the Frogcast! Get to know us!',
    duration: '16:14',
    date: 'November 2025',
    audioUrl: 'https://mcdn.podbean.com/mf/web/3v5mc6kexr3uu4aq/Fear_the_Frogcast_Episode1_-_10_15_25_240_PM691oh.mp3',
  },
  {
    id: 2,
    title: 'Episode 2: Majors',
    description: 'Join us as we discuss our majors',
    duration: '38:02',
    date: 'November 2025',
    audioUrl: 'https://mcdn.podbean.com/mf/web/x9y2k8sg6gs3myhz/Fear_the_Frogcast_Episode2.m4a',
  },
  {
    id: 3,
    title: 'Episode 3: Greek Life',
    description: 'Join us as we discuss Greek Life on TCU campus!',
    duration: '32:17',
    date: 'November 2025',
    audioUrl: 'https://mcdn.podbean.com/mf/web/b94utikr45nh6h2j/Fear_the_Frogcast_Episode_3_Greek_Lifebdvc8.m4a',
  },
  {
    id: 4,
    title: 'Episode 4: School Spirit',
    description: 'Join us as we discuss what exactly it means to be a Horned Frog!',
    duration: '32:11',
    date: 'November 2025',
    audioUrl: 'https://mcdn.podbean.com/mf/web/3ez5z6kfrdhdv3ty/Fear_the_Frogcast_Episode_4_School_Spirit8rhmx.m4a',
  },
  {
    id: 5,
    title: 'Episode 5: Daily Routines',
    description: 'For our final episode we discuss what really is the ideal schedule for college students.',
    duration: '30:26',
    date: 'November 2025',
    audioUrl: 'https://mcdn.podbean.com/mf/web/7itzbpyy7mk52a9c/Fear_the_Frogcast_Episode_5_Daily_Routinesajy7y.m4a',
  },
];

function Episodes() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <img
            src="/thumbnail_image.png"
            alt="Frog"
            className="w-24 h-24 rounded-full border-4 border-purple-600 shadow-2xl animate-bounce-slow"
          />
        </div>
        <h1 className="text-6xl font-black text-purple-900 mb-4">
          All Episodes 🎧
        </h1>
        <p className="text-2xl text-purple-700 max-w-2xl mx-auto font-bold">
          Explore all five ribbiting episodes of Fear the Frogcast!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
}

export default Episodes;
