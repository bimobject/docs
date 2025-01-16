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

This panel shows how the the selected material has been transported.

:::warning The data is scoped
The editable fields are **not** global, and will only saved for this product. This allows you to use the same transport in multiple entities, but have its impact be tracked based on the relevant manufacturing process.
:::

## Generic vs specific data

By default, the material transport will be set to use generic data. This works well when starting out, but to get the most accurate data, it is recommended to fill out data specific to you manufacturing process.

To do this, uncheck the `Use generic value` checkbox in the panel, and click the `Add transport` button that appears in the field.

This will open a sidepanel where you can add all data for the transport.

If multiple modes of transportation are used, you can add multiple transports.

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the material. This graph is interactive, and can show data for multiple different impact categories.

## Comparing transports

In some cases you may want to compare the currently used transport scenario with an alternate one.

Click the `Compare` button in the top right corner of the panel. This will create an alternate transport scenario that you can fill out in the same way as the main one.

You can remove a transport scenario from the comparison by clicking the `Remove` button above the top right corner of the transports properties.

To replace the currently added transport with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.