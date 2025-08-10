import React from 'react';
import { Play, Clock, Target, Zap } from 'lucide-react';

interface Workout {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xp: number;
  type: string;
  image: string;
}

interface WorkoutCardProps {
  workout: Workout;
  onStart: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onStart }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500 text-white';
      case 'Intermediate':
        return 'bg-yellow-500 text-white';
      case 'Advanced':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-200 group">
      <div className="relative h-48">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(workout.difficulty)}`}>
            {workout.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">
            {workout.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{workout.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{workout.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{workout.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">{workout.xp} XP</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Play className="w-5 h-5" />
          <span>Start Workout</span>
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;