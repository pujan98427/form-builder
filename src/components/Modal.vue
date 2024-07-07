<script setup lang="ts">
import CrossSvg from '../components/svg/CrossSvg.vue'
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  maxWidth: {
    type: String,
    default: '',
    required: false
  },
  maxHeight: {
    type: String,
    default: '',
    required: false
  },
  fullHeight: {
    type: Boolean,
    default: false,
    required: false
  },
  overflowTrue: {
    type: String,
    default: '',
    required: false
  }
})
const emits = defineEmits(['closeModal'])

const closeDialog = () => {
  return emits('closeModal')
}
</script>

<template>
  <div class="fixed z-[99999] top-0 left-0 bottom-0 right-0">
    <div class="flex justify-center relative z-1 items-center h-full w-full p-4">
      <div
        class="overlay absolute z-0 top-0 left-0 right-0 bottom-0 bg-base-100 opacity-30 transition-all duration-300 ease-in-out"
        @click.prevent="closeDialog"
      ></div>
      <div
        class="w-full small-scroll max-h-[calc(100vh_-_30px)]"
        :class="[
          props.maxWidth == '' ? 'max-w-[824px]' : props.maxWidth,
          props.overflowTrue == '' ? 'overflow-y-auto' : props.maxWidth,
          props.fullHeight == true ? 'h-full' : ''
        ]"
      >
        <div
          class="bg-white relative rounded-2xl p-8"
          :class="props.maxHeight == '' ? 'min-h-[440px]' : props.maxHeight"
        >
          <h3 class="text-xl" v-if="props.title">
            {{ props.title }}
          </h3>
          <button
            class="text-alert-red hover:opacity-70 absolute top-[22px] right-[22px]"
            @click.prevent="closeDialog"
          >
            <CrossSvg />
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
