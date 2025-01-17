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

## What is a factory?

<!--@include: ../../documentation/__partials/factory-explanation.md -->

## Adding a factory to your {{entityName}}

Tick the boxes next to the factories you want to add, then click `Add factory`. The sidepanel will close, and the selected factories will appear in the **Factory section** table.

![Image of the factories table](/images/product/added-factories.jpg)

:::tip Work smarter, not harder
You can use the search inputs at the top of the sidepanel to search for factories by name.
:::

### Factory division

It is not uncommon for a {{entityName}} to be manufactured and assembled in multiple factories. Therefore, you can add multiple factories to your {{entityName}}.

If the {{entityName}} has multiple factories, use the `Division` field in the **Factory section**to specify the percentage of manufacturing each factory contributed.

## What's in the sidepanel?

The list in the **Add factory sidepanel** shows all the factories that are available in your library. _Factory_ entities are created by you on the `Factories` page.

:::warning Nothing in the list?
If this list is empty, you need to create a factory first.

Learn more about this in the full documentation. You can find it by clicking the `Read full docs` button at the top right of this window.
:::

## Default factory data

You can create {{entityName + 's'}} without adding any factories to them.

If you don't add any factory entities to a {{entityName}}, Eando X will use generic factory data. This will lower the {{entityName + 's'}} data quality, and could result in a worse environmental impact score.