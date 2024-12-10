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

## This is the packaging section

This section is where you can add and manage all packaging that is used in the manufacturing process of this product.

You do not have to add packaging for any attached components, as they are already included in the component data.

:::warning Default packaging
You can create products without adding any packaging to them.

If you don't add any packaging entities to a product, Eando X will use generic packaging data. This will lower the products data quality, and might make your environmental impact score worse.
:::

:::tip Learn more
For a full in-depth explanation of the packaging section and sidepanel, click the `Read full docs` button at the top right of this window.
:::