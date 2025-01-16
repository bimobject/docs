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

## Component properties and comparisons

This panel shows the properties of the selected component. Some of the fields are read-only, and some are editable.

:::warning The data is scoped
The editable fields are **not** global, and will only saved for this product. This allows you to use the same component in multiple entities, but have its usage be tracked based on the relevant manufacturing process.
:::

## Fields

| Name | Description |
| --- | --- |
| Component name | The name of the component. |
| Article number | The article number of the component. |
| Component weight | The weight of a single quantity of the component. |
| Amount | How much of this component is used in the product, in the unit specified in the `Unit` field below. |
| Waste | The percentage of the component that is considered waste at the end of the manufacturing process. An `Amount` of _1kg_ with a `Waste` of _10%_ means that _0.1kg_ of the component is wasted. |
| Transfer Packaging | Wether or not to include this components packaging in the final product. |
| Unit | The unit used to measure a single quantity of the packaging. |
| Supplier | The name of the components supplier (if any). |
| GWP total | The total global warming potential of the component. |

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the component. This graph is interactive, and can show data for multiple different impact categories.

## Comparing components
In some cases you may want to compare the currently used component with another component. This can be useful if you are working with Eco Design, or if you're just unsure if you have selected the right component for your product.

To compare components, click the `Compare` button in the top right corner of the panel. This will open a side panel with a list of all the components in your library.

Select the component you want to compare with and click the `Add component` button. This will show the selected component properties in the sidepanel, and show its data in the Impact graph at the bottom of the panel.

You can remove a component from the comparison by clicking the `Remove` button above the top right corner of the components properties.

To replace the currently added component with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.