---
layout: false
search: false
---

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import MinidocStyles from './MinidocStyles.vue'
const { site, frontmatter } = useData()

const entityName = ref('')

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  entityName.value = params.get('entity') || 'product';
});
</script>

<div id="see-impact-section">

## Impact section

This shows the environmental impact of this {{entityName}}.

Click the `?` button in the section to learn more.

</div>



<div id="add-components-section">

## Components section

These are the components (or other products) that are included in this {{entityName}}.

They can come from your own product library, or from external suppliers.

</div>


<div id="add-materials-section">

## Materials section

These are the materials used in this {{entityName}}.

This section should not include materials that are already part of an attached Component or Packaging.

</div>


<div id="add-packaging-section">

## Packaging section

This is how this {{entityName}} is packaged.

You can use packaging entities you've created, generic data, or omit packaging altogether.

</div>

<div id="add-factories-section">

## Factories section

This is where this {{entityName}} is manufactured or assembled.

You can use factory entities you've created, generic data, or omit factories altogether.

If you have multiple factories, use the `Division` field to specify the percentage of manufacturing each factory contributed.
</div>


<div id="see-relations-section">

## Relations section

This section shows you other products and components where this {{entityName}} is used.

This section is only presentational, and can not be interacted with. It's there for you to see how your {{entityName}} relates to the rest of your product library.

Visualizing these relationships helps you understand how changes to one entity spreads throughout your catalog. It can also guide you toward products that might need further review or updates after your changes are applied.

</div>