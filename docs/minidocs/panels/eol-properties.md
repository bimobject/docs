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

## End of life properties and comparisons

This panel shows how the selected linked material is handled at the end of its life cycle.

## Generic vs specific data

By default, the material's EOL properties use generic data, which is fine for starting out. However, for more accurate results, it's recommended to use data specific to your manufacturing process.

To do this, uncheck the `Use generic value` checkbox and enter your process-specific data in the fields.

## Fields

| Name | Description |
| --- | --- |
| Landfill | How much of the material is sent to landfills. |
| Recycling | How much of the material is sent to recycling centers. |
| Incineration | How much of the material is sent to incinerators. |
| Total | The sum of all EOL fields. This must add up to 100%. |

All fields feature a button where you can edit the type of landfill, incineration and recycling. This data is used to calculate a more accurate environmental impact. In most cases, you will not need to change this.

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the EOL scenario. This graph is interactive, and can show data for multiple different impact categories.

## Comparing EOL scenarios

In some cases you may want to compare the currently used EOL scenario with an alternative one.

### Adding an EOL scenario to the comparison
Click the `Compare` button in the top right corner of the panel to create an alternative EOL scenario. You can fill it out just like the main scenario.

### Removing an EOL scenario from comparison
You can remove an EOL scenario from the comparison by clicking the `Remove` button above the top right corner of the EOL properties.

### Replacing the current EOL scenario with an alternative one
To replace the current EOL scenario with one from the comparison, select the radio button next to its name and click the `Use selected` button in the top right corner of the side panel.
