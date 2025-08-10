import React, { useState } from 'react';
import { Trophy, Dumbbell, Users, Target, User, Home } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Workouts from './components/Workouts';
import Challenges from './components/Challenges';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'workouts', label: 'Workouts', icon: Dumbbell },
    { id: 'challenges', label: 'Challenges', icon: Target },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'workouts':
        return <Workouts />;
      case 'challenges':
        return <Challenges onNavigate={setCurrentPage} />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-slate-800/50 backdrop-blur-sm border-r border-purple-500/20 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">FitQuest</h1>
            </div>
            <h1 className="text-xl font-bold text-white">Gym&Play</h1>
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;