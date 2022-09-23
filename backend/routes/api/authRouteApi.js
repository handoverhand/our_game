const authRouterApi = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

// Роутер "ЛОГИ" по ресту

authRouterApi.post('/auth/login', async (req, res) => {
  if (req.body.login.length > 4 && req.body.password.length > 7) {
    let user;
    try {
      user = await User.findOne({ where: { login: req.body.login } });

      if (!user) {
        res.json({ message: 'Нет пользователя с таким логин и/или паролем.' });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    try {
      const compPass = await bcrypt.compare(req.body.password, user.password);

      if (!compPass) {
        res.json({ message: 'Неверный логин и/или пароль.' });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    req.session.user = {
      id: user.id,
      login: user.login,
      score: user.score,
    };

    res.json({ message: 'success', user });
  } else {
    res.json({ message: 'Слишком короткий логин и/или пароль.' });
  }
});

authRouterApi.post('/auth/reg', async (req, res) => {
  try {
    const { login, password, checkPassword } = req.body;
    const user = await User.findOne({ where: { login } });

    if (user) {
      res.json({
        message: 'Пользователем с таким логин и/или паролем уже существует.',
      });
      return;
    }

    if (checkPassword !== password) {
      res.json({ message: 'Пароли не совпадают.' });
      return;
    }

    if (password.length < 7) {
      res.json({ message: 'Пароль должен быть больше 7-ми символов' });
      return;
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, password: hash, score: 0 });

    req.session.user = {
      id: newUser.id,
      login: newUser.login,
      score: newUser.score,
    };
    res.json({ message: 'success', user });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

// Роутер "ЛОГАУТА" с удалением сессии
authRouterApi.get('/auth/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.json({ error: 'Не удалось выйти' });
      return;
    }

    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

authRouterApi.get('/', async (req, res) => {
  if (req.session.user) {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    res.json({
      isAdmin: true,
      login: req.session.user.login,
      score: user.score,
    });
  } else {
    res.json({ isAdmin: false });
  }
});

authRouterApi.get('/top', async (req, res) => {
  try {
    const top = await User.findAll({ order: [['score', 'DESC']], raw: true });
    res.json({ top });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = authRouterApi;
