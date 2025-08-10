import React from 'react';
import { Trophy, Users, Clock, Calendar, Target } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'special';
  participants: number;
  reward: number;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface ChallengeCardProps {
  challenge: Challenge;
  onJoin?: (challengeId: number) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onJoin }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'daily':
        return 'bg-green-500 text-white';
      case 'weekly':
        return 'bg-blue-500 text-white';
      case 'special':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400';
      case 'Medium':
        return 'text-yellow-400';
      case 'Hard':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleJoinChallenge = () => {
    if (onJoin) {
      onJoin(challenge.id);
    }
  };
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(challenge.type)} mb-2 inline-block`}>
            {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
          </span>
          <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-yellow-500">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">{challenge.reward} XP</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{challenge.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{challenge.participants} joined</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{challenge.duration}</span>
          </div>
        </div>
        <span className={`font-medium ${getDifficultyColor(challenge.difficulty)}`}>
          {challenge.difficulty}
        </span>
      </div>
      
      <button 
        onClick={handleJoinChallenge}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 group-hover:scale-105"
      >
        Join Challenge
      </button>
    </div>
  );
};

export default ChallengeCard;