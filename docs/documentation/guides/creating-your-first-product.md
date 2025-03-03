# Creating your first product

This guide will walk you through the steps of creating your first product in EandoX. By the end of the tutorial, you'll have a product with an LCA (Life Cycle Assessment) ready for generating an EPD (Environmental Product Declaration).

:::tip This is a quickstart
This guide will only be covering the basics of creating a product. To get the most out of EandoX, it is recommended to start with the [workflow overview](/documentation/getting-started/workflow-overview).
:::

We will be going over the following steps:

- Creating a product
- Adding components from a supplier
- Adding materials for your in-house manufactured parts
- Creating a reusable packaging entity
- Adding the created packaging to the product
- Creating a reusable factory entity
- Adding the created factory to the product
- Creating a reusable component from the added materials


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

## Additional entities

With the components and materials added to the product, we now have the baseline of the data required by EandoX.

We can however add `Packaging` and `Factories` to the product. If you don't add any, EandoX will be using generic data for them.

While not required, it is recommended to add these entities even if you don't have all the data for them yet. Any additional data is good data.

Creating entities will also make it easier to update multiple products in the future: you will only need to update the entity once, and the changes will be reflected in all the products that use it.

Let's create the `Packaging` and `Factories` for the **Ball Valve**.

## Creating a packaging

The **Ball Valve** is sold in boxes, so our next step is to create these boxes in EandoX. This process is nearly identical to creating a product with materials, but is done on the `Packaging` page.

Navigate to the `Packaging` page in the left navigation menu, and click the `Create packaging` button in the top right corner.

:::danger Don't forget to save!
Make sure to save your product before navigating to the packaging page so that you don't lose your work.
:::

![Image of the packaging page with the create packaging button](/images/guides/creating-your-first-product/create-packaging-button.jpg)

This will open a sidepanel where you can fill out the necessary information about your packaging. This information can be changed later on, but it is recommended to fill it out correctly the first time.

![Image of the packaging creation sidepanel](/images/guides/creating-your-first-product/create-packaging-sidepanel.jpg)

The fields in the sidepanel are as follows:

| Field name                          | Field description                        |
| ----------------------------------- | ---------------------------------------- |
| **Packaging name**                  | The name of the packaging.               |
| **Functional unit**                 | The unit in which the packaging is used.   |
| **Typical product weight per unit** | The weight of one unit of the packaging, in KG. |

Click `Confirm` to create the packaging.

This will take you to the packaging page where you can add the packaging materials.

![Image of the packaging page](/images/guides/creating-your-first-product/create-packaging-page.jpg)

You can now save the packaging. This will make it available for you to use in your products.

## Adding the packaging

Now that the packaging is created, we can add it to the product.

Navigate to the `Products` page in the left navigation menu, and click the product you want to add the packaging to. In this case we're going back to the **Ball Valve**.

Scroll down to the `Packaging` section, and click the `Add packaging` button.

![Image of the packaging section](/images/product/packaging-section.jpg)

This will open a sidepanel where you can search for all packaging that is available in your library.

![Image of the packaging sidepanel](/images/guides/creating-your-first-product/add-packaging-sidepanel.jpg)

Find the `Small Cardboard Box` you just created, and click the `Add packaging` button in the top right corner.

This will close the sidepanel and the packaging you selected will show up in the table of added packaging.

![Image of the added packaging](/images/guides/creating-your-first-product/packaging-added.jpg)

Since one unit of the **Ball Valve** is packaged in one box, we can leave the `Amount` field as it is.

:::tip More on packaging
In this example we only added one box, but you can add as much packaging as you need.

Some products might be sold in one main box, containing all its parts in individual smaller bags and boxes.

Other products might be shipped on pallets, where one piece of the product only takes up 1% of a full pallet.
:::

## Creating a factory

The last step in creating a product is to add a factory. This is the location where the product is manufactured and/or put together.

In our example with the **Ball Valve**, we have two factories: one that manufactures the custom **lever**, and one that assembles and packages the **lever** and the rest of the components.

Navigate to the `Factories` page in the left navigation menu, and click the `Create factory` button in the top right corner.

![Image of the factories page with the create factory button](/images/guides/creating-your-first-product/create-factory-button.jpg)

This will open a sidepanel where you can fill out the necessary information about your factory. This information can be changed later on, but it is recommended to fill it out correctly the first time.

