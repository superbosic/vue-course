import Vue from 'vue';
import component from 'vue-class-component';

const PADDING_TOP = 5;
const PADDING_BOTTOM = 10;

class CryptoCurrencyWidgetChart extends Vue {
  name = 'crypto-currency-widget-chart';
  width = 0;
  height = 0;

  mounted () {
    this.width = this.$el.offsetWidth;
    this.height = this.$el.offsetHeight;
  }

  get minPrice () {
    return Math.min(...this.priceList);
  }

  get maxPrice () {
    return Math.max(...this.priceList);
  }

  get step () {
    return this.width / (this.maxPricesCount - 1);
  }

  get points () {
    return this.priceList.map((price, index) => this.getPoint(index * this.step, this.getY(price)));
  }

  get linePath () {
    return this.points.length > 1
      ? `M ${this.points[0]} L ${this.points.slice(1).join('')}`
      : '';
  }

  get lineAreaPath () {
    const startPoint = this.getPoint(0, this.height);
    const endPoint = this.getPoint((this.points.length - 1) * this.step, this.height);

    return this.points.length > 1
      ? `M ${startPoint} L ${this.points.join('')} ${endPoint}`
      : '';
  }

  get yScale () {
    return (this.height - PADDING_BOTTOM * 3) / (this.maxPrice - this.minPrice)/* - PADDING*/;
    // return this.height / (this.maxPrice - this.minPrice)/* - PADDING*/;
    // return this.height / this.maxPrice;
  }

  getY (price) {
    // return Math.abs(price - this.minPrice - this.maxPrice + PADDING) * this.yScale;
    return (Math.abs(price - this.maxPrice) * this.yScale) + PADDING_TOP;
  }

  getPoint (x, y) {
    return `${x},${y} `;
  }
}

export default component({
  props: {
    priceList: {
      type: Array,
      required: true
    },
    maxPricesCount: {
      type: Number,
      required: true
    }
  }
})(CryptoCurrencyWidgetChart)
