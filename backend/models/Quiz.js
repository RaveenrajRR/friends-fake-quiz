import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  creatorName: { type: String, required: true, trim: true, maxlength: 40 },
  shareCode: { type: String, required: true, unique: true, index: true },
  questionIds: [{ type: Number, required: true }],
  creatorAnswers: [{ questionId: Number, optionIndex: Number }],
  responses: [{
    respondentName: { type: String, required: true, trim: true, maxlength: 40 },
    answers: [{ questionId: Number, optionIndex: Number }],
    score: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Quiz', QuizSchema);
