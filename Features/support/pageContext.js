let page;

module.exports = {
  setPage: (p) => {
    page = p;
  },
  getPage: () => {
    if (!page) {
      throw new Error('Page not initialized');
    }
    return page;
  }
};