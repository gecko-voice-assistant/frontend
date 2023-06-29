<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "SlotComponent",
    props: ["slotName", "slotData"],
    data() {
        const { type, alternatives } = this.slotData;
        const sorted = alternatives.sort();

        let example;
        switch (type) {
            case "number":
                example = Math.floor(
                    Math.random() * (Math.floor(sorted[1]) - Math.ceil(sorted[0]) + 1) + Math.ceil(sorted[0])
                );
                break;

            default:
                example = alternatives[Math.floor(Math.random() * alternatives.length)].split(":")[0];
        }

        return {
            type: type,
            alternatives: alternatives,
            sorted: sorted,
            example: example
        };
    }
});
</script>

<template>
    <div class="group relative inline-block text-accent-light duration-300">
        {{ example }}

        <div
            class="group-hover:scale-100 scale-0 transition-all duration-75 origin-top flex flex-col gap-2 items-center absolute inset-x-1/2 -translate-x-1/2 w-56 max-h-44 p-1.5 z-20 overflow-y-scroll bg-main-medium text-center rounded-2xl border-2 border-main-light"
        >
            <h1 v-if="!['nameless', 'range'].includes(slotData['type'])" class="text-2xl underline">
                {{ slotData["type"] }}
            </h1>

            <div v-if="slotData['type'] === 'range'" class="flex flex-row gap-5 w-full items-center justify-center">
                <p class="w-1/5 text-end">{{ sorted[0] }}</p>
                <p class="text-xl">⟾</p>
                <p class="w-1/5 text-start">{{ sorted[1] }}</p>
            </div>

            <ul v-else>
                <li v-for="(alternative, index) in alternatives" v-bind:key="index">
                    {{ alternative.split(":")[0] }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
