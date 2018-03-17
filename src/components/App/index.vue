<template>
  <div id="app">
    <router-view/>
    <crypto-currency-widget
      coin="BTC"
      :maxPricesCount="25"
      :endpoint="coins">
    </crypto-currency-widget>
    <crypto-currency-widget
      coin="ETH"
      :maxPricesCount="5"
      :endpoint="coins">
    </crypto-currency-widget>
  </div>
</template>

<script src="./script.js"></script>
