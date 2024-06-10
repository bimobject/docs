# Product overview

<!-- Add docs for batch actions on this page? -->

In Eando X, everything revolves around the products you create. Every other entity you create will be connected to one or more products at some point. Each product corresponds to a single SKU (Stock Keeping Unit).

:::tip
Entities are referring to the different types of data that you can create in Eando X. The entities are `Product`, `Component`, `Material`, `Packaging`, `Factory`, `Transport` and `Supplier`.

To get an overview of all the entities and how they relate to each other, you can read the [Workflow overview](/documentation/getting-started/workflow-overview).

:::

## What is a product?

A product is the end result of your manufacturing process. You can see them as containers that hold all the supply chain data for one of your products. This data is used by Eando X to generate a LCA.

You can also use the products to generate EPD reports. Read more about EPD's Eando X [here](/documentation/epd/epd-overview).

## Requesting a product

<!--@include: ../__partials/product-request.md -->

## Product versioning

Product entities in Eando X are versioned to allow for changes in your manufacturing process or supply chain.

A product can have two states: Draft and Published.

Saving a product only saves it as a draft. Publishing a product creates a new version of it, and saves the current data as a "snapshot".

Changing the data and only saving it (without a publish) will only affect the draft version of the product. The published version will be unchanged.
