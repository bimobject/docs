---
layout: false
search: false
---

<script setup>
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()
</script>

<MinidocStyles />

## This is a product entity

In Eando X, everything centers on your products. A product represents a single SKU, and can be seen as a container that holds data from other entities (such as components, materials, packaging, factories etc.).

![Image of the product dependency tree](/minidocs/products/product-diagram.jpg)

## Adding product data

The product page is divided into sections. The sections **Components**, **Materials**, **Packaging**, and **Factories** are used to add and manage product data.

![Image of the product page](/images/minidocs/products/sections.jpg)

### Entities are references

When you add an entity to a product, its data is included in your LCAs and reports. However, the entity itself is only a link to its original data source. This means that an update to the entity will reflect in all products using it, keeping your data accurate and consistent across your catalog.

The data that is unique to the product is the one that can be edited from the product page.

:::warning Example
If the component _screw_ is used in the products _chair_ and _desk_, the _screw_ data (e.g., **weight** or **material**) comes from the component.

In turn, the _chair_ and _desk_ hold their own specific data, like the **amount** of screws used.

If you change the **material** used in the _screw_, this will reflect in _desk_ and _chair_ as well, but not affect the **amount** of screws used in the products.
:::

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






