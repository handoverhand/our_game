module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Questions', [{
      topicId: '1',
      content: 'Самый сложный пятничный проект?',
      answer: 'Cудоку',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Сколько банок энергетика ежедневно потребляет Вадим Жданов aka Король вёрстки?',
      answer: '3',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Кто раздал наибольшее количество автографов в кампусе?',
      answer: 'Aдам',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Кто лучше всех играет в мафию?',
      answer: 'Лейла',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '1',
      content: 'Минимальный срок "академа" сейчас?',
      answer: '3 недели',
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
      content: 'Как называется наиболее известный метод в рамках концепции AJAX?',
      answer: 'fetch api',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '2',
      content: 'Перечислите 3 основных хука React',
      answer: 'usestate, useeffect, usecontext',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Представителей какого города в Эльбрусе больше всего?',
      answer: 'Саратов',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Средняя зарплата в Саратове?',
      answer: '19000',
      price: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Сколько часов в сутки Карен страдает от осознания собственной беспомощности?',
      answer: '25',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Во сколько Карен уходил домой на первой фазе (среднее время)?',
      answer: '23:00',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topicId: '3',
      content: 'Во сколько Карен уходит домой на второй фазе (среднее время)?',
      answer: '22:45',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
