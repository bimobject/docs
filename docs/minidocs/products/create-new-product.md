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

![Image of the dependency tree](/images/placeholder.png)

## The product creation sidepanel

Before you can add any product data, you first need to enter some basic information about your product, in the sidepanel to the right.

This information can be changed later on, but it is recommended to fill it out correctly the first time.

## Fields

The fields in the sidepanel are as follows:

| Field name          | Field description                                             |
| ------------------- | ------------------------------------------------------------- |
| **Product name**    | The name of the product.                                      |
| **Article number**  | This is used to identify the product, so it should be unique. |
| **Functional Unit** | The unit in which the product is sold.                        |
| **Description**     | A description of the product.