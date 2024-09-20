# Product overview

<!-- Add docs for batch actions on this page? -->

In Eando X, everything revolves around your products. Every other entity you create will be connected to one or more products at some point. Each product corresponds to a single SKU (Stock Keeping Unit).

:::tip
Entities are referring to the different data types that you can create or manage in Eando X. The entities are `Product`, `Component`, `Material`, `Packaging`, `Factory`, `Transport` and `Supplier`.

To get an overview of all the entities and how they relate to each other, you can read the [Workflow overview](/documentation/getting-started/workflow-overview).

:::

## What is a product?

A product is the end result of your manufacturing process. It acts as a container that holds all the supply chain data for one of your products. This data is used by Eando X to generate LCAs, EPDs and other reports.

:::tip Do more with what you have
The unique way Eando X handles your supply chain data allows you to reuse it for different purposes. Focus on your products, and the EPD generator makes sure their data is declared in the correct way.

Read more about EPD's in Eando X [here](/documentation/epd/epd-overview).
:::

## Requesting a product

<!--@include: ../__partials/product-request.md -->

## Product versioning

Product entities in Eando X are versioned to allow for changes in your manufacturing process or supply chain.

A product can have two states: _Draft_ and _Published_.

Saving a product only saves it as a draft. Publishing a product creates a new version of it, and saves the current data as a "snapshot".

Changing the data and only saving it (without a publish) will only affect the draft version of the product. The published version will be unchanged.


## Product creation quickstart
If you are new to Eando X, and want to get started quickly you can read the [product creation quickstart](/documentation/getting-started/workflow-overview) guide. It will not go into much detail on all the different features of the platform, but it will get you up and running quickly.

It is however recommended to read the documentation on [creating a product](/documentation/product/creating-a-product) at some point, as it goes into much more detail of how to get the most out of the platform.
