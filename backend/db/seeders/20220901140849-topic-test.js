module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Topics', [{
      title: 'Эльбрус',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'JS',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Вопросы от Карена',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
