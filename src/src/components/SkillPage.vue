<script>
import { activateSkill, getSkillDetails } from "@/services/SkillService";
import LoadingBar from "@/components/LoadingBar.vue";

export default {
    name: "SkillPage",
    components: { LoadingBar },
    data() {
        return {
            skillName: this.$route.params["skill"],
            description: "",
            version: "1.0",
            active: false,
            loading: false
        };
    },
    methods: {
        loadPage() {
            getSkillDetails(this.skillName)
                .then((response) => {
                    this.description = response["description"];
                    this.version = response["version"];
                    this.active = response["active"];
                })
                .catch(alert);
        },
        activateSkill() {
            this.loading = true;
            activateSkill(this.skillName, !this.active).then(() => {
                this.loading = false;
                this.loadPage();
            });
        }
    },
    mounted() {
        this.loadPage();
    }
};
</script>

<template>
    <div>
        <LoadingBar
            :showing="loading"
            :title="$t('skillPage.' + (active ? 'deactivating' : 'activating'))"
        ></LoadingBar>

        <h1>{{ skillName }}</h1>
        <h1>{{ description }}</h1>
        <h1>{{ version }}</h1>
        <button @click="activateSkill">{{ $t("skillPage." + (active ? "deactivate" : "activate")) }}</button>
    </div>
</template>

<style scoped></style>
