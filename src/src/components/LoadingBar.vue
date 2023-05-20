<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "LoadingBar",
    props: {
        showing: {
            required: true,
            type: Boolean
        },
        title: {
            required: true,
            type: String
        }
    }
});
</script>

<template>
    <div
        v-if="showing"
        class="absolute top-0 left-0 w-screen h-screen bg-opacity-70 bg-main-dark flex items-center justify-center"
    >
        <div class="w-96 h-36 m-auto bg-main-medium flex flex-col rounded-xl">
            <div class="h-14 bg-accent-light rounded-t-xl flex items-center pl-2">
                <h1 class="text-main-medium">{{ title }}</h1>
            </div>
            <div class="flex items-center justify-center h-full gap-3">
                <div
                    v-for="i in 7"
                    :key="i"
                    class="w-5 h-5 rounded-full animate-pulse bg-accent-light"
                    :style="`animation-delay: ${-2000 + (2000 / 7) * i}ms`"
                ></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
