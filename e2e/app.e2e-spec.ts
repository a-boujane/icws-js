import { IcwsJsPage } from './app.po';

describe('icws-js App', function() {
  let page: IcwsJsPage;

  beforeEach(() => {
    page = new IcwsJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
