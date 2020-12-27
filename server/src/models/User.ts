import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
});

export default mongoose.model<User>('User', UserSchema);
