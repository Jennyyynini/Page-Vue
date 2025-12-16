import { defineStore } from 'pinia'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/plugin/isBetween'
import isBetween from 'dayjs/plugin/isBetween'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { h } from 'vue'

dayjs.extend(isBetween)

const dataArr = [
    { id: 0, date: '2012-03-15', name: 'Tom Smith', address: 'No. 189, Grove St, Los Angeles', gender: 'Male' },
    { id: 1, date: '2018-07-22', name: 'Anna Johnson', address: 'No. 47, Maple Ave, New York', gender: 'Female' },
    { id: 2, date: '2015-11-30', name: 'James Brown', address: 'No. 5, Oak Dr, Chicago', gender: 'Other' },
    { id: 3, date: '2019-01-10', name: 'Linda Taylor', address: 'No. 221, Pine Ln, Houston', gender: 'Female' },
    { id: 4, date: '2013-08-25', name: 'Robert Anderson', address: 'No. 88, Cedar Ct, Phoenix', gender: 'Walmart Shopping Bag' },
    { id: 5, date: '2020-12-19', name: 'Emily Thomas', address: 'No. 16, Elm St, Philadelphia', gender: 'Female' },
    { id: 6, date: '2011-05-06', name: 'Michael Jackson', address: 'No. 77, Birch Rd, San Antonio', gender: 'Male' },
    { id: 7, date: '2014-09-14', name: 'Sarah White', address: 'No. 3, Spruce Way, San Diego', gender: 'Female' },
    { id: 8, date: '2017-04-02', name: 'David Harris', address: 'No. 101, Willow Blvd, Dallas', gender: 'Male' },
    { id: 9, date: '2016-10-20', name: 'Jessica Martin', address: 'No. 54, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 10, date: '2010-02-11', name: 'Tom Johnson', address: 'No. 120, Grove St, Los Angeles', gender: 'Male' },
    { id: 11, date: '2021-06-30', name: 'Anna Smith', address: 'No. 33, Maple Ave, New York', gender: 'Female' },
    { id: 12, date: '2013-12-05', name: 'James White', address: 'No. 44, Oak Dr, Chicago', gender: 'Male' },
    { id: 13, date: '2022-03-17', name: 'Linda Martin', address: 'No. 198, Pine Ln, Houston', gender: 'Female' },
    { id: 14, date: '2019-11-29', name: 'Robert Harris', address: 'No. 77, Cedar Ct, Phoenix', gender: 'Other' },
    { id: 15, date: '2015-07-09', name: 'Emily Taylor', address: 'No. 12, Elm St, Philadelphia', gender: 'Female' },
    { id: 16, date: '2018-05-21', name: 'Michael Brown', address: 'No. 89, Birch Rd, San Antonio', gender: 'Male' },
    { id: 17, date: '2014-01-04', name: 'Sarah Anderson', address: 'No. 2, Spruce Way, San Diego', gender: 'Female' },
    { id: 18, date: '2016-08-15', name: 'David Thomas', address: 'No. 133, Willow Blvd, Dallas', gender: 'Male' },
    { id: 19, date: '2020-09-23', name: 'Jessica Jackson', address: 'No. 65, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 20, date: '2011-03-10', name: 'Tom Harris', address: 'No. 51, Grove St, Los Angeles', gender: 'Walmart Shopping Bag' },
    { id: 21, date: '2017-11-02', name: 'Anna Brown', address: 'No. 28, Maple Ave, New York', gender: 'Female' },
    { id: 22, date: '2012-05-19', name: 'James Martin', address: 'No. 44, Oak Dr, Chicago', gender: 'Male' },
    { id: 23, date: '2023-04-10', name: 'Linda White', address: 'No. 167, Pine Ln, Houston', gender: 'Female' },
    { id: 24, date: '2014-12-28', name: 'Robert Taylor', address: 'No. 7, Cedar Ct, Phoenix', gender: 'Walmart Shopping Bag' },
    { id: 25, date: '2018-06-14', name: 'Emily Johnson', address: 'No. 15, Elm St, Philadelphia', gender: 'Female' },
    { id: 26, date: '2013-10-22', name: 'Michael Smith', address: 'No. 79, Birch Rd, San Antonio', gender: 'Male' },
    { id: 27, date: '2021-01-18', name: 'Sarah Jackson', address: 'No. 6, Spruce Way, San Diego', gender: 'Female' },
    { id: 28, date: '2015-09-30', name: 'David Brown', address: 'No. 140, Willow Blvd, Dallas', gender: 'Other' },
    { id: 29, date: '2016-02-11', name: 'Jessica Anderson', address: 'No. 58, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 30, date: '2010-07-07', name: 'Tom Taylor', address: 'No. 24, Grove St, Los Angeles', gender: 'Male' },
    { id: 31, date: '2019-08-25', name: 'Anna Thomas', address: 'No. 31, Maple Ave, New York', gender: 'Female' },
    { id: 32, date: '2014-03-12', name: 'James Harris', address: 'No. 47, Oak Dr, Chicago', gender: 'Male' },
    { id: 33, date: '2017-10-29', name: 'Linda Jackson', address: 'No. 155, Pine Ln, Houston', gender: 'Female' },
    { id: 34, date: '2022-01-05', name: 'Robert Smith', address: 'No. 4, Cedar Ct, Phoenix', gender: 'Male' },
    { id: 35, date: '2013-07-15', name: 'Emily Harris', address: 'No. 9, Elm St, Philadelphia', gender: 'Female' },
    { id: 36, date: '2018-09-27', name: 'Michael Martin', address: 'No. 94, Birch Rd, San Antonio', gender: 'Male' },
    { id: 37, date: '2011-04-20', name: 'Sarah Brown', address: 'No. 8, Spruce Way, San Diego', gender: 'Female' },
    { id: 38, date: '2015-11-03', name: 'David White', address: 'No. 127, Willow Blvd, Dallas', gender: 'Male' },
    { id: 39, date: '2016-06-14', name: 'Jessica Taylor', address: 'No. 59, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 40, date: '2020-10-10', name: 'Tom Anderson', address: 'No. 20, Grove St, Los Angeles', gender: 'Male' },
    { id: 41, date: '2012-12-02', name: 'Anna Jackson', address: 'No. 26, Maple Ave, New York', gender: 'Female' },
    { id: 42, date: '2019-05-21', name: 'James Thomas', address: 'No. 35, Oak Dr, Chicago', gender: 'Male' },
    { id: 43, date: '2014-08-09', name: 'Linda Harris', address: 'No. 189, Pine Ln, Houston', gender: 'Female' },
    { id: 44, date: '2017-02-25', name: 'Robert Brown', address: 'No. 2, Cedar Ct, Phoenix', gender: 'Male' },
    { id: 45, date: '2021-07-13', name: 'Emily Anderson', address: 'No. 11, Elm St, Philadelphia', gender: 'Female' },
    { id: 46, date: '2013-09-18', name: 'Michael Taylor', address: 'No. 85, Birch Rd, San Antonio', gender: 'Male' },
    { id: 47, date: '2018-11-29', name: 'Sarah Martin', address: 'No. 3, Spruce Way, San Diego', gender: 'Female' },
    { id: 48, date: '2010-01-15', name: 'David Johnson', address: 'No. 138, Willow Blvd, Dallas', gender: 'Male' },
    { id: 49, date: '2015-03-30', name: 'Jessica Harris', address: 'No. 63, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 50, date: '2016-12-21', name: 'Tom Brown', address: 'No. 22, Grove St, Los Angeles', gender: 'Male' },
    { id: 51, date: '2023-06-19', name: 'Anna Martin', address: 'No. 30, Maple Ave, New York', gender: 'Female' },
    { id: 52, date: '2012-09-10', name: 'James Anderson', address: 'No. 41, Oak Dr, Chicago', gender: 'Other' },
    { id: 53, date: '2017-05-04', name: 'Linda Jackson', address: 'No. 177, Pine Ln, Houston', gender: 'Female' },
    { id: 54, date: '2019-10-14', name: 'Robert Taylor', address: 'No. 1, Cedar Ct, Phoenix', gender: 'Male' },
    { id: 55, date: '2014-11-07', name: 'Emily Smith', address: 'No. 14, Elm St, Philadelphia', gender: 'Female' },
    { id: 56, date: '2011-01-25', name: 'Michael White', address: 'No. 91, Birch Rd, San Antonio', gender: 'Male' },
    { id: 57, date: '2018-02-16', name: 'Sarah Brown', address: 'No. 7, Spruce Way, San Diego', gender: 'Female' },
    { id: 58, date: '2015-08-20', name: 'David Martin', address: 'No. 130, Willow Blvd, Dallas', gender: 'Male' },
    { id: 59, date: '2016-04-28', name: 'Jessica Johnson', address: 'No. 55, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 60, date: '2010-06-02', name: 'Tom White', address: 'No. 18, Grove St, Los Angeles', gender: 'Walmart Shopping Bag' },
    { id: 61, date: '2022-07-24', name: 'Anna Harris', address: 'No. 27, Maple Ave, New York', gender: 'Female' },
    { id: 62, date: '2013-05-12', name: 'James Brown', address: 'No. 38, Oak Dr, Chicago', gender: 'Male' },
    { id: 63, date: '2016-09-30', name: 'Linda Thomas', address: 'No. 193, Pine Ln, Houston', gender: 'Female' },
    { id: 64, date: '2017-12-18', name: 'Robert Anderson', address: 'No. 5, Cedar Ct, Phoenix', gender: 'Male' },
    { id: 65, date: '2020-03-11', name: 'Emily Martin', address: 'No. 10, Elm St, Philadelphia', gender: 'Female' },
    { id: 66, date: '2014-04-07', name: 'Michael Jackson', address: 'No. 83, Birch Rd, San Antonio', gender: 'Male' },
    { id: 67, date: '2011-10-22', name: 'Sarah Taylor', address: 'No. 4, Spruce Way, San Diego', gender: 'Female' },
    { id: 68, date: '2018-08-15', name: 'David Harris', address: 'No. 125, Willow Blvd, Dallas', gender: 'Male' },
    { id: 69, date: '2015-02-09', name: 'Jessica Smith', address: 'No. 60, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 70, date: '2013-01-28', name: 'Tom Martin', address: 'No. 19, Grove St, Los Angeles', gender: 'Male' },
    { id: 71, date: '2021-09-07', name: 'Anna White', address: 'No. 25, Maple Ave, New York', gender: 'Female' },
    { id: 72, date: '2010-11-16', name: 'James Johnson', address: 'No. 37, Oak Dr, Chicago', gender: 'Male' },
    { id: 73, date: '2019-06-22', name: 'Linda Brown', address: 'No. 185, Pine Ln, Houston', gender: 'Female' },
    { id: 74, date: '2014-07-03', name: 'Robert Harris', address: 'No. 3, Cedar Ct, Phoenix', gender: 'Male' },
    { id: 75, date: '2017-03-28', name: 'Emily Taylor', address: 'No. 13, Elm St, Philadelphia', gender: 'Female' },
    { id: 76, date: '2012-10-05', name: 'Michael Anderson', address: 'No. 78, Birch Rd, San Antonio', gender: 'Male' },
    { id: 77, date: '2016-01-19', name: 'Sarah Jackson', address: 'No. 6, Spruce Way, San Diego', gender: 'Female' },
    { id: 78, date: '2015-05-14', name: 'David Brown', address: 'No. 135, Willow Blvd, Dallas', gender: 'Male' },
    { id: 79, date: '2018-03-09', name: 'Jessica Thomas', address: 'No. 61, Chestnut Pl, San Jose', gender: 'Female' },
    { id: 80, date: '2011-08-30', name: 'Tom Harris', address: 'No. 21, Grove St, Los Angeles', gender: 'Male' },
    { id: 81, date: '2023-02-26', name: 'Anna Martin', address: 'No. 29, Maple Ave, New York', gender: 'Female' },
    { id: 82, date: '2010-04-18', name: 'James White', address: 'No. 42, Oak Dr, Chicago', gender: 'Male' },
    { id: 83, date: '2019-09-12', name: 'Linda Smith', address: 'No. 191, Pine Ln, Houston', gender: 'Female' },
    { id: 84, date: '2014-05-27', name: 'Robert Brown', address: 'No. 6, Cedar Ct, Phoenix', gender: 'Male' },
    { id: 85, date: '2017-07-08', name: 'Emily Harris', address: 'No. 8, Elm St, Philadelphia', gender: 'Female' },
    { id: 86, date: '2020-11-21', name: 'Michael Taylor', address: 'No. 84, Birch Rd, San Antonio', gender: 'Male' },
    { id: 87, date: '2013-06-13', name: 'Sarah Martin', address: 'No. 1, Spruce Way, San Diego', gender: 'Female' },
    { id: 88, date: '2016-11-17', name: 'David Johnson', address: 'No. 129, Willow Blvd, Dallas', gender: 'Male' },
    { id: 89, date: '2015-12-04', name: 'Jessica White', address: 'No. 62, Chestnut Pl, San Jose', gender: 'Female' }
];

export const useTableStore = defineStore('tableStore', {
    state: () => ({
        tableData: [],
        loading: false,
        editedData: {},
        nextId: 90,
        ogData: {}
    }),

    actions: {
        async loadData() {
            this.loading = true;
            const response = await axios.post('https://httpbin.org/post', dataArr);
            this.tableData = response.data.json;
            this.loading = false;
        },
        confirmEdit(editedData) {
            const tempData = { ...editedData };
            const i = this.tableData.findIndex(item => item.id === editedData.id);

            if (i !== -1) {
                let dateValue = tempData.date;
                if (dateValue instanceof Date) {
                    dateValue = dayjs(dateValue).format('YYYY-MM-DD');
                }
                this.tableData[i] = {
                    ...this.tableData[i],
                    ...editedData,
                    date: dateValue || this.ogData.date,
                    address: editedData.address || this.ogData.address,
                    gender: editedData.gender || this.ogData.gender,
                    name: editedData.name || this.ogData.name
                };
            }
            ElNotification({
                message: h('span', { style: 'color: teal' }, `Saved ${this.tableData[i].name}`),
            })
        },
        confirmAdd(newData) {
            const tempData = {
                ...newData, id: this.nextId++,
                date: dayjs(newData.date).format('YYYY-MM-DD')
            };
            this.tableData.unshift(tempData);
            ElNotification({
                message: h('span', { style: 'color: teal' }, `Added ${tempData.name}`),
            })
        },
        editRow(obj) {
            this.editedData = { ...obj };
            this.ogData = { ...obj };
        },
        deleteRow(obj) {
            ElMessageBox.confirm(
                `You are about to delete: ${obj.name}.`,
                'Warning',
                {
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                }
            ).then(() => {
                const i = this.tableData.findIndex(item => item === obj);
                if (i !== -1) {
                    this.tableData.splice(i, 1);
                    ElMessage({
                        type: 'success',
                        message: 'Delete completed',
                    })
                }
            }).catch(() => {
                ElMessage({
                    type: 'info',
                    message: 'Delete canceled',
                })
            })
        }
    },

    getters: {
        filterData: (state) => {
            return (filters) => {
                return state.tableData.filter(item => {
                    const tName = filters.name;       // 🛠️ FIXED: filters is parameter, not .value
                    const tAddress = filters.address;
                    const tGender = filters.gender;
                    const hasName = !tName || item.name.toLowerCase().includes(tName.trim().toLowerCase());
                    const hasAddress = !tAddress || item.address.toLowerCase().includes(tAddress.trim().toLowerCase());
                    const hasGender = !tGender || item.gender === tGender;
                    const dateInRange = filters.date && filters.date.length === 2 ?
                        dayjs(item.date).isBetween(
                            dayjs(filters.date[0]),
                            dayjs(filters.date[1]),
                            'day',
                            '[]'
                        ) : true;

                    return (hasName && hasAddress && hasGender && dateInRange);
                });
            };
        },
        sortedData: (state) => {
            return (filters, sortKey, sortOrder) => {
                const filtered = state.filterData(filters);
                let data = [...filtered];

                if (sortKey && sortOrder) {
                    data.sort((a, b) => {
                        let valA = a[sortKey];
                        let valB = b[sortKey];

                        if (sortKey === 'date') {
                            valA = new Date(valA);
                            valB = new Date(valB);
                        } else {
                            valA = valA.toString().toLowerCase();
                            valB = valB.toString().toLowerCase();
                        }

                        if (valA < valB) return sortOrder === 'ascending' ? -1 : 1;
                        if (valA > valB) return sortOrder === 'ascending' ? 1 : -1;
                        return 0;
                    });
                }
                return data;
            };
        },

        pageData: (state) => {
            return (filters, sortKey, sortOrder, currentPage, pageSize) => {
                const sorted = state.sortedData(filters, sortKey, sortOrder); 
                const start = (currentPage - 1) * pageSize; 
                const end = start + pageSize;
                return sorted.slice(start, end);
            };
        }
    }

    }
    
)
