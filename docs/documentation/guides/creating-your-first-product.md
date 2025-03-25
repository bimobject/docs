# Creating your first product

This guide will walk you through the steps of creating your first product in EandoX. By the end of the tutorial, you'll have a product with an LCA (Life Cycle Assessment) ready for generating an EPD (Environmental Product Declaration).

:::tip This is a quickstart
This guide will only be covering the basics of creating a product. To get the most out of EandoX, it is recommended to start with the [workflow overview](/documentation/getting-started/workflow-overview).
:::

We will be going over the following steps:

- Creating a product
- Adding components from a supplier
- Adding materials for your in-house manufactured parts

## The product you will create

In this example you are working for a company called **Acme Inc**. The product you manufacture is a _Ball Valve_. Here is a quick overview of the product:

![Image of the ball valve product](/images/guides/creating-your-first-product/ball-valve-product.jpg)

The product is made up of six individual parts:

1. The **lever**
2. The **seat**
3. The **cover**
4. The **stem**
5. The **ball**
6. The **body**

Most of these parts are manufactured and ordered from a supplier. The **lever** is a custom part that is manufactured by Acme Inc themselves. All of these parts are assembled into the final product at a factory called _Acme Inc Assembly Facility_.

Let us begin.

## Adding supplier components to your library

Five of the parts are made by a supplier called _Aaberg Manufacture Co_. Luckily for us, they are already part of EandoX, and have these components available for you to use in your own products.

To see all the components they have made available for EandoX users, you first need to add the supplier to your library.

Navigate to the `Supplier` page and click the `Add supplier` button.

![Image of the add supplier button](/images/supplier/add-supplier-button.jpg)

This will open a sidepanel where you can search for a supplier by name or organization number. In this case we are searching for _Aaberg Manufacture Co_.

Tick the box next to the name, and click the `Add selected supplier` button in the top right corner.

![Image of the supplier search sidepanel](/images/guides/creating-your-first-product/selected-supplier.jpg)

You will now see that the supplier has been added to the list of suppliers in your library.

![Image of the supplier search sidepanel](/images/guides/creating-your-first-product/supplier-in-list.jpg)

:::tip No connected supplier?
If the supplier you are looking for is not part of EandoX, you can invite them to join the platform by clicking the `Invite new supplier` button in the top right corner. This will open a sidepanel where you can enter the details of the supplier you want to invite, along with a message to send them.
:::

Now, we need to add the suppliers components to your library.

Click the suppliers name in the list. This will take you to the suppliers page.

In the **Supplier products** section, click the `Available from supplier` tab to see all the products that are available to import.

![Image of the supplier page](/images/guides/creating-your-first-product/available-from-supplier-button.jpg)

Select the components you need, and click the `Import Selected To My Library` button to add them to your library.

![Image of the button](/images/guides/creating-your-first-product/import-selected.jpg)

These components will now be available to you when you create new products.

:::tip Can't find the components you need?
If a connected supplier hasn't created a component you order from them yet, you can send them a product request.

Read more about how to request a component [here](/documentation/supplier/creating-a-product-request).
:::

## Creating a product

Now that we have the supplier components available, we can create your first product.

Navigate to the `Products` page in the left navigation menu, and click the `Create product` button in the top right corner.

![Image of the products page with the create product button](/images/guides/creating-your-first-product/create-product-button.jpg)

This will open a sidepanel where you can fill out the necessary information about your product. This information can be changed later on, but it is recommended to fill it out correctly the first time.

![Image of the product creation sidepanel](/images/guides/creating-your-first-product/create-product-sidepanel.jpg)

:::warning Make sure to pick the right functional unit
The functional unit is the unit in which the product is sold. For our **Ball Valve** this would be `Piece - pc`, since the product will be sold as a single unit.

If the product would instead be something like a **Zipper** or **Wood Pellets**, a unit of `Meter - m` or `Kilogram - kg` would be more appropriate.
:::

Click the `Accept` button to create the product. This will take you to a product page where you can see and edit the details of your product, and start attaching other entities to it.

![Image of an empty product page](/images/guides/creating-your-first-product/empty-product.jpg)

:::tip Entities
Entities are referring to the different data types that you can create or manage in EandoX. The entities are `Product`, `Component`, `Material`, `Packaging`, `Factory`, `Transport` and `Supplier`.

To get an overview of all the entities and how they relate to each other, you can read the [Workflow overview](/documentation/getting-started/workflow-overview).
:::

## Adding supplier components

Now that the product is created, we can start adding the supplier components to it.

Find the `Components` section, and click the `Add component` button.

![Image of the component section](/images/product/component-section.jpg)

This will open a sidepanel where you can search for all components and products that are available in your library, sorted by supplier.

Find the components you want to add, select them, and click the `Add component` button in the top right corner.

![image of the components modal](/images/guides/creating-your-first-product/select-components.jpg)

You will now see that the components have been added to the list of components in your product.

![Image of the components table](/images/guides/creating-your-first-product/added-components.jpg)

:::tip Further reading
Read more about components [here](/documentation/component/component-overview).
:::

## Adding materials for the in-house manufactured part

Now that we have added all the supplier components, we need to add data for the **lever** that is manufactured by your own company. We do this by adding the materials it consists of in the `Materials` section.

Find the `Materials` section, and click the `Add materials` button.

![Image of the material section](/images/product/material-section.jpg)

This will open a sidepanel where you can search for all materials available in EandoX.

![Image of the materials sidepanel](/images/guides/creating-your-first-product/add-materials.jpg)

:::warning Missing a material?
If you can't find the material you need, you can click the `Request missing material` button in the top right corner of the sidepanel. This will allow you to send us a request so that we can add it to the platform.
:::

Select the materials you want to add. Then click the `Add material` button in the top right corner of the sidepanel.

You will now see that the materials have been added to the list of materials in your product.

![Image of the materials table](/images/guides/creating-your-first-product/added-materials.jpg)

Now you need to fill out how much material is used in the product.

Click the `Weight` field for each material and fill out the value. The unit is defined in the `Unit` column.

![Image of the materials table with correct weight](/images/guides/creating-your-first-product/edited-materials.jpg)

:::tip More data = better results
You can add data on more properties than just the weight, such as information on material waste, product end-of-life and transportation.

To see those properties, click the `Edit` button at the end of the material row.

Generic data will be used for all unfilled fields. This is fine for a first iteration of a product. However, this will lower the products data quality, meaning that the final calculations will be less accurate. It might result in a poorer impact score as well.

It is recommended to come back to the product at a later point and add more data.

Read more about the material properties [here](/documentation/product/creating-a-product#the-material-sidepanel).
:::

## All done!

Congratulations! With the components and materials added to the product, you now have the baseline of the data required by EandoX.

You can now start inspecting the impact graphs (at the top of the product page) and start generating EPDs.

The supplier components you added will make it easy to keep the data current, since your products will update automatically when the supplier updates their components.

:::tip Want to improve your product?
You might have noticed that we left the sections for `packaging` and `factories` blank. This works as a start (since EandoX will automatically add generic data to these fields), but it is recommended to fill it out at some point.

Read our guide on [improving your first product](/documentation/guides/improving-your-first-product) to learn about adding packaging, factories, and creating reusable components.
:::
