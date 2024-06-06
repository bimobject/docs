# Creating a product

This guide will walk you through the process of creating a product in Eando X.

:::warning Components
If you have a product that is used exclusively as a sub-assembly in other products (e.g. a **seat** used in multiple **chairs**, but not sold separately), you can create it as a component. The component creation process is nearly identical to the product creation process.

Read more about components [here](/documentation/component/component-overview).
:::

## Creating a new product

Navigate to the `Products` page in the left navigation menu, and click the `Create product` button in the top right corner.

![Image of the products page with the create product button](/images/product/create-product-button.jpg)

This will open a modal window where you can fill out the necessary information for your product. This information can be changed later on, but it is recommended to fill it out correctly the first time.

![Image of the product creation modal window](/images/product/create-new-product-modal.jpg)

The fields in the modal window are as follows:

| Field name          | Field description                                             |
| ------------------- | ------------------------------------------------------------- |
| **Name**            | The name of the product.                                      |
| **Article number**  | This is used to identify the product, so it should be unique. |
| **Functional unit** | The unit in which the product is sold.                        |
| **Description**     | A description of the product.                                 |

Click `Confirm` to create the product. This will take you to the product page where you can see and edit the details of your product, and start attaching other entities to it.

## Editing a product

If you want to edit an existing product, you can navigate to the `Products` page in the left navigation menu and click the product you want to edit. From there you can follow all the steps below.

![Image of the product overview page](/images/product/overview.jpg)

## The product page

On the product page, you will see multiple sections:

