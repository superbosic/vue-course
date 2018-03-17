import Vue from 'vue';
import component from 'vue-class-component';

class CryptoCurrencyWidgetDigital extends Vue {
  name = 'crypto-currency-widget-digital';

  get title () {
    return `${this.coin} - ${this.coin2}`;
  }
}

export default component({
  props: {
    coin: {
      type: String,
      required: true
    },
    coin2: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    priceIsIncreased: {
      type: Boolean,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    totalIsIncreased: {
      type: Boolean,
      required: true
    }
  }
})(CryptoCurrencyWidgetDigital)
