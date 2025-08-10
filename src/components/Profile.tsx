import React from 'react';
import { Award, Calendar, Target, Flame, Trophy, Star, Clock, TrendingUp } from 'lucide-react';
import { mockUserData, mockBadges, mockStats } from '../data/mockData';
import BadgeCard from './BadgeCard';
import ProgressBar from './ProgressBar';

const Profile: React.FC = () => {
  const { user } = mockUserData;

  return (
    <div className="p-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              alt={user.name}
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-xl text-purple-100 mb-2">{user.title}</p>
            <div className="flex items-center space-x-4">
              <span className="text-lg">Level {user.level}</span>
              <span className="text-purple-200">•</span>
              <span className="text-lg">{user.totalXP.toLocaleString()} Total XP</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-100">Progress to Level {user.level + 1}</span>
            <span className="text-white font-semibold">
              {user.currentXP} / {user.nextLevelXP} XP
            </span>
          </div>
          <ProgressBar 
            current={user.currentXP} 
            max={user.nextLevelXP} 
            color="bg-gradient-to-r from-yellow-400 to-orange-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats Column */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20 mb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
              Your Stats
            </h3>
            <div className="space-y-4">
              {mockStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                    <span className="text-gray-300">{stat.label}</span>
                  </div>
                  <span className="text-white font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Completed Full Body Blast</span>
                <span className="text-gray-500">2h ago</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Earned "Streak Master" badge</span>
                <span className="text-gray-500">1d ago</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">Joined Weekly Challenge</span>
                <span className="text-gray-500">2d ago</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Reached Level 15</span>
                <span className="text-gray-500">5d ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges Column */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Badges & Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {mockBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Goals */}
      <div className="mt-8 bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Target className="w-5 h-5 mr-2 text-purple-500" />
          Monthly Goals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Workouts Completed</span>
              <span className="text-white font-semibold">12/20</span>
            </div>
            <ProgressBar current={12} max={20} color="bg-green-500" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">XP Earned</span>
              <span className="text-white font-semibold">2,450/3,000</span>
            </div>
            <ProgressBar current={2450} max={3000} color="bg-purple-500" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Active Days</span>
              <span className="text-white font-semibold">15/22</span>
            </div>
            <ProgressBar current={15} max={22} color="bg-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;