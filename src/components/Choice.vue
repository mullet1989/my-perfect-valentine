<template>

    <div>

        <div class="md-layout md-gutter">

            <div class="md-layout-item">

                <div>
                    <md-progress-bar md-mode="determinate" :md-value="step"></md-progress-bar>
                </div>


            </div>

        </div>

        <div class="md-layout md-gutter">

            <div class="md-layout-item">
                <h2>{{title}}</h2>
                <h4>step : {{step}}</h4>


            </div>

        </div>


        <div class="md-layout md-gutter">

            <md-card md-with-hover class="md-layout-item" v-for="(option, key) in options">
                <div @click="next">
                    <md-card-header class="md-primary">
                        <div class="md-title">{{option.text}}</div>
                    </md-card-header>

                    <md-card-content>
                        {{key}}
                    </md-card-content>

                </div>

            </md-card>
        </div>


    </div>


</template>

<script>
    export default {
        name: 'choice',
        props: ['title'],
        data() {
            return {
                step: 0,
                options: [{
                    text: 'options 1'
                }, {
                    text: 'options 2'
                }]
            };
        },
        watch: {
            '$route'(to, from) {
                this.step = parseInt(to.params.id);
            }
        },
        mounted() {
            this.step = parseInt(this.$route.params.id);
        },
        methods: {
            next() {
                this.$router.push(`/next/${this.step + 1}`);
            }
        }
    };
</script>

<style scoped>

    .md-progress-bar {
        margin: 24px;
    }

</style>