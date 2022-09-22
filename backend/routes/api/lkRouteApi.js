const lkRouterApi = require('express').Router();
const { User } = require('../../db/models');

// Отправляет массив со студентами с азпрашиваемой фазе
lkRouterApi.put('/newPassword', async (req, res) => {
  try {
    const { password } = req.body;
    if (password.length > 7) {
      const { login } = req.session.user;
      // const newPassword = await bcrypt.hash(password, 10);
      await User.update({ password }, { where: { login } });
      res.json({ update: true });
    } else {
      res.json({ update: 'Пароль должен быть более 8 символов' });
    }
  } catch (error) {
    res.json({ update: false });
  }
});

module.exports = lkRouterApi;
