---
layout: false

features:
  - title: Product creation
    details: A quick introduction to creating your first product in Eando X. This guide will cover the basics, and get you up and running quickly.
    link: /documentation/guides/creating-your-first-product
    linkText: Learn more
    target: _blank
  - title: Get help from your suppliers
    details: Add your suppliers to your library and use their components to get accurate data in your own products.
    link: /documentation/supplier/supplier-overview
    linkText: Learn more
    target: _blank
  - title: Generate EPD reports
    details: Take the hassle out of creating EPD reports with our generator. PDF reports are a few clicks away.
    link: /documentation/epd/epd-overview
    linkText: Learn more
    target: _blank
---

<script setup>
    import { VPButton, VPHomeFeatures } from 'vitepress/theme'
</script>

<style>
    .page {
        padding: 24px;
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

    .buttons {
        padding-top: 8px;
        display: flex;
        gap: 8px;
    }

    .VPFeatures {
        padding: 0 !important;
    }
</style>

<div class="page">
    <h1>Become an<span>Eando X superuser</span></h1>
    <p>Maximize the value of your environmental investment with Eando X.</p>
    <p>Dive into our documentation to learn everything you need.</p>
    <div class="buttons">
        <VPButton href="/documentation/getting-started/introduction" text="Start as a user" target="_blank" size="medium"></VPButton>
        <VPButton href="/documentation/getting-started/supplier-quickstart" text="Supplier quickstart" theme="alt" target="_blank" size="medium"></VPButton>
    </div>
    <h2>Or read one of our guides:</h2>
    <VPHomeFeatures></VPHomeFeatures>
</div>