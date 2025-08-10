import { Target, Clock, Flame, Award, TrendingUp, Users } from 'lucide-react';

export const mockUserData = {
  user: {
    name: 'Alex Rodriguez',
    level: 15,
    title: 'Fitness Warrior',
    currentXP: 2750,
    nextLevelXP: 3500,
    totalXP: 45250,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  stats: {
    totalPoints: 45250,
    currentStreak: 12,
    workoutsCompleted: 87,
    averageScore: 85
  }
};

export const mockRecentAchievements = [
  {
    title: 'Streak Master',
    description: 'Complete 10 workouts in a row',
    xp: 500,
    icon: '🔥',
    rarity: 'epic' as const
  },
  {
    title: 'Early Bird',
    description: 'Complete 5 morning workouts',
    xp: 250,
    icon: '🌅',
    rarity: 'rare' as const
  },
  {
    title: 'Consistency King',
    description: 'Work out 7 days in a week',
    xp: 300,
    icon: '👑',
    rarity: 'rare' as const
  }
];

export const mockWeeklyProgress = [
  { day: 'Mon', completed: 2, goal: 2 },
  { day: 'Tue', completed: 1, goal: 2 },
  { day: 'Wed', completed: 2, goal: 2 },
  { day: 'Thu', completed: 0, goal: 2 },
  { day: 'Fri', completed: 1, goal: 2 },
  { day: 'Sat', completed: 0, goal: 2 },
  { day: 'Sun', completed: 0, goal: 2 }
];

export const mockWorkouts = [
  {
    id: 1,
    title: 'Full Body Blast',
    description: 'A comprehensive workout targeting all major muscle groups',
    duration: '45 min',
    difficulty: 'Intermediate' as const,
    xp: 300,
    type: 'Strength',
    image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    exercises: [
      { name: 'Push-ups', duration: '30 seconds', reps: '10-15 reps' },
      { name: 'Squats', duration: '45 seconds', reps: '15-20 reps' },
      { name: 'Plank', duration: '30 seconds' },
      { name: 'Mountain Climbers', duration: '30 seconds' },
      { name: 'Burpees', duration: '45 seconds', reps: '8-12 reps' }
    ]
  },
  {
    id: 2,
    title: 'Cardio Crusher',
    description: 'High-intensity cardio workout to boost your heart rate',
    duration: '30 min',
    difficulty: 'Advanced' as const,
    xp: 400,
    type: 'Cardio',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    exercises: [
      { name: 'Jumping Jacks', duration: '45 seconds' },
      { name: 'High Knees', duration: '30 seconds' },
      { name: 'Jump Squats', duration: '30 seconds' },
      { name: 'Sprint in Place', duration: '20 seconds' }
    ]
  },
  {
    id: 3,
    title: 'Yoga Flow',
    description: 'Gentle yoga session for flexibility and mindfulness',
    duration: '25 min',
    difficulty: 'Beginner' as const,
    xp: 200,
    type: 'Flexibility',
    image: 'https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    exercises: [
      { name: 'Sun Salutation', duration: '2 minutes' },
      { name: 'Warrior Pose', duration: '1 minute' },
      { name: 'Child\'s Pose', duration: '30 seconds' },
      { name: 'Tree Pose', duration: '45 seconds' }
    ]
  },
  {
    id: 4,
    title: 'Core Power',
    description: 'Intense core workout to build ab strength',
    duration: '20 min',
    difficulty: 'Intermediate' as const,
    xp: 250,
    type: 'Core',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    exercises: [
      { name: 'Crunches', duration: '45 seconds' },
      { name: 'Russian Twists', duration: '30 seconds' },
      { name: 'Dead Bug', duration: '40 seconds' },
      { name: 'Bicycle Crunches', duration: '45 seconds' }
    ]
  },
  {
    id: 5,
    title: 'Upper Body Strength',
    description: 'Focus on arms, shoulders, and chest muscles',
    duration: '35 min',
    difficulty: 'Advanced' as const,
    xp: 350,
    type: 'Strength',
    image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    exercises: [
      { name: 'Push-up Variations', duration: '45 seconds' },
      { name: 'Pike Push-ups', duration: '30 seconds' },
      { name: 'Tricep Dips', duration: '40 seconds' },
      { name: 'Arm Circles', duration: '30 seconds' }
    ]
  },
  {
    id: 6,
    title: 'HIIT Express',
    description: 'Quick but intense workout for busy schedules',
    duration: '15 min',
    difficulty: 'Advanced' as const,
    xp: 300,
    type: 'HIIT',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    exercises: [
      { name: 'Burpees', duration: '20 seconds' },
      { name: 'Jump Squats', duration: '20 seconds' },
      { name: 'Mountain Climbers', duration: '20 seconds' },
      { name: 'Rest', duration: '10 seconds' }
    ]
  }
];

export const mockActiveWorkout = mockWorkouts[0];

