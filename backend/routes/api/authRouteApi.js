const authRouterApi = require('express').Router();

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
    };

    res.json({ message: 'success', user });
  } else {
    res.json({ message: 'Слишком короткий логин и/или пароль.' });
  }
});

authRouterApi.post('/auth/reg', async (req, res) => {
  const { login, password, checkPassword } = req.body;

  let user;
  try {
    user = await User.findOne({ where: { login } });

    if (user) {
      res.json({
        message: 'Пользователем с таким логин и/или паролем уже существует.',
      });
      return;
    }
  } catch ({ message }) {
    res.json({ error: message });
    return;
  }

  try {
    if (checkPassword !== password) {
      res.json({ message: 'Пароли не совпадают.' });
      return;
    }
    if (password.length < 7) {
      res.json({ message: 'Пароль должен быть больше 7-ми символов' });
      return;
    }

    // const hash = await bcrypt.hash(password, 10);
    user = await User.create({ login, password, score: 0 });

    req.session.user = {
      id: user.id,
      login: user.login,
    };
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

module.exports = authRouterApi;
