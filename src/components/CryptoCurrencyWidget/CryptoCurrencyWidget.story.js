import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import CryptoCurrencyWidget from './index.vue';
import coins from '../../api/Coins';

storiesOf('CryptoCurrencyWidget', module)
  .add('BTC - последние 25 цен; ETH - последние 15 цен; После закрытия соединения оно автоматически восстанавливается(видно в консоли).', () => ({
    components: {CryptoCurrencyWidget},
    data: () => ({
      coins: coins
    }),
    template: `<div style="width:380px;">
          <crypto-currency-widget
            coin="BTC"
            :maxPricesCount="25"
            :endpoint="coins">
          </crypto-currency-widget>
          <crypto-currency-widget
            coin="ETH"
            :maxPricesCount="15"
            :endpoint="coins">
          </crypto-currency-widget>

</div>`
  }));
