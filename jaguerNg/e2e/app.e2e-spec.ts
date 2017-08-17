import { JaguerNgPage } from './app.po';

describe('jaguer-ng App', function() {
  let page: JaguerNgPage;

  beforeEach(() => {
    page = new JaguerNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
