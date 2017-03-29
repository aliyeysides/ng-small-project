import { PowersuitePremiumPage } from './app.po';

describe('powersuite-premium App', () => {
  let page: PowersuitePremiumPage;

  beforeEach(() => {
    page = new PowersuitePremiumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
