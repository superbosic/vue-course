import Vue from 'vue';
import {shallow} from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Autocomplete from './index';
import items from '../../../mock/Autocomplete';

describe('Autocomplete.vue', () => {
  it('display result list', async (done) => {
    const wrapper = shallow(Autocomplete, {
      propsData: {
        getItems: () => Promise.resolve(items),
        textName: 'name'
      }
    });
    const input = wrapper.find('input');

    input.element.value = 'A';
    input.trigger('input');

    // await flushPromises(); Почему-то не работает, с setTimeout не очень хорошее решение

    setTimeout(() => {
      expect(wrapper.findAll('.autocomplete-result__item')).toHaveLength(29);
      done();
    }, 500);
  });

  it('default value', () => {
    let item = {"name": "Afghanistan", "code": "AF"};
    const wrapper = shallow(Autocomplete, {
      propsData: {
        getItems: () => Promise.resolve(items),
        textName: 'name',
        value: item,
      }
    });
    const input = wrapper.find('input');

    expect(input.element.value).toBe('Afghanistan');
  });

  it('emit input', (done) => {
    const wrapper = shallow(Autocomplete, {
      propsData: {
        getItems: () => Promise.resolve(items),
        textName: 'name'
      }
    });
    const input = wrapper.find('input');

    input.element.value = 'A';
    input.trigger('input');

    setTimeout(() => {
      wrapper.find('.autocomplete-result__item').trigger('click');

      expect(wrapper.emitted('input')).toEqual([[{"code": "AF", "name": "Afghanistan"}]]);

      done();
    }, 500);
  });
});
