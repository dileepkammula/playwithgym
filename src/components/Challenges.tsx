import React from 'react';
import { Trophy, Users, Clock, Target, Zap, Calendar } from 'lucide-react';
import { mockChallenges, mockActiveChallenges } from '../data/mockData';
import ChallengeCard from './ChallengeCard';
import ChallengeDetails from './ChallengeDetails';
import ProgressBar from './ProgressBar';

interface ChallengesProps {
  onNavigate?: (page: string) => void;
}

const Challenges: React.FC<ChallengesProps> = ({ onNavigate }) => {
  const [selectedChallenge, setSelectedChallenge] = React.useState<any>(null);

  const handleJoinChallenge = (challengeId: number) => {
    const challenge = mockChallenges.find(c => c.id === challengeId);
    if (challenge) {
      setSelectedChallenge(challenge);
    }
  };

  const handleBackToChallenges = () => {
    setSelectedChallenge(null);
  };

  if (selectedChallenge) {
    return (
      <ChallengeDetails 
        challenge={selectedChallenge}
        onBack={handleBackToChallenges}
      />
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Challenges</h1>
        <p className="text-gray-300">Compete with friends and earn exclusive rewards!</p>
      </div>

      {/* Active Challenges */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
          Your Active Challenges
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockActiveChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
                  <p className="text-gray-300">{challenge.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Ends in</p>
                  <p className="text-sm font-semibold text-orange-400">{challenge.timeLeft}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm text-gray-400">
                    {challenge.progress}/{challenge.target}
                  </span>
                </div>
                <ProgressBar 
                  current={challenge.progress} 
                  max={challenge.target} 
                  color="bg-gradient-to-r from-green-500 to-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm font-medium">{challenge.reward} XP</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{challenge.participants}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Challenges */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-purple-500" />
          Available Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockChallenges.map((challenge) => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge} 
              onJoin={handleJoinChallenge}
            />
          ))}
        </div>
      </div>

      {/* Weekly Tournament */}
      <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
        <div className="text-center text-white">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Weekly Tournament</h3>
          <p className="text-purple-100 mb-6">
            Compete with the top 100 players for exclusive prizes and bragging rights!
          </p>
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="text-center">
              <p className="text-sm text-purple-200">Your Rank</p>
              <p className="text-2xl font-bold">#24</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-purple-200">Points</p>
              <p className="text-2xl font-bold">1,247</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-purple-200">Time Left</p>
              <p className="text-2xl font-bold">3d 14h</p>
            </div>
          </div>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenges;