import React, { useState, useEffect } from 'react';
import { Pause, Play, SkipForward, X, CheckCircle } from 'lucide-react';

interface Workout {
  title: string;
  exercises: Array<{
    name: string;
    duration: string;
    reps?: string;
  }>;
}

interface ActiveWorkoutProps {
  workout: Workout;
  onComplete: () => void;
  onCancel: () => void;
}

const ActiveWorkout: React.FC<ActiveWorkoutProps> = ({ workout, onComplete, onCancel }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      completeExercise();
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const completeExercise = () => {
    setCompletedExercises([...completedExercises, currentExercise]);
    if (currentExercise < workout.exercises.length - 1) {
      nextExercise();
    } else {
      onComplete();
    }
  };

  const nextExercise = () => {
    if (currentExercise < workout.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setTimeLeft(30);
      setIsActive(false);
    }
  };

  const progress = (completedExercises.length / workout.exercises.length) * 100;

  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">{workout.title}</h1>
          <p className="text-gray-300">
            Exercise {currentExercise + 1} of {workout.exercises.length}
          </p>
        </div>
        <button
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300">Progress</span>
          <span className="text-white font-semibold">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Current Exercise */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {workout.exercises[currentExercise].name}
          </h2>
          
          {/* Timer */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-purple-400 mb-4">
              {timeLeft}
            </div>
            <p className="text-gray-300">seconds remaining</p>
          </div>

          {/* Exercise Info */}
          <div className="mb-8">
            <p className="text-xl text-gray-300">
              Duration: {workout.exercises[currentExercise].duration}
            </p>
            {workout.exercises[currentExercise].reps && (
              <p className="text-lg text-gray-400">
                {workout.exercises[currentExercise].reps}
              </p>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleTimer}
              className={`p-4 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            
            <button
              onClick={completeExercise}
              className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
            >
              <CheckCircle className="w-6 h-6" />
            </button>
            
            {currentExercise < workout.exercises.length - 1 && (
              <button
                onClick={nextExercise}
                className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Exercise List */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Exercise List</h3>
          <div className="space-y-2">
            {workout.exercises.map((exercise, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                  index === currentExercise
                    ? 'bg-purple-600/20 border border-purple-500/30'
                    : completedExercises.includes(index)
                    ? 'bg-green-600/20 border border-green-500/30'
                    : 'bg-slate-700/30'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    completedExercises.includes(index)
                      ? 'bg-green-500 text-white'
                      : index === currentExercise
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-600 text-gray-400'
                  }`}>
                    {completedExercises.includes(index) ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{exercise.name}</p>
                    <p className="text-gray-400 text-sm">{exercise.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveWorkout;