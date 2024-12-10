---
layout: false
---

<script setup>
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()
</script>

<MinidocStyles />

This is the section where you can see the environmental impact of your product.

:::warning Empty section?
If you don't see anything in the graph, it's likely that you haven't entered any data yet.

Make sure to fill out all the necessary data fields, and click `Save` to save the data. This will trigger the LCA calculations, and update the impact graph.
:::

## Viewing modes
The impact section has two view modes, the **Graph**, and the **Calculation Log**.

### Graph mode

In this mode, you can see the impact of your product over time. The graph shows the impact of your product on the environment, broken down by the selected category.

### Calculation Log mode

In this mode, you can see the calculation log for your product. The calculation log shows the steps that were taken to calculate the impact of your product.

:::tip Learn more
For a full in-depth explanation of the impact section, the different modes, and impact calculations in general,  click the `Read full docs` button at the top right of this window.
:::