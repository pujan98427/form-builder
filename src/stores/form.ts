import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useformStore = defineStore('form', () => {
  const fieldModal = ref<boolean>(false)
  const fieldIndex = ref<string>('')
  const formFieldTypes = ref([
    {
      type: 'Text',
      id: 'text'
    },
    {
      type: 'Email',
      id: 'email'
    },
    {
      type: 'Textarea',
      id: 'textarea'
    },
    {
      type: 'Number',
      id: 'number'
    },
    {
      type: 'Phone',
      id: 'phone'
    },
    {
      type: 'Radio',
      id: 'radio'
    },
    {
      type: 'Checkbox',
      id: 'checkbox'
    },

    {
      type: 'Select',
      id: 'select'
    }
  ])
  const custom_field = useLocalStorage('customField', {
    title: '',
    slug: '',
    is_active: true,
    form_fields: [
      {
        label: 'Your Name',
        slug: 'name',
        type: {
          type: 'Text',
          id: 'text'
        },
        placeholder: 'eg:John Doe',
        hint: 'Enter your name',
        description: '',
        is_required: true,
        is_active: true
      },
      {
        label: 'Your Email',
        slug: 'email',
        type: {
          type: 'Email',
          id: 'text'
        },
        placeholder: 'eg: johndoe@gmail.com',
        hint: 'Enter your Email',
        description: '',
        is_required: true,
        is_active: true
      }
    ]
  })

  const formField = useLocalStorage('formField', {
    label: '',
    slug: '',
    type: {},
    options: [],
    placeholder: '',
    hint: '',
    description: '',
    is_required: true,
    is_active: true
  })
  function formEdit(index) {
    fieldIndex.value = index
    formEdit.value = custom_field.value.form_fields[index]
    fieldModal.value = !fieldModal.value
  }
  function toggleFieldModal() {
    formField.value = {
      label: '',
      slug: '',
      type: {},
      options: [],
      placeholder: '',
      hint: '',
      description: '',
      is_required: true,
      is_active: true
    }
    fieldModal.value = !fieldModal.value
  }
  function addFormField() {
    if (fieldIndex.value !== '') {
      custom_field.value.form_fields[fieldIndex.value] = formField.value
      fieldModal.value = !fieldModal.value
      return
    }
    custom_field.value.form_fields.push(formField.value)
    fieldModal.value = !fieldModal.value
  }

  const addOption = () => {
    formField.value.options.push({
      label: ''
    })
  }

  watch(
    () => formField.value.type?.id,
    (newValue) => {
      if (['radio', 'checkbox', 'select'].includes(newValue)) {
        addOption()
        addOption()
        return
      }

      formField.value.options = []
    }
  )
  const removeOption = (index) => {
    formField.value.options.splice(index, 1)
  }
  const removeFormField = (index) => {
    custom_field.value.form_fields.splice(index, 1)
  }

  return {
    formFieldTypes,
    custom_field,
    addOption,
    removeOption,
    fieldModal,
    formField,
    removeFormField,
    formEdit,
    toggleFieldModal,
    addFormField
  }
})
