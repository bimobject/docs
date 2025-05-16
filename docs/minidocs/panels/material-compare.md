---
layout: false
search: false
---

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()

const entityName = ref('')
const articleName = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  entityName.value = params.get('entity') || 'product';
  articleName.value = params.get('article') || null;

  if (articleName.value) {
    articleName.value = decodeURIComponent(articleName.value);
  }
});
</script>

<MinidocStyles />

## Material properties and comparisons

This panel shows the properties of the selected linked material.

## Fields

Some of the fields are read-only, and some are editable. The read-only fields represent data that comes from the linked material. The editable fields are stored as part of the {{entityName}} you are currently editing<span v-if="articleName"> ("**{{articleName}}**" in this instance)</span>.

| Name | Description |
| --- | --- |
| Material name | The name of the material. |
| Unit | The unit used to measure a single quantity of the material. |
| Category | What category the material belongs to. |
| Origin | Where the material is sourced from. |
| Amount | How much of this material is used in the {{entityName}}<span v-if="articleName">&nbsp;"**{{articleName}}**"</span>, in the unit specified in the `Unit` field above. This should include all material, both that is used in the final {{entityName}}, and that is wasted during the manufacturing process. |
| Waste | The percentage of the material that is considered waste at the end of the manufacturing process. An `Amount` of _1kg_ of material with a `Waste` of _10%_ means that _0.1kg_ of the material is wasted. |
| Recycled content | How much of the raw material that comes from recycled sources. |
| Chemical identifier | The chemical identifier of the material. Follows the CAS or EC standards. Mainly used for generating EPD's. |
| Process | Wether or not to include the data on the materials full manufacturing process in the {{entityName}}. Uncheck this box if you get the material unprocessed from your material suppliers. |
| GWP total | The total global warming potential of the material. |

:::warning The data is scoped
The editable fields are **not** global, and will only be saved as part of the {{entityName}}<span v-if="articleName">&nbsp;"**{{articleName}}**"</span>. This allows you to use the same material in multiple entities, but have their usage be tracked based on the relevant manufacturing process.
:::

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the material. This graph is interactive, and can show data for multiple different impact categories.

## Comparing materials
In some cases, you may want to compare the current material with an alternative one. This can be helpful for Eco Design efforts or when you're unsure if you've selected the correct material for your {{entityName}}.

### Adding a material to the comparison
To compare materials, click the `Compare` button in the top right corner of the panel. This will open a sidepanel listing all the materials in EandoX.

Select the material you want to compare with and click the `Add material` button. The selected material's properties will appear in the sidepanel, and its data will be displayed in the impact graph at the bottom.

### Removing a material from comparison
You can remove a material from the comparison by clicking the `Remove` button above the top right corner of the material's properties.

### Replacing the current material with an alternative one
To replace the currently added material with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.