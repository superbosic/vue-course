<template>
  <div :class="{'autocomplete': true, 'active': isActive}">
    <input
      v-model="search"
      @input="searchChange"
      @click.prevent="setActive(true)"
      type="text"
      class="autocomplete-input"/>
    <div v-show="items.length > 0" class="autocomplete-result">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click.stop="selectItem(item)"
        class="autocomplete-result__item">
          <div class="autocomplete-result__item-text"><slot :item="item">{{item[textName]}}</slot></div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.less" lang="less"></style>