- **Header**: Includes the following buttons:
  - `Edit`: A dropdown menu with options to:
    - Edit the product information
    - Edit [custom fields](/documentation/settings/custom-fields)
    - Share the product
    - Copy the product
    - Delete the product
  - `Save`: Will [save](#saving-and-publishing-products) the product, without publishing it.
  - `Publish`: Will [publish](#saving-and-publishing-products) the product.
  - `Fulfill product requests`: Read more about product requests [here](/documentation/getting-started/supplier-quickstart#responding-to-a-customer-request).
- **Product details**: Shows the product information, along with the current product version and the quality of the entered data.
- **Impact**: Shows the environmental impact of the product. Requires data to be entered.
- **Product categorisation with AI**: Will automatically categorise the product once enough data is enetered.
- **Components**, **Materials**, **Packaging** and **Factories**: Shows the entities attached to the product, and allows you to add, edit and delete them.

## Managing components

In the `Components` section, click the `Add component` button.

![Image of the component section](/images/product/component-section.jpg)

This will open a modal window where you can search for all components and products that are available in your library. Here you will see the ones you have created yourself, and the ones that have been created by your suppliers.

![Image of the components modal](/images/product/select-components.jpg)

:::warning Nothing in the list?
If this list is empty, you need to [create a component](/documentation/component/creating-a-component), [add supplier products to your library](/documentation/supplier/accessing-supplier-products), or [request a component from a supplier](/documentation/supplier/creating-a-product-request) first.
:::

:::tip
A common workflow is to request a component from a supplier, and then create a component yourself to use as a placeholder.

When the supplier has responded to your request, you can remove the placeholder component and replace it with the supplier's component.
:::

Select the components you want to add. Then click the `Add component` button in the top right corner of the modal window. This will close the modal and the components you selected will show up in the table of added components.

![Image of the components table](/images/product/added-component.jpg)

The table has the following columns:

:::danger TODO:

    - Need more info on the transport column

:::

| Column name   | Column description                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Name**      | The name of the component. Clicking the name will open the editing page for the component.                          |
| **Supplier**  | The name of the suppler that created the component. Will be blank if the component is created by you.               |
| **Amount**    | The amount of the component used in the product. The unit this amount refers to can be seen in the `Unit` column.   |
| **Unit**      | The unit of the component.                                                                                          |
| **Weight**    | The weight of one unit of the component.                                                                            |
| **Transport** | The transport of the component. Clicking the transport will allow you to edit the transport data for the component. |
| **X**         | A button used to remove the component from the product.                                                             |

:::info Further reading
Read more about components, what they are and how they are created [here](/documentation/component/component-overview).
:::

## Managing materials

In the `Materials` section, click the `Add material` button.

![Image of the material section](/images/product/material-section.jpg)

This will open a modal window where you can search for all materials available in Eando X.

![Image of the materials modal](/images/product/select-material.jpg)

:::warning Missing a material?
If you can't find the material you need, you can click the `Request missing material` button in the top right corner of the modal window. This will allow you to send us a request so that we can add it to the platform.
:::

Select the materials you want to add. Then click the `Add material` button in the top right corner of the modal window. This will close the modal and the materials you selected will show up in the table of added materials.

![Image of the materials table](/images/product/added-materials.jpg)

The table has the following columns:

:::danger TODO:

    - Need more info on the end of life column, and modal
    - Need more info on the transport column

:::

| Column name          | Column description                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**             | The name of the material.                                                                                                                                  |
| **Weight**           | How much of this material that is used in the product. The unit this amount refers to can be seen in the `Unit` column. TODO: is it one unit or the total? |
| **Unit**             | The unit of the material.                                                                                                                                  |
| **Recycled content** | The percentage of the material that is recycled content.                                                                                                   |
| **End of life**      | The end of life of the material. Clicking this will open a modal window where you can enter how the material will be disposed of at the end of its life.   |
| **Transport**        | The transport of the material. Clicking the transport will allow you to edit the transport data for the material.                                          |
| **X**                | A button used to remove the material from the product.                                                                                                     |

## Managing packaging

:::danger TODO:

    - Does adding packaging (instead of using default) improve data quality?

:::

:::warning Default packaging
If you don't add any packaging entities to a product, Eando X will use default packaging data. This will lower the products data quality, and might make your environmental impact score worse.
:::

In the `Packaging` section, click the `Add packaging` button.

![Image of the packaging section](/images/product/packaging-section.jpg)

This will open a modal window where you can search for all packaging that is available in your library.

![Image of the packaging modal window](/images/product/add-packaging-modal.jpg)

:::warning Nothing in the list?
If this list is empty, you need to [create a packaging](/documentation/packaging/creating-a-packaging) first.
:::

Select the packaging you want to add. Then click the `Add packaging` button in the top right corner of the modal window. This will close the modal and the packaging you selected will show up in the table of added packaging.

![Image of the packaging table](/images/product/packaging-added.jpg)

The table has the following columns:

| Column name | Column description                                                                                 |
| ----------- | -------------------------------------------------------------------------------------------------- |
| **Name**    | The name of the packaging. Clicking the name will open the editing page for the packaging.         |
| **Amount**  | The amount of units of packaging. The unit this amount refers to can be seen in the `Unit` column. |
| **Unit**    | The unit of the packaging.                                                                         |
| **Weight**  | The weight of the packaging. TODO: is it one unit or the total?                                    |
| **X**       | Not a column, but a button used to remove the packaging from the product.                          |

:::info Further reading
Read more about packaging, what it is and how it is created [here](/documentation/packaging/packaging-overview).
:::

## Managing factories

:::danger TODO:

    - Does adding packaging (instead of using default) improve data quality?

:::

:::warning Default factories
If you don't add any factory entities to a product, Eando X will use default factory data. This will lower the products data quality, and might make your environmental impact score worse.
:::

In the `Factories` section, click the `Add factory` button.

![Image of the factories section](/images/product/factories-section.jpg)

This will open a modal window where you can search for all factories that are available in your library.

![Image of the factories modal window](/images/product/add-factory-modal.jpg)

:::warning Nothing in the list?
If this list is empty, you need to [create a factory](/documentation/factory/creating-a-factory) first.
:::

Select the factories you want to add. Then click the `Add factory` button in the top right corner of the modal window. This will close the modal and the factories you selected will show up in the table of added factories.

![Image of the factories table](/images/product/added-factories.jpg)

The table has the following columns:

| Column name      | Column description                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| **Name**         | The name of the factory. Clicking the name will open the editing page for the factory.              |
| **Data quality** | The data quality of the factory. Read more about data quality here. TODO: LINK TO DATA QUALITY DOCS |
| **Divisiion**    | How much of the product is produced in this factory, in percentage.                                 |
| **X**            | Not a column, but a button used to remove the factory from the product.                             |

:::info Further reading
Read more about factories, what they are and how they are created [here](/documentation/factory/factory-overview).
:::

## Custom fields

Custom fields are fields that are not part of the LCA itself, but are used to store additional information about the product. These can be used for X, Y and Z.

To see the custom fields for a product, click the `Edit` dropdown in the header of the product page, and select `Edit custom fields`. This will open a modal window where you can add and edit data in the custom fields.

:::warning No custom fields?
If you don't see any custom fields in the modal, you can add them on the `Settings` page.
:::

:::danger TODO:

    - Improve this section
    - What can custom fields be used for?

:::

:::info Further reading
Read more about custom fields, what they are and how they are created [here](/documentation/settings/custom-fields).
:::

## Saving and publishing products

<!--@include: ../__partials/saving-and-publishing.md -->

:::info Component deviation
Products and components are very similar in their creation process. Therefore this guide is used for both entities.

Components are however only internal, and can therefore not be published.
:::
