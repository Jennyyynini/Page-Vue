<template>
    <div class="remain">

        <el-table v-loading='loading' element-loading-text="Loading..." :data="pageData" height="450"
            style="width: 100%; " @sort-change="handleSortChange">
            <el-table-column prop="date" label="Date" width="180" sortable></el-table-column>
            <el-table-column prop="name" label="Name" width="180" sortable></el-table-column>
            <el-table-column prop="gender" label="Gender" width="180"></el-table-column>
            <el-table-column prop="address" label="Address" margin-right: auto></el-table-column>
            <el-table-column label="Actions" align="center" header-align="center">
                <template #default="scope">
                    <el-button-group class="ml-4">
                        <el-button type="primary" icon="Edit" @click="editRow(scope.row)"></el-button>
                        <el-button type="danger" icon="Delete" @click="deleteRow(scope.row)"></el-button>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>

        <EditData :visible="props.editVisible" :edit-data="props.editData"
            @update:visible="$emit('update:edit-visible', $event)" @confirm="$emit('edit-confirm', $event)" />

        <el-pagination :model-value:current-page="currentPage" :model-value:page-size="pageSize"
            :page-sizes="[10, 20, 30, 50]" :size="size" :disabled="disabled" :background="background"
            layout="total, sizes, prev, pager, next, jumper" :total="filterData.length" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" style="margin:10px">
        </el-pagination>

    </div>
</template>

<script setup>
import { ref } from 'vue'; 
import EditData from './EditData.vue';

const props = defineProps({
    loading: Boolean,
    filterData: Array,
    pageData: Array,
    currentPage: Number,
    pageSize: Number,
    size: String,
    disabled: Boolean,
    background: Boolean,
    editVisible: Boolean,
    editData: Object
});

const emit = defineEmits([
    'sort-change',
    'size-change',
    'current-change',
    'edit-row',
    'delete-row',
    'edit-confirm',
    'update:edit-visible'
])


const handleSortChange = (sort) => {
    emit('sort-change', sort)
}

const handleSizeChange = (size) => {
    emit('size-change', size)
}

const handleCurrentChange = (current) => {
    emit('current-change', current)
}

const editRow = (row) => {
    emit('edit-row', row)
}

const deleteRow = (row) => {
    emit('delete-row', row)
}

</script>
