'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        model: 'Boeing 737',
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Airbus A320',
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Boeing 777',
        capacity: 396,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Airbus A380',
        capacity: 853,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Embraer E190',
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airplanes', null, {modelNumber: ['Boeing 737', 'Airbus A320', 'Boeing 777', 'Airbus A380', 'Embraer E190']});
  }
};
