import { createTest, destroyVM } from '../util';
import PanelBar from 'packages/panel-bar';

describe('PanelBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PanelBar, true);
    expect(vm.$el).to.exist;
  });
});

