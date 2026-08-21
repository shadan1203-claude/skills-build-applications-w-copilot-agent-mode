import mongoose, { Schema } from 'mongoose';

const options = { timestamps: true };

export const User = mongoose.models.User || mongoose.model('User', new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  fitnessLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
}, options));

export const Team = mongoose.models.Team || mongoose.model('Team', new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, options));

export const Activity = mongoose.models.Activity || mongoose.model('Activity', new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true, trim: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  calories: { type: Number, min: 0 },
  completedAt: { type: Date, required: true },
}, options));

export const LeaderboardEntry = mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  points: { type: Number, required: true, min: 0, default: 0 },
  rank: { type: Number, required: true, min: 1 },
}, options));

export const Workout = mongoose.models.Workout || mongoose.model('Workout', new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  exercises: [{ type: String, required: true }],
}, options));
