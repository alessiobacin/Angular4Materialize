import { NewbizPage } from './app.po';

describe('newbiz App', () => {
  let page: NewbizPage;

  beforeEach(() => {
    page = new NewbizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
