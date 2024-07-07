import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
  const custom_field = ref({
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

  const formField = ref({
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

  return {
    formFieldTypes,
    custom_field,
    fieldModal,
    formField,
    formEdit,
    toggleFieldModal,
    addFormField
  }
})
