<template>
    <div>
        <el-table :data="tableData2" style="width: auto" :row-class-name="tableRowClassName" stripe
            highlight-current-row>
            <el-table-column prop="date" label="日期" width="auto" align="center">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="auto" align="center">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="auto" align="center">
            </el-table-column>
            <el-table-column prop="time" label="时间" width="auto" align="center">
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: 'tableCM',
        methods: {
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        },
        data() {
            return {
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    time: '20:04:10'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    time: '20:04:10'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    time: '20:04:10'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    time: '20:04:10'
                }]
            }
        }
    }
</script>
<style scoped>
    .el-table {
        max-width: 1200px;
        margin: 80px auto;
    }

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>