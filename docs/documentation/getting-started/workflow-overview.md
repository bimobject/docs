---
next:
  text: 'Product overview'
  link: '/documentation/product/product-overview'
---

# Workflow overview

Eando X is designed to make it easy to maintain, inspect and update your products supply chain data.

In most manufacturing processes, you typically have at least one supplier from whom you order components. If you use supplier-sourced components in your products, you can either create all products and components yourself or invite your suppliers to join the Eando X. This will allow them to create and share the components you order from them. By requesting suppliers to create these components, you ensure that the data is accurate, and any updates they make to their manufacturing processes will automatically update in your products over time.

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

All data on materials is created by us using historical data from the industry. Missing materials can be requested from Eando X.

An example of a material is **cotton**.

:::

:::info Packaging

A packaging is all materials that are used to package a product.

An example of a packaging for an **armchair** could be **cardboard**, **plastic wrapping** and **pallet**.

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

A common workflow is as follows:

### 1. Add supplier components
If your product uses components sourced from suppliers, add those components to your library.

#### If your supplier is not connected to Eando X yet:
1. [Invite](/documentation/supplier/inviting-a-supplier) your supplier to join Eando X.
2. [Request](/documentation/supplier/creating-a-product-request) that they create the components you need.
3. In the meantime, you can create placeholder components yourself and later replace them with the supplier’s official components.

#### If your supplier is already connected to Eando X:
1. [Add the supplier](/documentation/supplier/adding-a-supplier) to your supplier list.
2. [Add the components](/documentation/supplier/accessing-supplier-products) to your library.
3. If the required component doesn’t exist yet, [send a request](/documentation/supplier/creating-a-product-request) to the supplier to create it.

### 2. **Handle reusable sub-assemblies**
If your product includes sub-assemblies that are reused across multiple products, create them as [components](/documentation/component/component-overview).

### 3. **Create a product**
Start by [creating the product](/documentation/product/creating-a-product) you want to declare.

### 4. **Attach relevant entities to your product**
Link all the necessary entities to your product, such as other products, supplier components and materials.

- If it's your first product, you can use generic data for **transport**, **packaging**, and **factory**.
- If you're an advanced user, you can create your own [transport](/documentation/transport/transport-overview), [packaging](/documentation/packaging/packaging-overview), and [factory](/documentation/factory/factory-overview) data.


## The product improvement cycle
Eando X is a great platform for not only tracking your products current performance, but also for improving it over time. This work can be split up into a cycle of four steps:

![Image of the product improvement cycle](/images/getting-started/cycle.jpg)

### Collect
Collect your product data in a structured and efficient manner. Combine manual data collection with automation and integration to build a scalable data management process that grows alongside your sustainability efforts and goals.

A streamlined and systemized approach ensures dynamic improvements in data quality while maintaining full traceability.

### Measure
Using Eando X you can structure, control and manage the collected data in an efficient way. The platform's robust data structure is key to making sure that the model is scaling with your businesses maturity.

### Report
The built-in tools in Eando X are designed to meet all your reporting needs, ensuring you stay compliant with legal regulations while also addressing market demands. Whether you're reporting for regulatory purposes, such as EU regulations, or for customer-facing sustainability initiatives.

### Reduce
Tracking your product’s life cycle trends allows you to find environmental sinkholes.

Emission reduction doesn’t need to be in the initial strategy, but all the previous steps are key to making an efficient reduction journey.

## Next steps

You can read about the product creation process in detail [here](/documentation/product/product-overview), or check out the [product creation quickstart](/documentation/guides/creating-your-first-product) guide for a quicker overview of all the essential first steps.
