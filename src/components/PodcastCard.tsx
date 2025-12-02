import { Play, Clock, Calendar } from 'lucide-react';

interface Podcast {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  audioUrl: string;
}

interface PodcastCardProps {
  podcast: Podcast;
}

function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-300 overflow-hidden group hover:scale-105 hover:border-purple-600">
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-black text-purple-900 mb-3 group-hover:text-purple-600 transition-colors">
              {podcast.title}
            </h3>
            <p className="text-purple-800 leading-relaxed font-medium">
              {podcast.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-purple-700 font-bold mb-6">
          <div className="flex items-center gap-1.5 bg-purple-100 px-3 py-1.5 rounded-lg">
            <Clock className="w-4 h-4" />
            <span>{podcast.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-purple-100 px-3 py-1.5 rounded-lg">
            <Calendar className="w-4 h-4" />
            <span>{podcast.date}</span>
          </div>
        </div>

        <a
          href={podcast.audioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-black py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl group-hover:scale-105"
        >
          <Play className="w-5 h-5 group-hover:scale-125 transition-transform" fill="white" />
          Play Episode
        </a>
      </div>
    </div>
  );
}

export default PodcastCard;
