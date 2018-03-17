<template>
  <div class="crypto-currency-widget-chart">
    <svg width="100%" height="100%">
      <path :d="lineAreaPath" stroke="#daa49d" stroke-width="2" fill="#daa49d"/>
      <path :d="linePath" stroke="#b0433c" stroke-width="2" fill="none"/>
      <!--<line x1="0" :y1="height" :x2="width" :y2="height" style="stroke:#386c45;stroke-width:4;"/>-->
    </svg>
  </div>
</template>

<script src="./script.js"></script>

<!--<style src="./style.less" lang="less"></style>-->
