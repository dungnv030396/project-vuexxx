<template>
    <el-table
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            style="width: 100%">
    </el-table>
</template>

<script>
    export default {
        name: "Loading",
        data(){
            return{
                loading:true,
            }
        }
    }
</script>

<style scoped>

</style>
