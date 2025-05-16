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

## What is a packaging?

<!--@include: ../../documentation/__partials/packaging-explanation.md -->

## Adding a packaging to your {{entityName}}

Tick the boxes next to the packaging you want to add, then click `Add packaging`. The sidepanel will close, and the selected packaging will appear in the **Packaging section** table.

![Image of the packaging table](/images/product/packaging-added.jpg)

:::tip Work smarter, not harder
You can use the search inputs at the top of the sidepanel to search for packaging by name.
:::

## What's in the sidepanel?

The list in the **Add packaging sidepanel** shows all the packaging that is available in your catalog and library. _Packaging_ entities are created by you on the `Packaging` page, or imported from the `Global Library`.

:::warning Nothing in the list?
If this list is empty, you need to create or import a packaging first.

Learn more about this in the full documentation. You can find it by clicking the `Read full docs` button at the top right of this window.
:::

## Default packaging data

You can create {{entityName + 's'}} without adding any packaging to them.

If you don't add any packaging entities to a {{entityName}}, EandoX will use generic packaging data. This will lower the {{entityName + 's'}} data quality, and could result in a worse environmental impact score.
