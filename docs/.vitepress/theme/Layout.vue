<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

onMounted(() => {
    window._mfq = window._mfq || [];

    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/b24688bd-712f-4445-bd16-b89ca6de37c5.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
})
</script>

<template>
    <DefaultTheme.Layout />
</template>
