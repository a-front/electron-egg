'use strict';

const { Controller } = require('ee-core');

/**
 * 特效 - 功能demo
 * @class
 */
class EffectController extends Controller {

  constructor(ctx) {
    super(ctx);
  }

}

EffectController.toString = () => '[class EffectController]';
module.exports = EffectController;  