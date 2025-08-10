import React from 'react';

interface Achievement {
  title: string;
  description: string;
  xp: number;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'border-gray-500/50 bg-gray-500/10';
      case 'rare':
        return 'border-blue-500/50 bg-blue-500/10';
      case 'epic':
        return 'border-purple-500/50 bg-purple-500/10';
      case 'legendary':
        return 'border-yellow-500/50 bg-yellow-500/10';
      default:
        return 'border-gray-500/50 bg-gray-500/10';
    }
  };

  return (
    <div className={`p-3 rounded-lg border ${getRarityColor(achievement.rarity)} hover:scale-105 transition-transform duration-200`}>
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{achievement.icon}</div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-sm">{achievement.title}</h4>
          <p className="text-gray-400 text-xs">{achievement.description}</p>
        </div>
        <div className="text-right">
          <p className="text-yellow-500 text-sm font-semibold">+{achievement.xp} XP</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;