import mongoose from 'mongoose';
import { EquipmentDocument, EquipmentModel, EquipmentSchema } from 'src/interfaces/mongoose.gen';

const equipmentSchema: EquipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model<EquipmentDocument, EquipmentModel>('Equipment', equipmentSchema);