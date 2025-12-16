<template>
    <el-dialog :model-value="visible" @update:model-value="emit('update:visible', $event)" title="Add Person"
        width="500">
        <el-form :model="form">

            <el-form-item label="Date" :label-width="formLabelWidth">
                <el-date-picker v-model="newData.date" type="date" placeholder="Pick a day" :size="size">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input v-model="newData.name" autocomplete="off" />
            </el-form-item>

            <el-form-item label="Gender" :label-width="formLabelWidth">
                <el-radio-group v-model="newData.gender">
                    <el-radio value="Female" size="large">Female</el-radio>
                    <el-radio value="Male" size="large">Male</el-radio>
                    <el-radio value="Other" size="large">Other</el-radio>
                    <el-radio value="Walmart Shopping Bag" size="large">Walmart Shopping Bag</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="Address" :label-width="formLabelWidth">
                <el-input v-model="newData.address" autocomplete="off" />
            </el-form-item>

        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancel">Cancel</el-button>
                <el-button type="primary" @click="confirmAdd">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>


<script setup>
import { ref } from 'vue'

const props = defineProps({
    visible: Boolean
})

const emit = defineEmits(['update:visible', 'confirm'])

const newData = ref({
    date: '',
    name: '',
    gender: '',
    address: ''
})


const confirmAdd = () => {
    emit('confirm', { ...newData.value })
    handleCancel()
}

const handleCancel = () => {
    emit('update:visible', false);
    newData.value = { date: '', name: '', gender: '', address: '' }
}

</script>