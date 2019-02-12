<template>

    <div>

        <h1 style="text-align: center;">{{option(step).title}}</h1>


        <div class="md-layout md-gutter">

            <md-card md-with-hover class="md-layout-item" v-for="(option, key) in option(step).choices">
                <div @click="next">
                    <md-card-header class="md-primary">
                        <div class="md-title">{{option.text}}</div>
                    </md-card-header>

                    <md-card-content>
                        {{option.desc}}
                    </md-card-content>

                </div>

            </md-card>


        </div>
    </div>


</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: 'choice',
        props: ['title'],
        computed: {
            ...mapGetters(['step', "option"])
        },
        watch: {
            '$route'(to) {
                const currentStep = parseInt(to.params.id);
                this.$store.commit('setStep', currentStep);
            }
        },
        created() {
            const currentStep = parseInt(this.$route.params.id);
            this.$store.commit('setStep', currentStep);
        },
        methods: {
            next() {
                this.$router.push(`/next/${this.step + 1}`);
                this.$store.commit('incrementStep', this.step + 1);
            }
        }
    };
</script>

<style scoped>

    .md-progress-bar {
        margin: 24px;
    }

</style>