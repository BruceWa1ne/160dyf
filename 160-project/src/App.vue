<template>
    <div id="app">
        <router-view />

        <nav-bar v-if="footer_show"></nav-bar>
    </div>
</template>

<script>
// 1.引入子组件
import navBar from './components/footer/Nav.vue';
export default {
    data() {
        return {
            footer_show: true,
        };
    },
    components: {
        // 2.注册子组件
        navBar,
    },
    watch: {
        $route: function(r) {
            this.footer_show = r.path !== '/reg';
            this.footer_show = r.path !== '/login';
            this.footer_show = r.path !== '/contact';
            this.footer_show = r.path !== '/sortlist';
            this.footer_show = r.path !== '/details';
            this.footer_show = r.path !== '/userset';
        },
    },
};
</script>

<style lang="scss">
@import './assets/sass/public/common.scss';
#app {
    overflow-x: hidden;
    padding-bottom: 50px;
}
</style>
