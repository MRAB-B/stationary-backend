import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'notebooks' | 'pens' | 'paper' | 'accessories';
}

const ProductSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: {
    type: String,
    enum: ['notebooks', 'pens', 'paper', 'accessories'],
    required: true,
  },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