export const mockChallenges = [
  {
    id: 1,
    title: '30-Day Push-up Challenge',
    description: 'Complete 1000 push-ups over 30 days',
    type: 'special' as const,
    participants: 1250,
    reward: 1000,
    duration: '30 days',
    difficulty: 'Medium' as const
  },
  {
    id: 2,
    title: 'Weekly Cardio King',
    description: 'Complete 5 cardio workouts this week',
    type: 'weekly' as const,
    participants: 890,
    reward: 500,
    duration: '7 days',
    difficulty: 'Easy' as const
  },
  {
    id: 3,
    title: 'Morning Warrior',
    description: 'Complete workouts before 8 AM for 7 days',
    type: 'weekly' as const,
    participants: 456,
    reward: 750,
    duration: '7 days',
    difficulty: 'Hard' as const
  },
  {
    id: 4,
    title: 'Core Crusher Daily',
    description: 'Do a core workout every day this month',
    type: 'special' as const,
    participants: 678,
    reward: 1200,
    duration: '30 days',
    difficulty: 'Hard' as const
  },
  {
    id: 5,
    title: 'Flexibility Master',
    description: 'Complete 3 yoga sessions this week',
    type: 'weekly' as const,
    participants: 234,
    reward: 300,
    duration: '7 days',
    difficulty: 'Easy' as const
  },
  {
    id: 6,
    title: 'Beast Mode',
    description: 'Complete 10 advanced workouts in 2 weeks',
    type: 'special' as const,
    participants: 125,
    reward: 2000,
    duration: '14 days',
    difficulty: 'Hard' as const
  }
];

export const mockActiveChallenges = [
  {
    id: 1,
    title: 'Weekly Step Challenge',
    description: 'Walk 50,000 steps this week',
    progress: 32500,
    target: 50000,
    reward: 400,
    participants: 1234,
    timeLeft: '3 days'
  },
  {
    id: 2,
    title: 'Consistency Challenge',
    description: 'Work out 5 days in a row',
    progress: 3,
    target: 5,
    reward: 300,
    participants: 567,
    timeLeft: '2 days'
  }
];

export const mockLeaderboard = [
  {
    id: 1,
    name: 'Sarah Chen',
    points: 12450,
    level: 22,
    change: 45,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: false
  },
  {
    id: 2,
    name: 'Mike Johnson',
    points: 11890,
    level: 21,
    change: -12,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: false
  },
  {
    id: 3,
    name: 'Emma Wilson',
    points: 11234,
    level: 20,
    change: 78,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: false
  },
  {
    id: 4,
    name: 'Alex Rodriguez',
    points: 10987,
    level: 15,
    change: 125,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: true
  },
  {
    id: 5,
    name: 'David Park',
    points: 10456,
    level: 19,
    change: -8,
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: false
  }
];

export const mockFriendsLeaderboard = [
  {
    id: 1,
    name: 'Jordan Smith',
    points: 8765,
    level: 18,
    change: 34,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: false
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    points: 8234,
    level: 15,
    change: 89,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: true
  },
  {
    id: 3,
    name: 'Lisa Brown',
    points: 7890,
    level: 16,
    change: -15,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: false
  }
];

export const mockBadges = [
  {
    id: 1,
    name: 'First Steps',
    description: 'Complete your first workout',
    icon: '👟',
    rarity: 'common' as const,
    earned: true,
    earnedDate: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Streak Master',
    description: 'Complete 10 workouts in a row',
    icon: '🔥',
    rarity: 'epic' as const,
    earned: true,
    earnedDate: '1 week ago'
  },
  {
    id: 3,
    name: 'Early Bird',
    description: 'Complete 5 morning workouts',
    icon: '🌅',
    rarity: 'rare' as const,
    earned: true,
    earnedDate: '3 days ago'
  },
  {
    id: 4,
    name: 'Century Club',
    description: 'Complete 100 workouts',
    icon: '💯',
    rarity: 'legendary' as const,
    earned: false
  },
  {
    id: 5,
    name: 'Consistency King',
    description: 'Work out every day for a week',
    icon: '👑',
    rarity: 'epic' as const,
    earned: true,
    earnedDate: '1 day ago'
  },
  {
    id: 6,
    name: 'Social Butterfly',
    description: 'Complete 5 challenges with friends',
    icon: '🦋',
    rarity: 'rare' as const,
    earned: false
  }
];

export const mockStats = [
  {
    label: 'Total Workouts',
    value: '87',
    icon: Target,
    iconColor: 'text-green-500'
  },
  {
    label: 'Hours Exercised',
    value: '45.5h',
    icon: Clock,
    iconColor: 'text-blue-500'
  },
  {
    label: 'Calories Burned',
    value: '12,450',
    icon: Flame,
    iconColor: 'text-orange-500'
  },
  {
    label: 'Badges Earned',
    value: '8',
    icon: Award,
    iconColor: 'text-yellow-500'
  },
  {
    label: 'Longest Streak',
    value: '15 days',
    icon: TrendingUp,
    iconColor: 'text-purple-500'
  },
  {
    label: 'Friends',
    value: '23',
    icon: Users,
    iconColor: 'text-pink-500'
  }
];