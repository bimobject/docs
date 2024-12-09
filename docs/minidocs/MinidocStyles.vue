<style>
    :root {
        --minidocs-padding: 16px;
        --minidocs-negative-padding: -16px;
    }


    body {
        padding: var(--minidocs-padding);
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
        padding: 40px 0px 16px;
        font-weight: bold;
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
    }

    p:first-child + h2 {
        margin-top: 0;
        padding-top: 0;
    }

    .custom-block {
        margin-top: 16px;
        margin-bottom: 16px;
    }
</style>

<template>
    <slot></slot>
</template>