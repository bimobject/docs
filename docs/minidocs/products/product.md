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

The product page is organized into several sections, some specifically designed for finding and linking entities to your product:

![Image of the product page](/images/minidocs/products/sections.jpg)

Each section features an `Add` button in the top-right corner. Clicking it opens a side panel where you can search for and add an entity to your product.

The entity's data will be included in all product LCA and reporting calculations. If the entity is updated, the changes will automatically reflect in your product calculations, ensuring your data remains accurate, reusable, and up to date.

:::tip Learn more
Click the question mark icon next to each sections title to learn more about it.

For a full in-depth explanation of the product page, the different sections, and product creation in general,  click the `Read full docs` button at the top right of this window.
:::







