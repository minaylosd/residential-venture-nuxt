<template>
  <div>
    <label class="block mb-1 text-sm font-normal font-compact text-greytxt">{{ label }}</label>
    <div
      ref="dropdownContainer"
      class="bg-tertiary py-3.5 relative flex w-full items-center px-3 border rounded-2xl border-divider/50 cursor-pointer"
      @click="toggleDropdown"
    >
      <span :class="[isSet? 'text-txt' : 'text-greytxt', 'flex w-full font-normal leading-6 font-compact text-17 bg-transparent']">
        {{ !isSet ? "Не выбраны" : selectedOption.label }}
      </span>
      <ChevronDown v-if="selectedOption?.value === null" />
      <button
        v-else
        type="button"
        class="p-0 m-0 bg-transparent border-0 flex items-center justify-center"
        @click.stop="onClear"
      >
        <Close />
      </button>

      <div
        v-show="isDropdownShown"
        ref="dropdown"
        class="absolute z-20 left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
        style="max-height: 350px; overflow-y: auto;"
        @click.stop
      >
        <input
          v-if="searchable"
          v-model="searchQuery"
          type="text"
          placeholder="Поиск..."
          class="w-full px-2 py-1 mb-2 border rounded-md border-gray-300"
          @click.stop
        >

        <div
          v-for="(option) in filteredOptions"
          :key="option.value"
          class="w-full py-[0.875rem] px-1.5 cursor-pointer"
          @click="setType(option)"
        >
          <div
            class="font-normal leading-6 font-compact text-17 text-txt cursor-pointer"
            @click="setType(option)"
          >
            {{ option.label }}
          </div>
        </div>
        <div
          v-if="!filteredOptions.length"
          class="text-center text-txt"
        >
          Нет опций
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, watch, onMounted, onBeforeUnmount, nextTick} from 'vue';
import ChevronDown from '../components/icons/ChevronDown.vue';
import Close from '../components/icons/Close.vue';
import { useDropDownInputCloseSync } from '../composables/dropdownInputCloseSync.js';

const props = defineProps({
  label: String,
  modelValue: [String, Number, Boolean, Object],
  options: Array,
  disabled: Boolean,
  searchable: Boolean,
});

const emit = defineEmits(['update:modelValue']);
const isSet = ref(false);
const isDropdownShown = ref(false);
const searchQuery = ref('');
const dropdown = ref(null);
const dropdownContainer = ref(null);
const { registerCloseCallback, closeLastDropdown } = useDropDownInputCloseSync();

const selectedOption = computed(() => {
  return props.options.find(option => option.value === props.modelValue) || { label: '', value: null };
});

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return props.options;
  }
  return props.options.filter(option => option.label.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

watch(() => props.modelValue, (newValue) => {
  isSet.value = newValue !== null && newValue !== undefined;
}, { immediate: true });

const onClear = () => {
  isSet.value = false;
  isDropdownShown.value = false;
  searchQuery.value = '';
  emit('update:modelValue', null);
  closeLastDropdown();
};

function toggleDropdown(event) {
  event.stopPropagation();
  if (props.disabled) return;
  if (!isDropdownShown.value) {
    closeLastDropdown();
    registerCloseCallback(() => {
      isDropdownShown.value = false;
    });
  }
  isDropdownShown.value = !isDropdownShown.value;
}

function handleClickOutside(event) {
  if (
    dropdown.value &&
    dropdownContainer.value &&
    !dropdown.value.contains(event.target) &&
    !dropdownContainer.value.contains(event.target)
  ) {
    isDropdownShown.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

function setType(option) {
  console.log(`option: ${option.value}`);
  emit('update:modelValue', option.value);
  isSet.value = true;
  nextTick(() => {
    isDropdownShown.value = false;
  });
  closeLastDropdown();
}
</script>
