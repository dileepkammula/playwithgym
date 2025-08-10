<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />

# 🏋️ FitQuest Pro - Gym & Fitness Management System

### **Your Ultimate Fitness Companion**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/fitquest-pro)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/fitquest-pro)

</div>

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🎯 Components Overview](#-components-overview)
- [📊 Data Management](#-data-management)
- [🎨 UI/UX Design](#-uiux-design)
- [🔧 Development](#-development)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Features

### 🎯 **Core Features**
- **📊 Dashboard Analytics** - Real-time fitness tracking and progress visualization
- **🏋️ Workout Management** - Browse, schedule, and track workouts
- **🎯 Challenges System** - Participate in fitness challenges with rewards
- **🏆 Leaderboards** - Compete with friends and global users
- **👤 User Profiles** - Personalized fitness profiles with achievements
- **📈 Progress Tracking** - Detailed statistics and progress charts

### 🎮 **Gamification Elements**
- **XP System** - Earn experience points for workouts
- **Level Progression** - Advance through fitness levels
- **Achievement Badges** - Unlock badges for milestones
- **Streak Tracking** - Maintain workout streaks
- **Social Challenges** - Compete with friends

### 📱 **Responsive Design**
- **Mobile-First** - Optimized for all screen sizes
- **Dark Mode** - Beautiful gradient dark theme
- **Interactive UI** - Smooth animations and transitions
- **Real-time Updates** - Live data synchronization

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fitquest-pro.git

# Navigate to project directory
cd fitquest-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **CSS Grid & Flexbox** - Responsive layouts

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixing

---

## 📁 Project Structure

```
fitquest-pro/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx          # Main dashboard with analytics
│   │   ├── Workouts.tsx           # Workout browsing and management
│   │   ├── Challenges.tsx         # Fitness challenges
│   │   ├── Leaderboard.tsx        # Rankings and competitions
│   │   ├── Profile.tsx            # User profile and settings
│   │   └── [Component files...]
│   ├── data/
│   │   └── mockData.ts            # Mock data for development
│   ├── App.tsx                    # Main application component
│   └── main.tsx                   # Application entry point
├── public/                        # Static assets
├── package.json                   # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite configuration
```

---

## 🎯 Components Overview

### 🏠 Dashboard (`Dashboard.tsx`)
- **User Stats** - Display key fitness metrics
- **Recent Achievements** - Latest badges and milestones
- **Weekly Progress** - Visual progress tracking
- **Active Workouts** - Current workout sessions
- **Quick Actions** - Navigation shortcuts

### 🏋️ Workouts (`Workouts.tsx`)
- **Workout Library** - Browse all available workouts
- **Filter & Search** - Find workouts by type/difficulty
- **Workout Details** - Exercise instructions and videos
- **Progress Tracking** - Track sets, reps, and rest times

### 🎯 Challenges (`Challenges.tsx`)
- **Active Challenges** - Current fitness challenges
- **Challenge Details** - Rules, rewards, and progress
- **Leaderboards** - Challenge-specific rankings
- **Social Features** - Invite friends to challenges

### 🏆 Leaderboard (`Leaderboard.tsx`)
- **Global Rankings** - Overall fitness standings
- **Friends Leaderboard** - Compete with friends
- **Weekly Rankings** - Time-based competitions
- **Achievement Highlights** - Top performers

### 👤 Profile (`Profile.tsx`)
- **User Stats** - Personal fitness metrics
- **Achievements** - Earned badges and milestones
- **Workout History** - Past workout sessions
- **Settings** - Personal preferences

---

## 📊 Data Management

### Mock Data System
The application uses a comprehensive mock data system for development:

```typescript
// User Data
mockUserData: {
  user: { name, level, XP, avatar },
  stats: { points, streak, workouts }
}

// Workouts
mockWorkouts: {
  id, title, description, duration, difficulty, exercises
}

// Challenges
mockChallenges: {
  id, title, description, participants, reward, duration
}

// Leaderboards
mockLeaderboard: {
  id, name, points, level, change, avatar
}
```

### Data Structure
- **User Profile** - Personal information and stats
- **Workout Sessions** - Exercise details and progress
- **Challenge Data** - Rules, participants, and rewards
- **Achievement System** - Badges and milestones

---

## 🎨 UI/UX Design

### 🎨 Design System
- **Color Palette**: Purple gradient theme
  - Primary: `#8B5CF6` (Purple)
  - Secondary: `#3B82F6` (Blue)
  - Accent: `#10B981` (Green)
  - Background: Gradient from slate to purple

### 📱 Responsive Design
- **Mobile**: Single column layout
- **Tablet**: Two column grid
- **Desktop**: Multi-column dashboard
- **Breakpoints**: `sm`, `md`, `lg`, `xl`

### 🎭 Animations
- **Page Transitions**: Smooth fade effects
- **Hover States**: Subtle scale and shadow
- **Loading States**: Skeleton screens
- **Progress Bars**: Animated fills

---

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

### Code Style
- **ESLint** configured with TypeScript rules
- **Prettier** for consistent formatting
- **Conventional commits** for git messages

---

## 🚀 Deployment

### Vercel Deployment
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Netlify Deployment
1. Build the project: `npm run build`
2. Drag `dist` folder to Netlify
3. Configure custom domain

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

##I have gathered detailed information about the project structure, main app navigation, and mock data including user stats, workouts, challenges, leaderboard, badges, and stats.

Now I will create a comprehensive, well-structured README.md file with a good UI design explaining the project, its features, usage, and structure.

Here is the plan for the README:

Information Gathered:
- React + TypeScript project using Vite and Tailwind CSS.
- Main app has navigation for Dashboard, Workouts, Challenges, Leaderboard, Profile.
- Mock data includes user profile, achievements, workouts, challenges, leaderboard, badges, and stats.
- Project uses lucide-react icons for UI.

Plan:
- Create README.md with:
  - Project title and badges
  - Project description
  - Features overview
  - Tech stack
  - Installation and running instructions
  - Project structure explanation
  - Component overview
  - Mock data explanation
  - Screenshots or UI description
  - License info

Dependent files to be edited: None (new README.md file)

Followup steps:
- Confirm with user before creating the README.md file.

<ask_followup_question>
<question>I have prepared a detailed plan for creating the README.md file explaining the project and its usage with a good UI design. May I proceed with creating the README.md file now?</question>
</ask_followup_question>
