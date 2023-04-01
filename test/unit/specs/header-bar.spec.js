import { createTest, destroyVM } from '../util';
import HeaderBar from 'packages/header-bar';

describe('HeaderBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(HeaderBar, true);
    expect(vm.$el).to.exist;
  });
});

