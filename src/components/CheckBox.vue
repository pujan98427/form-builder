<script setup lang="ts">
interface PropsInterface {
  label?: string
  cssClass?: string
  checked?: boolean
  modelValue?: Object | boolean | string | number
}

const props = defineProps<PropsInterface>()

defineEmits(['update:modelValue'])
const unique: string = Math.random().toString(36).slice(2)
</script>

<template>
  <div class="inline-flex items-center">
    <span class="inline-flex items-center">
      <input
        class="hidden simple-checkbox"
        type="checkbox"
        @change="$emit('update:modelValue', $event.target.checked)"
        :value="unique"
        :id="unique"
        :checked="props.checked"
      />
      <label
        :for="unique"
        class="rounded border bg-white border-base-30 w-5 h-5 cursor-pointer"
      ></label>
    </span>
    <label
      v-if="props.label"
      :for="unique"
      class="text-base-100 ml-3 font-medium text-sm cursor-pointer"
      :class="cssClass"
    >
      {{ props.label }}
    </label>
  </div>
</template>
