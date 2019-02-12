<template>


    <div>

        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <div>
                    <md-progress-bar md-mode="determinate" :md-value="step*10"></md-progress-bar>
                </div>
            </div>
        </div>


        <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <h4 style="margin: 0;">step : {{step}}</h4>
            </div>

        </div>

        <h1 style="line-height: 1;" v-if="step === 0">Help me find my perfect valentine by making a few choices...</h1>
        <md-button v-else @click="back">BACK</md-button>

        <router-view style="padding: 20px;"></router-view>

    </div>

</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: 'app',
        components: {},
        methods: {
            back() {
                this.$router.push({path: `/next/${this.step - 1}`}); // -> /user/123
            }
        },
        computed: {
            ...mapGetters(['step'])
        }
    };

</script>

<style lang="scss">

    @import "assets/less/styles";

</style>
