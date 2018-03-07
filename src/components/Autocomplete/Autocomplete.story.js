import Vue from 'vue';
import {storiesOf} from '@storybook/vue';

import Autocomplete from './index.vue';
import items from '../../../mock/Autocomplete';

const getItems = (text) => new Promise(res => {
  setTimeout(() => res(items.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)), 1000);
});

const getItemsAbort = (text) => {
  Promise.prototype.abort = function() {
    console.log('abort');
  };

  return new Promise(res => {
    setTimeout(() => res(items.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)), 1000);
  });
};

storiesOf('Autocomplete', module)
  .add('display', () => ({
    components: {Autocomplete},
    data: () => ({
      getItems: getItems,
      item: null
    }),
    template: `<autocomplete
                  v-model="item"
                  :getItems="getItems"
                  textName="name">
                </autocomplete>`
  }))
  .add('display with default value', () => ({
    components: {Autocomplete},
    data: () => ({
      getItems: getItems,
      item: {"name": "Belize", "code": "BZ"}
    }),
    template: `<autocomplete
                  v-model="item"
                  :getItems="getItems"
                  textName="name">
                </autocomplete>`
  }))
  .add('display customizable item', () => ({
    components: {Autocomplete},
    data: () => ({
      getItems: getItems,
      item: null
    }),
    template: `<autocomplete
                  v-model="item"
                  :getItems="getItems"
                  textName="name">
                  <div slot-scope="{item}">
                    <strong>{{item.name}}</strong>
                    ({{item.code}})
                  </div>
                </autocomplete>`
  }))
  .add('getItems with abort method', () => ({
    components: {Autocomplete},
    data: () => ({
      getItems: getItemsAbort,
      item: null
    }),
    template: `<autocomplete
                  v-model="item"
                  :getItems="getItems"
                  textName="name">
                  <div slot-scope="{item}">
                    <strong>{{item.name}}</strong>
                    ({{item.code}})
                  </div>
                </autocomplete>`
  }));
