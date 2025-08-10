import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trophy, Users, Clock, Target, CheckCircle, Star } from 'lucide-react';
import ProgressBar from './ProgressBar';

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

interface ChallengeDetailsProps {
  challenge: Challenge;
  onBack: () => void;
}

const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({ challenge, onBack }) => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [showReward, setShowReward] = useState(false);

  const challengeGoal = challenge.type === 'daily' ? 1 : challenge.type === 'weekly' ? 5 : 10;

  const completeTask = () => {
    if (progress < challengeGoal) {
      const newProgress = progress + 1;
      setProgress(newProgress);
      
      if (newProgress >= challengeGoal) {
        setIsCompleted(true);
        setEarnedCoins(challenge.reward);
        setShowReward(true);
        setTimeout(() => setShowReward(false), 3000);
      }
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'daily':
        return 'bg-green-500';
      case 'weekly':
        return 'bg-blue-500';
      case 'special':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="p-2 text-gray-400 hover:text-white transition-colors duration-200 mr-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-white">{challenge.title}</h1>
          <p className="text-gray-300">Complete tasks to earn rewards!</p>
        </div>
      </div>

      {/* Reward Animation */}
      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-2xl animate-bounce">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8" />
              <div>
                <p className="text-xl font-bold">Challenge Complete!</p>
                <p className="text-lg">+{earnedCoins} coins earned!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Challenge Info */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(challenge.type)} mb-3 inline-block`}>
                  {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)} Challenge
                </span>
                <p className="text-gray-300 text-lg">{challenge.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold text-white">{challenge.reward}</p>
                <p className="text-sm text-gray-400">Reward Coins</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-2xl font-bold text-white">{challenge.participants}</p>
                <p className="text-sm text-gray-400">Participants</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-2xl font-bold text-white">{challenge.duration}</p>
                <p className="text-sm text-gray-400">Duration</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-purple-500" />
                </div>
                <p className={`text-2xl font-bold ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </p>
                <p className="text-sm text-gray-400">Difficulty</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Challenge Progress</span>
                <span className="text-white font-semibold">{progress}/{challengeGoal}</span>
              </div>
              <ProgressBar 
                current={progress} 
                max={challengeGoal} 
                color={isCompleted ? "bg-green-500" : "bg-purple-500"}
              />
            </div>

            {/* Action Button */}
            {!isCompleted ? (
              <button
                onClick={completeTask}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Complete Task ({progress}/{challengeGoal})
              </button>
            ) : (
              <div className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Challenge Completed!</span>
              </div>
            )}
          </div>

          {/* Challenge Tasks */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Challenge Tasks</h3>
            <div className="space-y-3">
              {Array.from({ length: challengeGoal }, (_, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                    index < progress
                      ? 'bg-green-600/20 border border-green-500/30'
                      : 'bg-slate-700/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index < progress
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-600 text-gray-400'
                  }`}>
                    {index < progress ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Task {index + 1}: Complete a workout session
                    </p>
                    <p className="text-gray-400 text-sm">
                      {index < progress ? 'Completed' : 'Pending'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Rewards */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 mb-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Rewards
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">Coins</span>
                </div>
                <span className="text-yellow-500 font-bold">+{challenge.reward}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  <span className="text-white">XP</span>
                </div>
                <span className="text-purple-500 font-bold">+{Math.floor(challenge.reward * 0.5)}</span>
              </div>
              {isCompleted && (
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-white">Badge</span>
                  </div>
                  <span className="text-green-500 font-bold">Earned!</span>
                </div>
              )}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-bold text-white mb-4">Top Participants</h3>
            <div className="space-y-3">
              {[
                { name: 'Sarah Chen', progress: challengeGoal, coins: challenge.reward },
                { name: 'Mike Johnson', progress: Math.floor(challengeGoal * 0.8), coins: 0 },
                { name: 'You', progress: progress, coins: earnedCoins },
              ].map((participant, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">#{index + 1}</span>
                    <span className={`text-sm ${participant.name === 'You' ? 'text-purple-400 font-semibold' : 'text-white'}`}>
                      {participant.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white">{participant.progress}/{challengeGoal}</p>
                    {participant.coins > 0 && (
                      <p className="text-xs text-yellow-500">+{participant.coins} coins</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;