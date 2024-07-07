<script setup lang="ts">
interface PropsInterface {
  modelValue: string | object
  name?: string
  value?: string
  label?: string
  checked?: boolean
}

const props = withDefaults(defineProps<PropsInterface>(), {
  value: 'yes'
})

const emit = defineEmits(['update:modelValue'])

function emitValue() {
  emit('update:modelValue', props.value)
}

const elementId = Math.random().toString(36).slice(2)
</script>

<template>
  <span class="inline-flex items-center gap-1.5">
    <input
      type="radio"
      :name="props.name"
      :id="elementId"
      :value="props.modelValue"
      class="h-5 w-5 cursor-pointer align-middle accent-[rgb(var(--primary-color-100))] radioUI focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2"
      @click="emitValue"
      :checked="props.checked || props.value === props.modelValue"
    />
    <!-- {{ props.value === props.modelValue }} -->
    <label :for="elementId" class="inline-block cursor-pointer text-sm font-medium text-base-100">
      <slot></slot>
    </label>
    <label :for="elementId" class="text-sm font-semibold text-base-100"> {{ $props.label }}</label>
  </span>
</template>
