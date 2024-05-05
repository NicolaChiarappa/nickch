'use strict';

/**
 * testo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testo.testo');
