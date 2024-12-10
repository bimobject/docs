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

## This is the factories section

This section is where you can add and manage all factories that are used in the manufacturing process of this product.

Factories are where your product is made. It is not uncommon for a product to be manufactured and assembled in multiple factories.

You do not have to add packaging for any attached components, as they are already included in the component data.

:::warning Default factories
You can create products without adding any factories to them.

If you don't add any factory entities to a product, Eando X will use default factory data. This will lower the products data quality, and might make your environmental impact score worse.
:::

:::tip Learn more
For a full in-depth explanation of the factories section and sidepanel, click the `Read full docs` button at the top right of this window.
:::