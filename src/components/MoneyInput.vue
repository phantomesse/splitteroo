<script lang="ts">
export default {
  data() {
    return { value: 0.00, focused: false }
  },
  props: {'editable': {
            type: Boolean,
            default: true
        }},
  methods: {
    onBlur(event: Event) {
      this.focused = false

      // Format money.
      const input = event.target as HTMLElement
      this.value = parseFloat((input.textContent || '').replace(',', ''))
      if (isNaN(this.value)) this.value = 0
      input.textContent = this.formatMoney(this.value)
    },
    formatMoney(value: number) {
      return value.toLocaleString('en-US', { minimumFractionDigits: 2 });
    }
  }
}
</script>

<template>
  <div :class="{ focused: focused }">
    $
    <span :contenteditable="editable" @focus="focused = true" @blur="onBlur">{{ formatMoney(value) }}</span>
  </div>
</template>

<style scoped>
div {
  --height: calc(var(--grid) * 4);
  align-items: center;
  width: fit-content;
  display: inline-flex;
  padding: 0 var(--grid);
  height: var(--height);
  border-radius: calc(var(--height) / 2);
}

.focused {
  background: var(--secondary-bg-color);
  color: var(--primary-color);
  font-weight: 600;
}

.focused input {
  color: var(--primary-color);
}
</style>
