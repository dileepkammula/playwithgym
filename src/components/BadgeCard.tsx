import React from 'react';

interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earned: boolean;
  earnedDate?: string;
}

interface BadgeCardProps {
  badge: Badge;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  const getRarityColors = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return {
          border: 'border-gray-500',
          bg: 'bg-gray-500/20',
          text: 'text-gray-400'
        };
      case 'rare':
        return {
          border: 'border-blue-500',
          bg: 'bg-blue-500/20',
          text: 'text-blue-400'
        };
      case 'epic':
        return {
          border: 'border-purple-500',
          bg: 'bg-purple-500/20',
          text: 'text-purple-400'
        };
      case 'legendary':
        return {
          border: 'border-yellow-500',
          bg: 'bg-yellow-500/20',
          text: 'text-yellow-400'
        };
      default:
        return {
          border: 'border-gray-500',
          bg: 'bg-gray-500/20',
          text: 'text-gray-400'
        };
    }
  };

  const colors = getRarityColors(badge.rarity);

  return (
    <div className={`p-4 rounded-xl border-2 ${colors.border} ${colors.bg} ${
      badge.earned ? 'opacity-100' : 'opacity-50 grayscale'
    } transition-all duration-200 hover:scale-105`}>
      <div className="text-center">
        <div className="text-4xl mb-2">{badge.icon}</div>
        <h4 className="text-white font-bold text-sm mb-1">{badge.name}</h4>
        <p className="text-gray-400 text-xs mb-2">{badge.description}</p>
        <span className={`text-xs font-medium ${colors.text} capitalize`}>
          {badge.rarity}
        </span>
        {badge.earned && badge.earnedDate && (
          <p className="text-gray-500 text-xs mt-1">Earned {badge.earnedDate}</p>
        )}
      </div>
    </div>
  );
};

export default BadgeCard;