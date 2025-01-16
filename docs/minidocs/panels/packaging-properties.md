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

## Packaging properties and comparisons

This panel shows the properties of the selected packaging. Some of the fields are read-only, and some are editable.

:::warning The data is scoped
The editable fields are **not** global, and will only saved for this product. This allows you to use the same packaging in multiple entities, but have its impact be tracked based on the relevant manufacturing process.
:::

## Fields

| Name | Description |
| --- | --- |
| Unit | The unit used to measure a single quantity of the packaging. |
| Amount | How much of this packaging is used in the product, in the unit specified in the `Unit` field above. |
| Packaging weight | The weight of one single quantity of the packaging, in the unit specified in the `Unit` field above. |
| Total weight | The total weight of the packaging used in the product. |
| GWP total | The total global warming potential of the packaging. |

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the material. This graph is interactive, and can show data for multiple different impact categories.

## Comparing packaging
In some cases you may want to compare the currently used packaging with another packaging. This can be useful if you are working with Eco Design, or if you're just unsure if you have selected the right packaging for your product.

To compare packaging entities, click the `Compare` button in the top right corner of the panel. This will open a side panel with a list of all the packaging entities in your library.

Select the packaging you want to compare with and click the `Add packaging` button. This will show the selected packaging properties in the sidepanel, and show its data in the impact graph at the bottom of the panel.

You can remove a packaging from the comparison by clicking the `Remove` button above the top right corner of the packaging properties.

To replace the currently added packaging with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.