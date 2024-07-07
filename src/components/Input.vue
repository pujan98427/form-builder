<script setup lang="ts">
interface PropsInterface {
  placeholder?: string
  type?: string
  modelValue?: string | number
  inputPadding?: boolean
}

const props = withDefaults(defineProps<PropsInterface>(), {
  placeholder: '',
  type: 'text'
})

defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="rounded-lg shadow-1 h-11 border border-base-30 w-full text-base-100 placeholder-base-40 text-sm"
    :class="inputPadding ? '' : 'py-2.5 px-4'"
    :type="props.type"
    :placeholder="props.placeholder"
    v-bind="$attrs"
    :value="props.modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
