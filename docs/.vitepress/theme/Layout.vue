<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

onMounted(() => {
    window._mfq = window._mfq || [];

    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/a436e030-c54e-48a6-b7a9-9eb9a5a42729.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
})
</script>

<template>
    <DefaultTheme.Layout />
</template>
