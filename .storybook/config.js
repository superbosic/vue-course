import { configure } from '@storybook/vue';
import '@storybook/addon-console';
import Vue from 'vue';

function loadStories() {
  // You can require as many stories as you need.
  require('../src/components/Autocomplete/Autocomplete.story.js');
  require('../src/components/CryptoCurrencyWidget/CryptoCurrencyWidget.story.js');
}

configure(loadStories, module);
