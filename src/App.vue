<script setup lang="ts">
import MoneyInput from './components/MoneyInput.vue';
</script>

<template>
  <h1>Splitteroo</h1>
  <main>
    <label>Total Bill</label>
    <MoneyInput />
    
    <br />
    
    <label>Tax & Tip</label>
    <MoneyInput :editable="false"></MoneyInput>
  </main>
</template>

<style scoped>
h1 {
  color: var(--primary-bg-color);
  font-size: calc(var(--grid) * 4);
  line-height: calc(var(--grid) * 5);
  margin: var(--side-padding);
}

main {
  --border-radius: calc(var(--grid) * 3);
  background: var(--primary-bg-color);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 0 var(--side-padding);
}

label {
  display: inline-block;
  color: var(--secondary-fg-color);
  width: var(--label-width);
}

</style>
