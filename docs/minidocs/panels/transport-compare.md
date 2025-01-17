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

## Transport properties and comparisons

This panel shows how the the selected entity has been transported.

## Generic vs specific data

By default, the transport uses generic data, which is fine for starting out. However, for more accurate results, it's recommended to use data specific to your manufacturing process.

To do this, uncheck the `Use generic value` checkbox in the panel, and click the `Add transport` button that appears in the field.

This will open a sidepanel where you can add all data for the transport.

If multiple modes of transportation are used, you can add multiple transports.

:::warning The data is scoped
The editable fields are **not** global, and will only saved for this product. This allows you to use the same transport in multiple entities, but have its impact be tracked based on the relevant manufacturing process.
:::

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the material. This graph is interactive, and can show data for multiple different impact categories.

## Comparing transports

In some cases you may want to compare the currently used transport scenario with an alternate one.

### Adding a transport to compare
Click the `Compare` button in the top right corner of the panel to create an alternate transport scenario. You can fill it out the same way as the main one.

### Removing a transport from comparison
You can remove a transport scenario from the comparison by clicking the `Remove` button above the top right corner of the transport's properties.

### Replacing the current transport with an alternative one
To replace the currently added transport with one from the comparison, check the radio button next to its name, then click the `Use selected` button in the top right corner of the sidepanel.


