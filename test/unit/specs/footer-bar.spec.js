import { createTest, destroyVM } from '../util';
import FooterBar from 'packages/footer-bar';

describe('FooterBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(FooterBar, true);
    expect(vm.$el).to.exist;
  });
});

