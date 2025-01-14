---
layout: false
search: false
---

<script setup>
import { useData } from 'vitepress'
import MinidocStyles from '../MinidocStyles.vue'
const { site, frontmatter } = useData()

const urlParams = new URLSearchParams(window.location.search)
const entityName = urlParams.get('entity')
</script>

<MinidocStyles />

## What is a component?

<!--@include: ../../documentation/__partials/component-explanation.md -->

## Adding a component to your {{entityName}}

Select the components you want to add by ticking the box next to their name. Then click the `Add component` button in the top right corner of the sidepanel. This will close the sidepanel, and the components you selected will show up in the **Components section** table.

![Image of the components table](/images/product/added-component.jpg)

:::tip Work smarter, not harder
You can use the search inputs at the top of the sidepanel to search for components by name or article number.
:::

## What's in the sidepanel?

The list in the **Add component sidepanel** shows all the components and products that are available in your library.

You can add both _component entities_ and _product entities_ in the **Components section**. Components and products can be created by you, or imported from your suppliers.

:::warning Nothing in the list?
If this list is empty, you need to create a component or product, add supplier products to your library, or request a component from a supplier first.

Learn more about this in the full documentation. You can find it by clicking the `Read full docs` button at the top right of this window.
:::