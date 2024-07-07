<script setup lang="ts">
import { ref, watch } from 'vue'
import { Switch } from '@headlessui/vue'

interface propsInterface {
  modelValue?: boolean | 0 | 1
  isDefault?: boolean | 0 | 1
}

const props = withDefaults(defineProps<propsInterface>(), {
  modelValue: false,
  isDefault: false
})

const switchEnabled = ref<boolean>(!!props.modelValue)

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean | 0 | 1): void
}>()

watch(switchEnabled, (newValue) => {
  emit('update:modelValue', newValue)
})

// Watch for changes in the modelValue prop and update the internal state
watch(
  () => props.modelValue,
  (newVal) => {
    switchEnabled.value = !!newVal
  }
)
</script>

<template>
  <Switch
    v-model="switchEnabled"
    :class="[
      switchEnabled ? 'bg-primary-100' : 'bg-primary-10',
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2'
    ]"
    :disabled="props.isDefault"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="[
        switchEnabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
      ]"
    />
  </Switch>
</template>
