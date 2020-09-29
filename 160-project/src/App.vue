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
            if (
                r.path == '/details' ||
                r.path == '/sortlist' ||
                r.path == '/login' ||
                r.path == '/reg' ||
                r.path == '/userset'
            ) {
                this.footer_show = false;
            } else {
                this.footer_show = true;
            }
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
