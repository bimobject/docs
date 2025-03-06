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

## Packaging properties and comparisons

This panel shows the properties of the selected linked packaging.

## Fields

Some of the fields are read-only, and some are editable. The read-only fields represent data that comes from the linked packaging. The editable fields are stored as part of the {{entityName}} you are currently editing<span v-if="articleName"> ("**{{articleName}}**" in this instance)</span>.

| Name | Description |
| --- | --- |
| Unit | The unit used to measure a single quantity of the packaging. |
| Amount | How much of this packaging is used in the {{entityName}}<span v-if="articleName">&nbsp;("**{{articleName}}**")</span>, in the unit specified in the `Unit` field above. |
| Packaging weight | The weight of one single quantity of the packaging, in the unit specified in the `Unit` field above. |
| Total weight | The total weight of the packaging used in the {{entityName}}<span v-if="articleName">&nbsp;("**{{articleName}}**")</span>. |
| Reuse | This packaging can be reused multiple times, either by you or others. This will distribute the  environmental impact across the entire lifespan of the packaging. |
| GWP total | The total global warming potential of the packaging. |

:::warning The data is scoped
The editable fields are **not** global, and will only be saved as part of the {{entityName}}<span v-if="articleName">&nbsp;"**{{articleName}}**"</span>. This allows you to use the same packaging in multiple entities, but have its impact be tracked based on the relevant manufacturing process.
:::

## Impact graph

At the bottom of the panel, you will see an environmental impact graph for the packaging. This graph is interactive, and can show data for multiple different impact categories.

## Comparing packaging
In some cases, you may want to compare the current packaging with an alternative one. This can be helpful for Eco Design efforts or when you're unsure if you've selected the correct packaging for your {{entityName}}<span v-if="articleName">&nbsp;("**{{articleName}}**")</span>.

### Adding a packaging to the comparison
To compare packaging, click the `Compare` button in the top right corner of the panel. This will open a sidepanel listing all the packaging entities in your library.

Select the packaging you want to compare with and click the `Add packaging` button. The selected packaging's properties will appear in the sidepanel, and its data will be displayed in the impact graph at the bottom.

### Removing a packaging from comparison
You can remove a packaging from the comparison by clicking the `Remove` button above the top right corner of the packaging's properties.

### Replacing the current packaging with an alternative one
To replace the currently linked packaging with one in the comparison, check the radio button next to its name, and then click the `Use selected` button in the top right corner of the sidepanel.