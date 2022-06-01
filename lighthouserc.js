module.exports = {
  ci: {
    collect: {
      url: ['https://www.americastestkitchen.com/', 'https://www.cookscountry.com/', 'https://www.cooksillustrated.com/', 'https://www.americastestkitchen.com/reviews', 'https://www.americastestkitchen.com/articles', 'https://www.americastestkitchen.com/recipes/13333-cranberry-curd-tart-with-almond-crust', 'https://www.americastestkitchen.com/favorites'],
      puppeteerScript: 'puppeteer-script.js',
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lighthouse-tracker-atk-55249.herokuapp.com',
      token: 'f4571a87-5c90-4ec8-a6ee-3958d0754ecc',
    },
  },
};
