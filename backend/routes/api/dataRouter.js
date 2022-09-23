const router = require('express').Router();
const { Question, Topic, User } = require('../../db/models');

// Отправляет массив со студентами с азпрашиваемой фазе
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (error) {
    res.json({ success: false });
  }
});

router.get('/topics', async (req, res) => {
  try {
    const topics = await Topic.findAll();
    res.json(topics);
  } catch (error) {
    res.json({ success: false });
  }
});

router.get('/actualscore', async (req, res) => {
  try {
    const { id } = req.session.user;
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    res.json({ success: false });
  }
});

router.put('/user', async (req, res) => {
  const { price } = req.body;
  try {
    const user = await User.findOne({
      where: { id: req.session.user.id },
    });
    const incrementResult = await user.increment('score', {
      by: Number(price),
    });
    res.json(incrementResult);
  } catch (error) {
    res.json({ success: false });
  }
});

module.exports = router;
