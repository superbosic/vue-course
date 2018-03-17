<template>
  <div class="crypto-currency-widget-digital">
    <h3>{{title}}</h3>
    <span :class="{'price':true, 'inc': priceIsIncreased}">${{price.toLocaleString('ru')}}</span>
    <span :class="{'total':true, 'inc': totalIsIncreased}">({{total.toLocaleString('ru')}}%)</span>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.less" lang="less"></style>
