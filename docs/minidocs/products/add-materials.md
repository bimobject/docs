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

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  entityName.value = params.get('entity') || 'product';
});
</script>

<MinidocStyles />

## What is a material?

<!--@include: ../../documentation/__partials/material-explanation.md -->

## Adding a material to your {{entityName}}

Select the materials you want to add by ticking the box next to their name. Then click the `Add material` button in the top right corner of the sidepanel. This will close the sidepanel, and the materials you selected will show up in the **Materials section** table.

![Image of the materials table](/images/product/added-materials.jpg)

If you have added components to the **Components section**, their materials are already included in the component data, so there's no need to add them again in this section.

The same goes for any material that is used for packaging. This should be created as a _Packaging entity_, and attached to the product in the **Packaging section**.

:::tip Work smarter, not harder
You can use the search input at the top of the sidepanel to search for materials by name.
:::

## What's in the sidepanel?

The list in the **Add material sidepanel** shows all the materials that are available in your library. All data on materials is created by the Eando X team using historical data from the industry.

If you find yourself in need of a material that is not in the list, you can request it from us by clicking the `Request missing material` button in the top right corner of the sidepanel.

