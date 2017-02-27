import { Angular2StylingPage } from './app.po';

describe('angular2-styling App', () => {
  let page: Angular2StylingPage;

  beforeEach(() => {
    page = new Angular2StylingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
