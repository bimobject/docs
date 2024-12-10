---
layout: false
---

<script setup>
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()
document.body.classList.add('vp-doc')
</script>

<MinidocStyles />

![Image of the product dependency tree](/images/placeholder.png)

## This is the materials section

This section is where you can add and manage all materials that are used in the manufacturing process of this product.

You do not have to add materials for any attached components, as they are already included in the component data.

The same goes for any material that is used for packaging. This should be created as a _Packaging_ entity, and attached to the product in the packaging section.

## Requesting missing materials

Materials data is managed by the Eando X team. If you're missing a material, you can request it from us.

:::tip Learn more
For a full in-depth explanation of the materials section and sidepanel, click the `Read full docs` button at the top right of this window.
:::