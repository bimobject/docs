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

This panel shows the properties of the selected packaging.

## Fields

Some of the fields are read-only, and some are editable.

| Name | Description |
| --- | --- |
| Unit | The unit used to measure a single quantity of the packaging. |
| Amount | How much of this packaging is used in the product, in the unit specified in the `Unit` field above. |
| Packaging weight | The weight of one single quantity of the packaging, in the unit specified in the `Unit` field above. |
| Total weight | The total weight of the packaging used in the product. |
| GWP total | The total global warming potential of the packaging. |

:::warning The data is scoped
The editable fields are **not** global, and will only saved for this product. This allows you to use the same packaging in multiple entities, but have its impact be tracked based on the relevant manufacturing process.
:::

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the material. This graph is interactive, and can show data for multiple different impact categories.

## Comparing packaging
In some cases, you may want to compare the current packaging with an alternative one. This can be helpful for Eco Design efforts or when you're unsure if you've selected the best packaging for your product.

### Adding a packaging to compare
To compare packaging, click the `Compare` button in the top right corner of the panel. This will open a sidepanel listing all the packaging entities in your library.

Select the packaging you want to compare and click the `Add packaging` button. The selected packaging's properties will appear in the sidepanel, and its data will be displayed in the impact graph at the bottom.

### Removing a packaging from comparison
You can remove a packaging from the comparison by clicking the `Remove` button above the top right corner of the packaging's properties.

### Replacing the current packaging with an alternative one
To replace the currently added packaging with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.