![Image of the factory creation sidepanel](/images/guides/creating-your-first-product/create-factory-sidepanel.jpg)

The fields in the sidepanel are as follows:

| Field name           | Field description                                                                    |
| -------------------- | ------------------------------------------------------------------------------------ |
| **Name**             | The name of the factory.                                                             |
| **Factory location** | The location of the factory. You can use the search input to search for the address. |

Click `Create` to create the factory.

In this example we don't have any data on the factory, so we will leave it like this for now. In the future, we can contact the factory, ask for their data, and update it in the factory entity. For now, just knowing the location of the factory helps us a lot when it comes to the default transportation data.

Click `Save` and repeat the process for the other factory.

![Image of the factory creation sidepanel](/images/guides/creating-your-first-product/save-factory.jpg)

## Adding the factories to the product

We can now add the factories to the product.

Navigate to the `Products` page in the left navigation menu, and click the product you want to add the factories to. In this case we're going back to the **Ball Valve**.

Scroll down to the `Factories` section, and click the `Add factory` button.

![Image of the factories section](/images/product/factories-section.jpg)

This will open a sidepanel where you can search for all factories that are available in your library.

Select the factories you want to add. Then click the `Add factory` button in the top right corner of the sidepanel.

![Image of the factories sidepanel](/images/guides/creating-your-first-product/select-factories.jpg)

This will close the sidepanel and the factories you selected will show up in the table of added factories.

![Image of the factories table](/images/guides/creating-your-first-product/added-factories.jpg)

We now need to fill out the division between the two factories. This how much of the production process is done in what factory.

In our case the **Acme Lever Factory GmbH** does 70% of the job, and the **Acme Inc Assembly Facility** does the rest.

![Image of the factories table with the division filled out](/images/guides/creating-your-first-product/factory-division.jpg)

## All done!

Congratulations! You have now created your first product in EandoX.

You can now start inspecting the impact graphs (at the top of the product page) and start generating EPDs.

The supplier components you added will make it easy to keep the data current, since your products will update automatically when the supplier updates their components. It will also be simpler for you to keep the products packaging and factories up to date.

## Bonus: creating a component from your products materials

You can leave the product creation process at this, but since we just talked about keeping the data up to date, we can also create a component from the materials that are used in the product.

In the **Ball Valve** example, this could be useful if we have other products that use the same custom **lever**. Making it into a component will allow you to reuse the same **lever** data in other products (similar to how it works  with supplier components).

:::tip Thinking ahead
If you know that you will be reusing a component before creating a product, you can create it first, and then add it to the product later on.
:::

Navigate to the `Products` page in the left navigation menu, and click the product that holds the materials you want to extract to a component. In this case we're going back to the **Ball Valve**.

Scroll down to the `Materials` section, and select the materials relevant to the component you want to create. In this case we're going to select all of them, since all the material we added is used in the **lever**.

![Image of the materials section](/images/guides/creating-your-first-product/select-materials-for-component.jpg)

Then, click the `Create component` button in the top right corner.

This will open up a sidepanel where you can fill out the necessary information about your component. All the fields are the same as when creating a product.

:::tip Tweaking the weights
This sidepanel also has fields for changing the material weights. This is useful if you know that only part of the material is used in the component, and the rest is used for something else in the product.
:::

![Image of the component creation sidepanel](/images/guides/creating-your-first-product/extract-component-sidepanel.jpg)


Click `Confirm` to create the component. This will close the side panel, add it to the component section, and remove the materials since they are now part of the component.


![Image of the added extracted component](/images/guides/creating-your-first-product/extracted-component-added.jpg)

The **ACME Inc Valve Lever** will also be available for inspection and editing on the `Components` page (in the left navigation menu).

:::warning Don't forget the factory!
The materials for the `ACME Inc Valve Lever` were added to the component, but the `Acme Lever Factory GmbH` (that manufactures the lever) was not.

To fix this, remove the factory from the `Ball Valve` product, set the `Acme Inc Assembly Facility` division to 100%, and then update the `ACME Inc Valve Lever` component to include the `Acme Lever Factory GmbH`.

:::

:::tip Learn more
This guide has only scratched the surface of what you can do with products.

Read more about products [here](/documentation/product/product-overview).
:::





