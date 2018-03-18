<template>
  <div class="crypto-currency-widget">
    <template v-if="!loading">
      <crypto-currency-widget-digital
        :coin="coin"
        :coin2="coin2"
        :price="price"
        :priceIsIncreased="priceIsIncreased"
        :total="total"
        :totalIsIncreased="totalIsIncreased">
      </crypto-currency-widget-digital>
      <!--<crypto-currency-widget-chart :priceList="[0, 20, 5, 100, 35, 50, 25,37,12,45,78,34,56,23,45,57]" :maxPricesCount="16">-->
      <!--<crypto-currency-widget-chart :priceList="[9174, 9174, 9173, 9175, 9174]" :maxPricesCount="5">-->
      <crypto-currency-widget-chart :priceList="priceList" :maxPricesCount="maxPricesCount">
      </crypto-currency-widget-chart>
    </template>
    <pulse-loader :loading="loading"></pulse-loader>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.less" lang="less"></style>
