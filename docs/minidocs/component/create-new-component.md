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

## The component creation sidepanel

Before you can add any component data, you first need to enter some basic information about your component, in the sidepanel to the right.

This information can be changed later on, but it is recommended to fill it out correctly the first time.

## Fields

The fields in the sidepanel are as follows:

| Field name          | Field description                                             |
| ------------------- | ------------------------------------------------------------- |
| Component name    | The name of the component.                                      |
| Article number  | This is used to identify the component, so it should be unique. |
| Functional Unit | The unit in which the product is measured.                        |