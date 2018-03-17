import Vue from 'vue';
import component from 'vue-class-component';
import CryptoCurrencyWidgetDigital from './CryptoCurrencyWidgetDigital/index.vue';
import CryptoCurrencyWidgetChart from './CryptoCurrencyWidgetChart/index.vue';

class CryptoCurrencyWidget extends Vue {
  name = 'crypto-currency-widget';
  coin2 = 'USD';
  price = 0;
  total = 0;
  firstPrice = -1;
  lastPrice = -1;
  priceList = [];
  totalIsIncreased = true;
  priceIsIncreased = true;

  created () {
    this.endpoint.subscribe(this.coin, this.onMessage);
  }

  onMessage (price) {
    this.price = price;

    if (this.firstPrice === -1) {
      this.firstPrice = this.price;
    } else {
      this.totalIsIncreased = this.price > this.firstPrice;
    }

    this.total = (this.price - this.firstPrice) / (this.firstPrice / 100);

    this.priceIsIncreased = this.price > this.lastPrice;
    this.lastPrice = this.price;

    if (this.priceList.length === this.maxPricesCount) {
      this.priceList = this.priceList.slice(1).concat([this.price]);
    } else {
      this.priceList.push(this.price);
    }
  }

  destroy () {
    this.endpoint.unsubscribe(this.coin, this.onMessage);
  }
}

export default component({
  props: {
    coin: {
      type: String,
      required: true
    },
    maxPricesCount: {
      type: Number,
      required: true
    },
    endpoint: {
      type: Object,
      required: true,
    }
  },
  components: {
    CryptoCurrencyWidgetDigital,
    CryptoCurrencyWidgetChart
  }
})(CryptoCurrencyWidget)
