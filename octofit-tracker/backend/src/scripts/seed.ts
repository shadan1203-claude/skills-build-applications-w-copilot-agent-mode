import { connectDatabase, disconnectDatabase } from '../config/database.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [ada, grace, octofit, workouts] = await Promise.all([
      User.create({ name: 'Ada Lovelace', email: 'ada@example.com', fitnessLevel: 'advanced' }),
      User.create({ name: 'Grace Hopper', email: 'grace@example.com', fitnessLevel: 'intermediate' }),
      Team.create({ name: 'OctoFit Pioneers', description: 'Consistent movement and friendly competition.' }),
      Workout.insertMany([
        {
          name: 'Morning Mobility',
          description: 'A gentle routine to improve mobility and start the day.',
          difficulty: 'beginner',
          durationMinutes: 20,
          exercises: ['Cat-cow', 'Worlds greatest stretch', 'Bodyweight squat'],
        },
        {
          name: 'Strength Circuit',
          description: 'A full-body circuit for building strength and endurance.',
          difficulty: 'intermediate',
          durationMinutes: 35,
          exercises: ['Push-ups', 'Reverse lunges', 'Plank', 'Mountain climbers'],
        },
      ]),
    ]);

    await Team.updateOne({ _id: octofit._id }, { $set: { members: [ada._id, grace._id] } });
    await Activity.insertMany([
      { user: ada._id, type: 'Running', durationMinutes: 30, calories: 320, completedAt: new Date() },
      { user: grace._id, type: 'Cycling', durationMinutes: 45, calories: 280, completedAt: new Date() },
    ]);
    await LeaderboardEntry.insertMany([
      { user: ada._id, team: octofit._id, points: 1240, rank: 1 },
      { user: grace._id, team: octofit._id, points: 980, rank: 2 },
    ]);

    console.log(`Database seeding complete: 2 users, 1 team, 2 activities, 2 leaderboard entries, ${workouts.length} workouts`);
    await disconnectDatabase();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
