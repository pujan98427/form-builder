<script setup lang="ts">
import { ref } from 'vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import Modal from '../components/Modal.vue'
import RadioToggle from '../components/RadioToggle.vue'
import SwitchToggle from '../components/SwitchToggle.vue'
import DeleteSvg from '../components/svg/DeleteSvg.vue'
import DragSvg from '../components/svg/DragSvg.vue'
import { storeToRefs } from 'pinia'
import { useformStore } from '../stores/form'
import draggable from 'vuedraggable'
import VSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import AddSvg from '../components/svg/AddSvg.vue'
import CrossSvg from '../components/svg/CrossSvg.vue'
import CheckBox from '../components/CheckBox.vue'
const formStore = useformStore()
const { formFieldTypes, custom_field, fieldModal, formField, addFormField } = storeToRefs(formStore)

// function arrangeFields() {
//   console.log('arrangeFields')
// }
</script>

<template>
  <div>
    <div class="flex flex-col tablet-md:flex-row gap-4">
      <div class="basis-[200px] inline-flex items-center gap-1.5">
        <label class="text-sm font-semibold text-base-100" for="email_address"> Form Name </label>
      </div>

      <div class="flex-1">
        <Input class="w-full" placeholder="Form name" type="string" v-model="custom_field.title" />
      </div>
    </div>

    <div class="mt-6">
      <draggable
        group="formFields"
        v-model="custom_field.form_fields"
        item-key="id"
        @end="drag = false"
        @start="drag = true"
      >
        <template #item="{ element: fields, index: formIndex }">
          <div
            :key="formIndex"
            class="border border-base-30 border-b-0 last:border-b first:rounded-t-lg last:rounded-b-lg relative"
          >
            <span
              class="absolute top-2/4 bg-white text-base-50 -left-2.5 -translate-y-2/4 cursor-pointer hover:text-primary-100"
            >
              <DragSvg />
            </span>

            <div class="flex gap-4">
              <div class="flex-1 px-6 py-4">
                <div class="">
                  <label class="text-sm font-semibold text-base-100">{{ fields.label }} </label>
                  <span
                    v-if="fields.is_required"
                    class="ml-1.5 text-[12px] text-base-80 font-medium bg-base-20 inline-block py-0.5 px-2 rounded-2xl"
                    >Required</span
                  >
                </div>

                <Input
                  v-if="['text', 'number', 'email', 'phone'].includes(fields.type?.id)"
                  class="w-full mt-2"
                  :placehoder="fields.placeholder"
                  :type="fields.type?.id"
                />

                <textarea
                  v-else-if="fields.type?.id === 'textarea'"
                  class="w-full mt-2 border text-sm placeholder:text-base-40 border-base-30 rounded-lg small-scroll shadow-1 py-2.5 px-4 resize-none min-h-[80px]"
                ></textarea>
                <div class="flex items-center gap-4 mt-4" v-else-if="fields.type?.id === 'radio'">
                  <RadioToggle
                    v-for="(option, index) in fields.options"
                    :key="index"
                    :label="option.label"
                    :name="fields.label"
                  />
                </div>
                <div
                  class="flex items-center gap-4 mt-4"
                  v-else-if="fields.type?.id === 'checkbox'"
                >
                  <CheckBox
                    v-for="(option, index) in fields.options"
                    :key="index"
                    :label="option.label"
                    :name="fields.label"
                  />
                </div>

                <select
                  v-else-if="fields.type?.id === 'select'"
                  class="sass-ui mt-2 text-sm border border-base-30 pl-4 py-[7px] pr-8 w-full rounded-lg"
                >
                  <option value="">{{ fields.placeholder }}</option>
                  <option
                    v-for="(option, index) in fields.options"
                    :key="index"
                    :value="option.label"
                  >
                    {{ option.label }}
                  </option>
                </select>
                <p class="text-base-60 mt-2 text-xs">{{ fields.hint }}</p>
              </div>
              <div
                class="basis-[194px] inline-flex gap-2 items-center justify-center bg-base-10 border-l border-base-30"
              >
                <SwitchToggle v-model="custom_field.form_fields[formIndex].is_active" />
                <Button :outline="true" @click="formStore.formEdit(formIndex)"> Edit </Button>
                <button
                  class="text-alert-red hover:text-alert-red/90"
                  v-if="!['name', 'email'].includes(fields.slug)"
                  @click="formStore.removeFormField(formIndex)"
                >
                  <DeleteSvg />
                </button>
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>

    <button
      class="mt-6 underline-offset-4 transition-all duration-300 ease-in-out font-medium hover:underline-offset-[6px] underline text-primary-100 hover:text-primary-100/90"
      @click="formStore.toggleFieldModal"
    >
      Add more fields
    </button>
  </div>
  <Modal
    v-if="fieldModal"
    title="Add Field"
    :maxHeight="'max-h-auto'"
    @closeModal="formStore.toggleFieldModal"
  >
    <div class="border-b border-base-30 my-6"></div>
    <div class="space-y-6">
      <fieldset class="">
        <label for="field_name" class="text-sm font-semibold text-base-100">Field Type</label>

        <v-select
          v-model="formField.type"
          :options="formFieldTypes"
          label="type"
          class="mt-1.5 w-full text-sm"
          track-by="id"
          :clearable="false"
          :searchable="false"
        />
      </fieldset>
      <fieldset class="">
        <label for="field_name" class="text-sm font-semibold text-base-100"
          >Label <span class="text-alert-red">*</span></label
        >
        <Input class="w-full mt-1.5" placeholder="Label" type="text" v-model="formField.label" />
      </fieldset>
      <fieldset class="" v-if="!['checkbox', 'radio'].includes(formField.type?.id)">
        <label for="field_name" class="text-sm font-semibold text-base-100">Placeholder</label>
        <Input
          class="w-full mt-1.5"
          placeholder="Placeholder"
          type="text"
          v-model="formField.placeholder"
        />
      </fieldset>

      <fieldset class="" v-if="['checkbox', 'radio', 'select'].includes(formField.type?.id)">
        <label for="field_name" class="text-sm font-semibold text-base-100">Options</label>
        <div
          class="mt-1.5 flex items-center gap-4 transition-all duration-300 ease-in-out"
          v-for="(option, index) in formField.options"
          :key="index"
        >
          <Input
            v-model="option.label"
            class="w-full flex-1"
            type="text"
            :placeholder="`Option ${index + 1}`"
          />
          <span
            class="text-alert-red text-alert-red/90 cursor-pointer"
            @click="formStore.removeOption(index)"
          >
            <CrossSvg class="w-[18px]" />
          </span>
        </div>

        <button
          class="mt-4 flex items-center gap-1.5 transition-all duration-300 ease-in-out hover:gap-2 text-primary-100 hover:text-primary-100/90 font-medium text-sm"
          @click="formStore.addOption"
        >
          <AddSvg /> Add new option
        </button>
      </fieldset>

      <fieldset class="">
        <label for="field_name" class="text-sm font-semibold text-base-100">Description</label>
        <Input
          class="w-full mt-1.5"
          placeholder="Content here..."
          type="text"
          v-model="formField.description"
        />
      </fieldset>
      <fieldset class="">
        <label for="field_name" class="text-sm font-semibold text-base-100">Required</label>
        <div class="flex gap-4 mt-4">
          <RadioToggle
            name="required"
            :checked="formField.is_required"
            @click="formField.is_required = true"
          >
            Yes
          </RadioToggle>
          <RadioToggle
            name="required"
            @click="formField.is_required = false"
            :checked="!formField.is_required"
          >
            No
          </RadioToggle>
        </div>
      </fieldset>
    </div>
    <div class="border-b border-base-30 mt-6 mb-8"></div>
    <div class="flex gap-4">
      <Button :outline="true" classes="py-[11px] inline-flex px-6 text-sm"> Cancel </Button>
      <Button
        type="button"
        classes="py-[11px] inline-flex px-6 text-sm"
        @click="formStore.addFormField"
      >
        Save
      </Button>
    </div>
  </Modal>
</template>
