import React, { useState } from 'react';
import { Trophy, Medal, Crown, TrendingUp, Users } from 'lucide-react';
import { mockLeaderboard, mockFriendsLeaderboard } from '../data/mockData';

const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'global' | 'friends'>('global');

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      case 2:
        return 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30';
      case 3:
        return 'bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border-amber-600/30';
      default:
        return 'bg-slate-800/30 border-slate-700/50';
    }
  };

  const currentData = activeTab === 'global' ? mockLeaderboard : mockFriendsLeaderboard;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-gray-300">See how you stack up against other fitness champions!</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('global')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
            activeTab === 'global'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span>Global Leaderboard</span>
        </button>
        <button
          onClick={() => setActiveTab('friends')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
            activeTab === 'friends'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Friends</span>
        </button>
      </div>

      {/* Top 3 Podium */}
      <div className="mb-8">
        <div className="flex justify-center items-end space-x-4 mb-8">
          {currentData.slice(0, 3).map((user, index) => {
            const position = index === 0 ? 1 : index === 1 ? 2 : 3;
            const height = position === 1 ? 'h-32' : position === 2 ? 'h-24' : 'h-20';
            const order = position === 1 ? 'order-2' : position === 2 ? 'order-1' : 'order-3';
            
            return (
              <div key={user.id} className={`${order} flex flex-col items-center`}>
                <div className="mb-2">
                  {getRankIcon(position)}
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className={`${getRankBg(position)} ${height} w-24 rounded-t-lg border-2 flex flex-col items-center justify-center`}>
                  <p className="text-white font-bold text-sm text-center">{user.name}</p>
                  <p className="text-gray-300 text-xs">{user.points.toLocaleString()} pts</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="bg-slate-800/50 rounded-2xl border border-purple-500/20 overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">Rankings</h3>
        </div>
        <div className="divide-y divide-slate-700">
          {currentData.map((user, index) => (
            <div
              key={user.id}
              className={`p-4 hover:bg-slate-700/50 transition-colors duration-200 ${
                user.isCurrentUser ? 'bg-purple-900/30 border-l-4 border-purple-500' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    {getRankIcon(index + 1)}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{user.name}</p>
                    <p className="text-gray-400 text-sm">Level {user.level}</p>
                  </div>
                  {user.isCurrentUser && (
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      You
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{user.points.toLocaleString()}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`${user.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {user.change >= 0 ? '+' : ''}{user.change}
                    </span>
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Season Info */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6">
        <div className="flex items-center justify-between text-white">
          <div>
            <h3 className="text-lg font-bold mb-1">Season 3: Winter Challenge</h3>
            <p className="text-blue-100">Compete for exclusive winter-themed rewards and badges!</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-200">Season ends in</p>
            <p className="text-xl font-bold">28 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;