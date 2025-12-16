<template>
  <el-date-picker :model-value="result.date" @update:model-value="handleFilterChange('date', $event)"
    style="width: 240px" type="daterange" unlink-panels range-separator="To" start-placeholder="Start date"
    end-placeholder="End date" :shortcuts="shortcuts" :size="size">
  </el-date-picker>

  <el-input :model-value="result.name" @update:model-value="handleFilterChange('name', $event)" style="width: 240px"
    placeholder="Search Name" clearable></el-input>

  <el-select :model-value="result.gender" @update:model-value="handleFilterChange('gender', $event)"
    style="width: 240px" placeholder="Search Gender" clearable>
    <el-option v-for="item in genderOps" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>

  <el-input :model-value="result.address" @update:model-value="handleFilterChange('address', $event)"
    style="width: 240px" placeholder="Search Address" clearable></el-input>
</template>


<script setup>

import { ref } from 'vue'

const size = ref('default');
const result = ref({ name: '', date: [], address: '', gender: '' });

const genderOps = [
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Other',
    label: 'Other',
  },
  {
    value: 'Walmart Shopping Bag',
    label: 'Walmart Shopping Bag',
  }
];

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]


const emit = defineEmits(['filter-change']);

const handleFilterChange = (key, value) => {
  result.value[key] = value
  emit('filter-change', { ...result.value })
};

</script>
