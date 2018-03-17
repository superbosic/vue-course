import Vue from 'vue';
import component from 'vue-class-component';
import coins from '../../api/Coins';

class App extends Vue {
  name = 'App';

  get coins () {
    return coins;
  }

}

export default component({})(App);
