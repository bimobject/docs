---
layout: false
---

<script setup>
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()
</script>

<MinidocStyles />

## What is a material?

A material is the raw material that is used to create a product.

An example of a material is **cotton**.

## Adding a material to your product

Select the materials you want to add by ticking the box next to its name. Then click the `Add material` button in the top right corner of the sidepanel. This will close the sidepanel, and the materials you selected will show up in the materials table.

![Image of the materials table](/images/product/added-materials.jpg)

If you've added components in the **Components** section, their materials are already included in the component data, so there's no need to add them separately. If you

The same goes for any material that is used for packaging. This should be created as a _Packaging_ entity, and attached to the product in the **Packaging** section.

:::tip Work smarter, not harder
You can use the search input at the top of the sidepanel to search for materials by name.
:::

## Requesting missing materials

All data on materials is created by the EandoX team using historical data from the industry. Missing materials can be requested by clikcing the `Request missing material` button in the top right corner of the sidepanel.

