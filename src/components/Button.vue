<script setup lang="ts">
import { computed } from 'vue'
interface ButtonProps {
  buttonType?: 'button' | 'submit' | 'reset'
  grow?: boolean
  classes?: string
  danger?: boolean
  outline?: boolean
  disabled?: boolean
}
const props = withDefaults(defineProps<ButtonProps>(), {
  buttonType: 'button',
  classess: '',
  glow: false,
  danger: false,
  outline: false,
  disabed: false
})
const classes = computed<string>(() => {
  let className = []
  if (props.grow) {
    className.push('w-full')
  }

  const classMap = {
    danger: 'bg-alert-red text-white border-alert-red hover:border-[#cf2323] hover:bg-[#cf2323]',
    outline:
      'text-base-70 border-base-30 shadow-1 hover:bg-primary-100 hover:text-white hover:border-primary-100',
    default: 'text-white border-primary-100 bg-primary-100 hover:bg-white hover:text-primary-100'
  }

  if (props.danger) {
    className.push(classMap.danger)
  } else if (props.outline) {
    className.push(classMap.outline)
  } else {
    className.push(classMap.default)
  }

  if (props.classes) {
    className.push([props.classes, className])
  }

  return className.join(' ').trim()
})

const emits = defineEmits<{
  (event: 'buttonClicked'): void
}>()

const emitElseSubmit = (): void => {
  if (props.buttonType !== 'submit') {
    emits('buttonClicked')
  }
}
</script>
<template>
  <button
    :type="props.buttonType"
    :disabled="props.disabled"
    :class="classes"
    @click="emitElseSubmit"
    class="group rounded px-6 py-2.5 text-sm border font-medium transition-all"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
