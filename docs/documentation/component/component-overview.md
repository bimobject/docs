# Component overview

A component is a reusable part of a product. Products and components are nearly identical, but components are specifically designed to be used within other products.

The most common characteristics of a component are:

- It only exists as a part of other products.
- It's only used internally in your own company.
- It's never sold separately.

If your component doesn't meet these criteria, it should probably be a product.

An example of this is a **seat** that is part of multiple different **armchair**s, but never sold separately.

## Benefits of using components

The biggest benefit of using components is that they provide a clear distinction between:

- `Products` that you sell to customers (with SKUs)
- `Components` that you only use internally as parts of your other products

They still provide the same reusability: In the **armchair** example above, one change to a **seat** would update the LCA for all the **armchair**s and **sofa**s that include the **seat**.

:::warning Components and reporting
Since the `Component` entity is intended for internal use only, it cannot have individual reporting, such as an EPD, on its own.
:::

## Requesting a component

<!--@include: ../__partials/product-request.md -->

## Component versioning

Component entities in EandoX are versioned to allow for changes in your manufacturing process or supply chain.

A component can have two states: `Draft` and `Published`.

Saving a component only saves it as a draft. Publishing a component creates a new version of it, and saves the current data as a "snapshot".

Changing the data and only saving it (without a publish) will only affect the draft version of the component. The published version will be unchanged.
