'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model')


module.exports = {
  async up (queryInterface) {
	await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema)

	/**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {
	await queryInterface.drop(CUSTOMER_TABLE)

	/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
