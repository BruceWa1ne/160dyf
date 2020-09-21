<template>
    <div>专科用药 {{ datalist }}</div>
</template>

<script>
export default {
    data() {
        return {
            datalist: '阿莫西林',
        };
    },

    components: {},

    methods: {},

    created() {
        console.log(localStorage.getItem('type', 999));
    },
};
</script>

<style scoped></style>
