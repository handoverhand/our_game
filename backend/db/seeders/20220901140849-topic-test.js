module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Topics', [{
      title: 'Google',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'JavaScript',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Elbrus',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
