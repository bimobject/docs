# Component overview

A component is a reusable part of a product. While products and components are nearly identical, components are specifically designed for use within other products.
If you manufacture a product that only exists as a part of a larger product (and is only used internally in your own company), it should probably be a component.

An example of this is a **seat** that is part of multiple different **chairs**, but never sold separately.

## Benefits of using components

The biggest benefit of using components is that they provide a clear distinction between the `products` you sell (that have an SKU), and the `components` that are only produced to be used in other products.

They still provide the same reusability: In the **chair** example above, one change to a **seat** would update the LCA for all the **chairs** that use it.

## Requesting a component

<!--@include: ../__partials/product-request.md -->

## Component versioning

Component entities in Eando X are versioned to allow for changes in your manufacturing process or supply chain.

A component can have two states: `Draft` and `Published`.

Saving a component only saves it as a draft. Publishing a component creates a new version of it, and saves the current data as a "snapshot".

Changing the data and only saving it (without a publish) will only affect the draft version of the component. The published version will be unchanged.
