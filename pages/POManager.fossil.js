const { Fossil } = require('./fossil');
const { Homepage } = require('./homepage');

class POManager {
  constructor(page) {
    this.page = page;
    this.homepage = new Homepage(this.page);
    this.fossil = new Fossil(this.page);
  }

  getHomePage() {
    return this.homepage;
  }

  getFossilPage() {
    return this.fossil;
  }
}

module.exports = { POManager };
