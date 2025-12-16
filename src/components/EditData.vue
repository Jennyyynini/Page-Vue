<template>
    <el-dialog :model-value="visible" @update:model-value="emit('update:visible', $event)" title="Edit Person"
        width="500">
        <el-form>

            <el-form-item label="Date">
                <el-date-picker v-model="localData.date" type="date" placeholder="Pick a day" :size="size">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="Name">
                <el-input v-model="localData.name" autocomplete="off" />
            </el-form-item>

            <el-form-item label="Gender">
                <el-radio-group v-model="localData.gender">
                    <el-radio value="Female" size="large">Female</el-radio>
                    <el-radio value="Male" size="large">Male</el-radio>
                    <el-radio value="Other" size="large">Other</el-radio>
                    <el-radio value="Walmart Shopping Bag" size="large">Walmart Shopping Bag</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="Address">
                <el-input v-model="localData.address" autocomplete="off" />
            </el-form-item>

        </el-form>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancel">Cancel</el-button>
                <el-button type="primary" :disabled="editDisabled" @click="handleConfirm">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>

import { ref, watch, computed } from 'vue'
import dayjs from 'dayjs';

const props = defineProps({
    visible: Boolean,
    editData: Object
});

const emit = defineEmits(['update:visible', 'confirm']);
const size = 'default';

const localData = ref({ ...props.editData });

const editDisabled = computed(() => {
    let theSame = true;
    for (const key in props.editData) {
        if (key === 'id') continue;
        let valRef = localData.value[key];
        const valObj = props.editData[key];

        if (valRef instanceof Date) valRef = dayjs(valRef).format('YYYY-MM-DD');

        if (valRef !== valObj) {
            theSame = false;
            break;
        }

    }
    const allEmpty = !localData.value.date && !localData.value.name &&
        !localData.value.address && !localData.value.gender;
    return allEmpty || theSame;
});


watch(() => props.editData, (newData) => {
    localData.value = { ...newData };
});

const handleConfirm = () => {
    emit('confirm', { ...localData.value });
};

const handleCancel = () => {
    emit('update:visible', false);
};

</script>