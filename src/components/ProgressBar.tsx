import React from 'react';

interface ProgressBarProps {
  current: number;
  max: number;
  color?: string;
  height?: string;
  width?: string;
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  max,
  color = 'bg-purple-500',
  height = 'h-3',
  width = 'w-full',
  showPercentage = true
}) => {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div className={`${width}`}>
      <div className={`${height} bg-slate-700 rounded-full overflow-hidden`}>
        <div
          className={`${height} ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;