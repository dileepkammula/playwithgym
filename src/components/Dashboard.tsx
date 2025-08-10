import React from 'react';
import { Trophy, Flame, Target, TrendingUp, Award, Star } from 'lucide-react';
import ProgressBar from './ProgressBar';
import StatCard from './StatCard';
import AchievementCard from './AchievementCard';
import { mockUserData, mockRecentAchievements, mockWeeklyProgress } from '../data/mockData';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user, stats } = mockUserData;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user.name}! 💪
        </h1>
        <p className="text-gray-300">Ready to crush your fitness goals today?</p>
      </div>

      {/* User Level and XP */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Level {user.level}</h2>
            <p className="text-purple-100">{user.title}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-purple-100">XP to next level</p>
            <p className="text-lg font-semibold text-white">
              {user.currentXP} / {user.nextLevelXP}
            </p>
          </div>
        </div>
        <ProgressBar 
          current={user.currentXP} 
          max={user.nextLevelXP} 
          color="bg-yellow-400"
          showPercentage={false}
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Trophy}
          title="Total Points"
          value={stats.totalPoints.toLocaleString()}
          subtitle="+125 this week"
          iconColor="text-yellow-500"
          bgColor="bg-yellow-500/10"
        />
        <StatCard
          icon={Flame}
          title="Current Streak"
          value={`${stats.currentStreak} days`}
          subtitle="Personal best!"
          iconColor="text-orange-500"
          bgColor="bg-orange-500/10"
        />
        <StatCard
          icon={Target}
          title="Workouts Completed"
          value={stats.workoutsCompleted.toString()}
          subtitle="This month"
          iconColor="text-green-500"
          bgColor="bg-green-500/10"
        />
        <StatCard
          icon={TrendingUp}
          title="Avg. Workout Score"
          value={`${stats.averageScore}%`}
          subtitle="+5% vs last month"
          iconColor="text-blue-500"
          bgColor="bg-blue-500/10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Progress */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
            Weekly Progress
          </h3>
          <div className="space-y-4">
            {mockWeeklyProgress.map((day) => (
              <div key={day.day} className="flex items-center justify-between">
                <span className="text-gray-300">{day.day}</span>
                <div className="flex items-center space-x-3">
                  <ProgressBar 
                    current={day.completed} 
                    max={day.goal} 
                    color="bg-purple-500"
                    width="w-24"
                  />
                  <span className="text-sm text-gray-400 w-12">
                    {day.completed}/{day.goal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-yellow-500" />
            Recent Achievements
          </h3>
          <div className="space-y-3">
            {mockRecentAchievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => onNavigate('workouts')}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Start Quick Workout
          </button>
          <button 
            onClick={() => onNavigate('challenges')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Join Daily Challenge
          </button>
          <button 
            onClick={() => onNavigate('leaderboard')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View Friends Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;