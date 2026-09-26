import express from 'express';
import { nanoid } from 'nanoid';
import Quiz from '../models/Quiz.js';
import { questions } from '../data/questions.js';

const router = express.Router();

router.get('/questions', (_req, res) => res.json(questions.map(({ correctIndex, ...q }) => q)));

router.post('/prepare', (_req, res) => {
  const selected = [...questions].sort(() => Math.random() - 0.5).slice(0, 20);
  res.json({ questionIds: selected.map(q => q.id), questions: selected.map(({ correctIndex, ...q }) => q) });
});

router.post('/', async (req, res) => {
  try {
    const { creatorName, questionIds, creatorAnswers } = req.body;
    if (!creatorName?.trim()) return res.status(400).json({ message: 'Creator name is required' });
    if (!Array.isArray(questionIds) || questionIds.length !== 20) return res.status(400).json({ message: 'Exactly 20 questions are required' });
    if (!Array.isArray(creatorAnswers) || creatorAnswers.length !== 20) return res.status(400).json({ message: 'Answer all 20 creator questions' });
    const validIds = questionIds.every(id => questions.some(q => q.id === Number(id)));
    if (!validIds) return res.status(400).json({ message: 'Invalid question set' });
    const quiz = await Quiz.create({ creatorName: creatorName.trim(), shareCode: nanoid(8), questionIds, creatorAnswers });
    res.status(201).json({ id: quiz._id, shareCode: quiz.shareCode, creatorName: quiz.creatorName, questionIds: quiz.questionIds });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.get('/:shareCode', async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ shareCode: req.params.shareCode });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    const selected = quiz.questionIds.map(id => questions.find(q => q.id === id)).filter(Boolean);
    res.json({ id: quiz._id, shareCode: quiz.shareCode, creatorName: quiz.creatorName, questions: selected.map(({ correctIndex, ...q }) => q) });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.post('/:shareCode/answers', async (req, res) => {
  try {
    const { respondentName, answers } = req.body;
    const quiz = await Quiz.findOne({ shareCode: req.params.shareCode });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    if (!respondentName?.trim()) return res.status(400).json({ message: 'Your name is required' });
    if (!Array.isArray(answers) || answers.length !== 20) return res.status(400).json({ message: 'Please answer all 20 questions' });
    let score = 0;
    for (const a of answers) {
      const target = quiz.creatorAnswers.find(x => Number(x.questionId) === Number(a.questionId));
      if (target && Number(a.optionIndex) === Number(target.optionIndex)) score++;
    }
    quiz.responses.push({ respondentName: respondentName.trim(), answers, score });
    await quiz.save();
    res.json({ score, total: 20, creatorName: quiz.creatorName, shareCode: quiz.shareCode });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

router.get('/:shareCode/results', async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ shareCode: req.params.shareCode }).select('creatorName shareCode responses createdAt');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json({ creatorName: quiz.creatorName, shareCode: quiz.shareCode, createdAt: quiz.createdAt, responses: quiz.responses.map(r => ({ respondentName: r.respondentName, score: r.score, createdAt: r.createdAt })) });
  } catch (e) { res.status(500).json({ message: e.message }); }
});

export default router;
