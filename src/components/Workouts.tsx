import React, { useState } from 'react';
import { Play, Clock, Flame, Target, CheckCircle } from 'lucide-react';
import { mockWorkouts, mockActiveWorkout } from '../data/mockData';
import WorkoutCard from './WorkoutCard';
import ActiveWorkout from './ActiveWorkout';

const Workouts: React.FC = () => {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(mockWorkouts[0]);

  const startWorkout = (workout: any) => {
    setSelectedWorkout(workout);
    setActiveWorkout(true);
  };

  const completeWorkout = () => {
    setActiveWorkout(false);
    // Here you would typically save the workout results
  };

  if (activeWorkout) {
    return (
      <ActiveWorkout 
        workout={selectedWorkout}
        onComplete={completeWorkout}
        onCancel={() => setActiveWorkout(false)}
      />
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Workouts</h1>
        <p className="text-gray-300">Choose your workout and start earning XP!</p>
      </div>

      {/* Workout Categories */}
      <div className="flex space-x-4 mb-8 overflow-x-auto">
        {['All', 'Strength', 'Cardio', 'Flexibility', 'HIIT'].map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
              category === 'All'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onStart={() => startWorkout(workout)}
          />
        ))}
      </div>

      {/* Featured Challenge */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Daily Burn Challenge</h3>
            <p className="text-orange-100 mb-4">
              Complete any 3 workouts today and earn 500 bonus XP!
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Workout 1/3 completed</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-orange-200">Time remaining</p>
            <p className="text-2xl font-bold">6h 23m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;