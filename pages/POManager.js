const { Type } = require('./type');
const { Homepage } = require('./homepage');

class POManager {
  constructor(page) {
    this.page = page;
    this.homepage = new Homepage(this.page);
    this.type = new Type(this.page);
  }

  getHomePage() {
    return this.homepage;
  }

  getTypePage() {
    return this.type;
  }
}

module.exports = { POManager };
