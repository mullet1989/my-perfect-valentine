<template>


    <div>

        <router-view></router-view>

        <div class="md-layout md-gutter md-alignment-center-right">
            <md-button class="md-secondary md-size-20 md-layout-item">Primary</md-button>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'app',
        components: {}
    };

</script>

<style lang="scss">

    @import "assets/less/styles";

</style>
