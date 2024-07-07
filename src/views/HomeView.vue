<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
// import Header from '@/components/Header.vue'

import Button from '../components/Button.vue'
import AddSvg from '../components/svg/AddSvg.vue'
import CopySvg from '../components/svg/CopySvg.vue'
import DeleteSvg from '../components/svg/DeleteSvg.vue'
import { useRouter } from 'vue-router'
import EditSvg from '../components/svg/EditSvg.vue'

const router = useRouter()
const show_delete_modal = ref(false)
const loading = ref(false)
const formLists = ref([])

function addNewForm() {
  router.push({
    name: 'form-create'
  })
}
</script>

<template>
  <!-- <Header /> -->

  <section class="max-w-[1139px] p-8 bg-white ml-auto 2xl:mx-auto">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl">All Forms</h2>

      <Button classes="py-[11px] gap-2 inline-flex  px-6  text-sm" @click="addNewForm">
        <span class="inline-flex">
          <AddSvg />
        </span>
        Add New Form
      </Button>
    </div>
    <div
      class="text-left bg-white mt-8 border border-base-20 rounded-lg small-v-scroll max-[1200px]:overflow-x-auto max-[1200px]:overflow-y-hidden"
    >
      <table class="w-full rounded-lg">
        <thead class="w-full">
          <tr class="rounded-t-2xl bg-base-10">
            <th
              class="px-6 flex items-center gap-3 py-3 border-b border-base-20 text-base-70 text-left font-medium text-sm"
            >
              <span class="inline-flex items-center">
                <input class="hidden select-all-checkbox" type="checkbox" id="checkAllForm" />
                <label
                  for="checkAllForm"
                  class="rounded border bg-white border-base-30 w-5 h-5 cursor-pointer"
                ></label>
              </span>
              <span class="align-middle inline-flex items-center gap-1">Title</span>
            </th>
            <th
              class="px-6 py-3 border-b max-w-[461px] text-center border-base-20 text-base-70 font-medium text-sm"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="w-full">
          <tr
            v-for="(item, index) of 10"
            :key="index"
            class="odd:bg-base-150 rounded-2xl border-b border-base-20 last:border-b-0"
          >
            <td
              class="px-6 py-4 w-[200px] md:w-[400px] relative font-medium text-sm text-base-100 text-left align-middle"
            >
              <span class="mr-3 inline-block absolute top-2/4 -translate-y-2/4">
                <span class="inline-flex items-center">
                  <input class="hidden simple-checkbox" type="checkbox" />
                  <label
                    class="rounded border bg-white border-base-30 w-5 h-5 cursor-pointer"
                  ></label>
                </span>
              </span>
              <div class="flex items-center pl-8">
                <span class="align-middle inline-block overflow-hidden flex-1">
                  <router-link
                    :to="{ name: 'form-edit' }"
                    class="line-clamp-2 hover:text-primary-100"
                  >
                    form title
                  </router-link>
                </span>
              </div>
            </td>
            <td class="px-6 py-4 text-center w-[200px]">
              <span class="space-x-6">
                <router-link
                  :to="{ name: 'form-edit' }"
                  target="_blank"
                  class="inline-block text-base-50 relative group hover:text-primary-100 cursor-pointer"
                >
                  <EditSvg />
                  <span
                    class="invisible z-10 absolute opacity-0 origin-[50%_0] group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 scale-[0.75] translate-y-[19px] left-1/2 -translate-x-1/2 w-max max-w-[300px] shadow-9 py-2 px-3 text-white bg-base-90 text-base-100 text-sm font-normal top-[calc(100%_+_20px)] rounded-lg block transition-[all_.2s_cubic-bezier(0.5,0,0,1.25),opacity_.15s_ease-out]"
                  >
                    <span
                      class="border-8 -top-4 inline-block w-[7.08px] h-2.5] absolute left-1/2 -translate-x-1/2 border-transparent border-b-base-90"
                    ></span>
                    Edit
                  </span>
                </router-link>
                <span
                  class="inline-block relative group text-base-50 hover:text-primary-100 cursor-pointer"
                >
                  <CopySvg />
                  <span
                    class="invisible z-10 absolute opacity-0 origin-[50%_0] group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 scale-[0.75] translate-y-[19px] left-1/2 -translate-x-1/2 w-max max-w-[300px] shadow-9 py-2 px-3 text-white bg-base-90 text-base-100 text-sm font-normal top-[calc(100%_+_20px)] rounded-lg block transition-[all_.2s_cubic-bezier(0.5,0,0,1.25),opacity_.15s_ease-out]"
                  >
                    <span
                      class="border-8 -top-4 inline-block w-[7.08px] h-2.5] absolute left-1/2 -translate-x-1/2 border-transparent border-b-base-90"
                    ></span>
                    Duplicate
                  </span>
                </span>
                <span
                  class="inline-block relative group text-alert-red hover:text-alert-red/90 cursor-pointer"
                >
                  <DeleteSvg />
                  <span
                    class="invisible z-10 absolute opacity-0 origin-[50%_0] group-hover:visible group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 scale-[0.75] translate-y-[19px] left-1/2 -translate-x-1/2 w-max max-w-[300px] shadow-9 py-2 px-3 text-white bg-base-90 text-base-100 text-sm font-normal top-[calc(100%_+_20px)] rounded-lg block transition-[all_.2s_cubic-bezier(0.5,0,0,1.25),opacity_.15s_ease-out]"
                  >
                    <span
                      class="border-8 -top-4 inline-block w-[7.08px] h-2.5] absolute left-1/2 -translate-x-1/2 border-transparent border-b-base-90"
                    ></span>
                    Delete
                  </span>
                </span>
              </span>
            </td>
          </tr>
        </tbody>
        <!-- <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <DeleteModal v-if="show_delete_modal" @cancelDelete="cancelDelete" />
          </transition> -->
      </table>
    </div>
    <!-- </template> -->
  </section>
</template>
