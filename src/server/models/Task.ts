import mongoose from "mongoose";
import { Schema, Model } from "mongoose";

mongoose.Promise = global.Promise;

const taskSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
    name: { type: String, required: true, },
    assignee: { type: String, default: '', },
    status: { type: String, required: true, },
    directory: { type: mongoose.Types.ObjectId, ref: 'Directory', },
    dueDate: { type: String, default: '', },
    fromHour: { type: Number, required: true, },
    toHour: { type: Number, required: true },
    priority: { type: String, required: true, },
    description: { type: String, default: '', },
    subtasks: { type: [String], default: [], },
    comments: [
        { type: mongoose.Types.ObjectId, required: true, ref: "Comment", default: [], },
    ],
},
);

export default
    mongoose.models.Task || mongoose.model('Task', taskSchema);