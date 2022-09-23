module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Questions', [{
      topicId: '1',
      content: 'Как называются картинки/анимации на основе логотипа Google, отображаемые на поисковой странице?',
      answer: 'Дудлы',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Правда ли, что в Google работают козы?',
      answer: 'Правда',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Правда ли, что Google предоставляет своим работникам бесплатные презервативы?',
      answer: 'Правда',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Правда ли, что если сотрудник Google умирает, его ближайшие родственники ещё 10 лет получают 50% его зарплаты?',
      answer: 'Правда',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Как зовут основателя Google?',
      answer: 'Виталя',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '2',
      content: 'Пустая строка - это true или false?',
      answer: 'false',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '2',
      content: 'Как в JS обозначается оператор нулевого слияния?',
      answer: '??',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '2',
      content: 'Каким будет результат выполнения кода: "console.log(!!null)"?',
      answer: 'false',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '2',
      content: 'Каким будет результат выполнения кода: "console.log(true + true)"?',
      answer: '2',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '2',
      content: 'Как называется наиболее известный метод в рамках концепции AJAX? Подсказка: это вопрос от Витали.',
      answer: 'fetch',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Гуру фетчей?',
      answer: 'Виталя',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Богиня реакта?',
      answer: 'Аня',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Кто лучше всех играет в Мафию?',
      answer: 'Лейла',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Кто раздал наибольшее количество автографов в кампусе?',
      answer: 'Адам',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Саратов или Челябинск?',
      answer: 'Деритесь',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
