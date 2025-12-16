<template>
  <div id="app">
    <div class="row">
      <SearchFilter @filter-change="filters = $event" />

      <el-button class="!ml-0" @click="addData = true"> + </el-button>

      <el-button @click="loadData()"> load </el-button>
      <el-button @click="reload"> Reload </el-button>


    </div>

    <DataTable :loading="store.loading" :filter-data="filterData" :page-data="pageData" :current-page="currentPage"
      :page-size="pageSize" :size="size" :disabled="disabled" :background="background" :edit-visible="editVisible"
      :edit-data="store.editedData" @sort-change="handleSortChange" @size-change="handleSizeChange"
      @edit-confirm="confirmEdit($event)" @update:edit-visible="editVisible = $event"
      @current-change="handleCurrentChange" @edit-row="editRow" @delete-row="deleteRow">
    </DataTable>

  </div>
  <AddData :visible="addData" @update:visible="addData = $event" @confirm="confirmAdd"></AddData>
</template>


<script setup>
import { ref, computed, h } from 'vue'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import dayjs from 'dayjs'
import 'dayjs/plugin/isBetween'
import isBetween from 'dayjs/plugin/isBetween'
import AddData from '../components/AddData.vue'
import SearchFilter from '../components/SearchFilter.vue'
import DataTable from '../components/DataTable.vue'
import { useTableStore } from '@/stores/tableStore'

dayjs.extend(isBetween)

const store = useTableStore()

const currentPage = ref(1);
const pageSize = ref(10);
const background = ref(false);
const disabled = ref(false);
const addData = ref(false);
const editVisible = ref(false);
const sortKey = ref('');
const sortOrder = ref('');
const size = ref('default')

const filters = ref({ name: '', date: [], address: '', gender: '' });

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
  currentPage.value = 1;
  pageSize.value = val;
}

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  currentPage.value = val;
}

const handleSortChange = ({ prop, order }) => {
  sortKey.value = prop;
  sortOrder.value = order;
}


const loadData = async () => {
  await store.loadData()
}


const filterData = computed(() => {
  return store.filterData(filters.value)
})

const pageData = computed(() => {
  return store.pageData(
    filters.value,
    sortKey.value,
    sortOrder.value,
    currentPage.value,
    pageSize.value
  )
})

const reload = () => {
  ElNotification({
    title: 'Pinia Store',
    message: `Loaded ${store.tableData.length} rows`,
    type: 'success'
  })
  currentPage.value = 1 
}

const confirmAdd = (newData) => {
  const addedItem = store.confirmAdd(newData)
  addData.value = false
  currentPage.value = 1
}

const confirmEdit = (editedData) => {
  store.confirmEdit(editedData)
  editVisible.value = false
}

const editRow = (obj) => {
  store.editRow(obj)
  editVisible.value = true
}

const deleteRow = async (obj) => {
  try {
    await store.deleteRow(obj)
  } catch (error) {
  }
}

</script>