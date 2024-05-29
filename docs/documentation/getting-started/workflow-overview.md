---
next:
  text: 'Product overview'
  link: '/documentation/product/product-overview'
---

# Workflow overview

You can either create all products and components yourself, or invite your suppliers to create declarations of the products you order from them. Asking a supplier to create components for you ensures that all the data is correct, and if they would happen to update their manufacturing chain, these changes will be automatically reflected in your products as well.

## Quick terminology

:::info Entity

An entity refers to the different types of data that you can create in Eando X. The entities are `Product`, `Component`, `Material`, `Packaging`, `Factory`, `Transport` and `Supplier`.
:::

:::info Product

A product is the end result of your manufacturing process. This is what you will be working with the most. All other entities are connected to one or multiple products.

An example of a product is an **armchair**.
:::

:::info Component

A component is a reusable sub-assembly of a product. When you change the properties of a component, these changes will be reflected in all products that use this component.

Components can be created by you, or requested from your suppliers.

An example of a component is a **cushion**. This cushion could be used once in different models of an **armchair**, and/or multiple times in a **sofa**.
:::

:::info Material

A material is the raw material that is used to create a product.

An example of a material is **cotton**.

:::danger TODO:

    - Can you create materials yourself?
    - Who do you request materials from?

:::

:::info Packaging

A packaging is all materials that are used to package a product.

An example of a packaging for an **armchair** could be **cardboard**, **plastic wrapping** and **pallet**.

:::danger TODO:

    - Reusable packaging?
    - Who do you request packaging from?
    - Can you create packaging yourself?

:::

:::info Factory

A factory is the location where your product is manufactured, and what environmental impact the manufacturing process has.
:::

:::info Transport

A transport is the vehicle used to transport your product and/or its parts.

An example of a transport for an **armchair** could be **boat** and **truck**.
:::

:::info Supplier

A supplier is the company that manufactures components that are used in your products.

You can invite suppliers to create declarations of the products you order from them. Allowing suppliers to create their components themselves allows the data to be more correct and up to date. It removes the need for regular check-ins with suppliers and reduces the need for NDAs.
:::

## Process

:::danger TODO:
Make this cleaner
:::

The most common workflow is as follows:

- Create a **product**.
- Attach all relevant entities to your **product**.
- If you're creating your first product you will need to create some of these entities, like **transport**, **packaging** and **factory**.
- Any reusable sub-assemblies should be created as **components**.
- Any components that you order from a supplier should be attached as **components**.
  - If your supplier is not yet connected to Eando X, you can invite them and request that they create the products you need. While waiting for them, you can create their components yourself and replace them with the ones created by your supplier later on.
  - If your supplier is already connected to Eando X, you can add them to the list of your suppliers. You can then find their products and add them as components to your **product**. If the product does not exist yet, you can request it from your supplier.

## Next steps

If you
Read more and start creating your first product [here](/documentation/product/product-overview).
