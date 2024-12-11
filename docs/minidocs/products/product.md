---
layout: false
---

<script setup>
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()
</script>

<MinidocStyles />

![Image of the product dependency tree](/images/placeholder.png)

## This is a product entity

In Eando X, everything centers on your products. All other entities (materials, packaging, factories, etc.) connect to products.

Each product represents a single SKU, and its data is used to generate LCAs, EPDs, and other reports.

## Adding product data

The product page is divided into sections. The sections **Components**, **Materials**, **Packaging**, and **Factories** are used to add and manage product data.

![Image of the product page](/images/minidocs/products/sections.jpg)

Each section has an `Add` button in the top-right corner. Use it to search for and link entities to your product. Their data is automatically included in LCA and reports, and updates to the entity will reflect in your product, keeping your data accurate and current.

:::tip Get started
Browse around on the product page and get familiar with it.

Hovering a section will show a small description of what it represents.

Clicking an `Add` button opens a side panel to add data and a help window (like this one) with detailed guidance on the entity and adding process.
:::

<!--
:::tip Learn more
Click the question mark icon next to each sections title to learn more about it.

For a full in-depth explanation of the product page, the different sections, and product creation in general,  click the `Read full docs` button at the top right of this window.
:::
-->






