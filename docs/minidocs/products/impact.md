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

In this section you can inspect the environmental impact of your {{entityName}}.

:::warning Empty section?
If you don't see anything in the graph, it's likely that you haven't entered any data yet.

Make sure to fill out all the necessary data fields, and click `Save` to save the data. This will trigger the LCA calculations, and update the impact graph.
:::

## Viewing modes
The impact section has two view modes, the **Graph**, and the **Calculation Log**.

### Graph mode

In this mode, you can see the impact of your {{entityName}} over time. The graph shows the environmental impact broken down by the selected category.

### Calculation Log mode

In this mode, you can see the calculation log for your {{entityName}}. The calculation log shows the steps that were taken to calculate the impact.

:::tip Learn more
For a full in-depth explanation of the impact section, the different modes, and impact calculations in general,  click the `Read full docs` button at the top right of this window.
:::