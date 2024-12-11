<style>

    :root {
        --minidocs-padding: 16px;
        --minidocs-negative-padding: -16px;
        --doc-section-spacing: 32px;
    }


    body {
        padding: var(--minidocs-padding);
        padding-top: 0;
    }

    h1 {
        font-family: "Inter", sans-serif;
        font-weight: bold;
        text-transform: none;
        display: block;
        font-size: 24px;
        padding-bottom: 8px;
    }

    h1 span {
        color: var(--vp-c-brand-1);
        display: block;
    }

    h2:not(.title) {
        /* padding: 40px 0px 16px; */
        font-weight: bold;
    }

    h3 {
        font-weight: bold;
        padding-top: 8px;
        font-size: 14px;
        opacity: 0.9;
    }

    h3:before {
        content: "— ";
    }

    p {
        padding-bottom: 8px;
        font-size: 14px;
        line-height: 1.3;
    }

    p img {
        margin-bottom: 16px;
        margin-top: 16px;
    }

    p:first-child img {
        margin-top: var(--minidocs-negative-padding);
        margin-left: var(--minidocs-negative-padding);
        margin-right: var(--minidocs-negative-padding);
        width: calc(var(--minidocs-padding) * 2 + 100%);
        max-width: none;
        border-radius: 0;
        box-shadow: none;
    }

    p:first-child + h2,
    h2:first-child {
        margin-top: 0;
        padding-top: 0;
        border-top: 0;
    }

    h2:first-child {
        padding-top: var(--minidocs-padding);
    }

    .custom-block {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    code {
        border-radius: 4px;
        padding: 3px 6px;
        font-size: var(--vp-code-font-size);
        color: var(--vp-code-color);
        background-color: var(--vp-code-bg);
    }

    .header-anchor {
        display: none !important;
    }

</style>

<script>
export default {
  name: "MinidocStyles",
  mounted() {
    document.body.classList.add('vp-doc');
  },
  beforeDestroy() {
    document.body.classList.remove('vp-doc');
  }
};
</script>

<template>
    <slot></slot>
</template>