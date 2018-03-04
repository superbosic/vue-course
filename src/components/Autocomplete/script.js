import Vue from 'vue';
import component from 'vue-class-component';
import debounce from 'lodash.debounce';

class Autocomplete extends Vue {
  name = 'autocomplete';
  search = '';
  items = [];
  result = {};
  loading = false;
  isActive = false;
  searchChange = debounce(this.loadItems, 200);

  mounted () {
    document.addEventListener('click', this.searchBlur, true);
  }

  get selectedItem () {
    return this.value;
  }

  set selectedItem (value) {
    this.$emit('input', value);
  }

  get itemText () {
    return this.selectedItem ? this.selectedItem[this.textName] : '';
  }

  valueChange () {
    this.search = this.itemText;
  }

  loadItems () {
    if (this.loading && typeof this.result.abort === 'function') {
      this.result.abort();
    }

    if (!this.search) return;

    this.loading = true;

    this.result = this.getItems(this.search)
      .then(response => this.items = response)
      .finally(() => this.loading = false);
  }

  setActive (active) {
    this.isActive = active;
  }

  searchBlur () {
    if (!this.value) {
      this.search = '';
    } else {
      this.search = this.itemText;
    }

    this.setActive(false);
  }

  selectItem (item) {
    this.selectedItem = item;
    this.setActive(false);
  }

  destroyed () {
    document.removeEventListener('click', this.searchBlur, true);
  }
}

export default component({
  props: {
    value: Object,
    getItems: {
      type: Function,
      required: true
    },
    textName: {
      type: String,
      required: true
    }
  },
  watch: {
    value: {
      handler: function(...args) {
        this.valueChange(...args);
      },
      immediate: true
    }
  }
})(Autocomplete)
