# Creating a packaging

This guide will walk you through the process of creating a new packaging.

## Creating a new packaging

Navigate to the `Packaging` page in the left navigation menu, and click the `Create packaging` button in the top right corner.

![Image of the packaging page with the create packaging button](/images/packaging/create-button.jpg)

This will open a modal window where you can fill out the necessary information for your packaging. This information can be changed later on, but it is recommended to fill it out correctly the first time.

![Image of the packaging creation modal window](/images/packaging/create-modal.jpg)

The fields in the modal window are as follows:

| Field name                          | Field description                      |
| ----------------------------------- | -------------------------------------- |
| **Packaging name**                  | The name of the packaging.             |
| **Functional unit**                 | The unit in which the product is sold. |
| **Typical product weight per unit** | TODO: Unclear!                         |

Click `Confirm` to create the packaging. This will take you to the packaging page where you can view and edit the the details and data of your packaging.

## Editing a packaging

To edit a packaging, navigate to the `Packaging` page in the left navigation menu, and click the packaging you want to edit. From there you can follow all the steps below.

![Image of the packaging page](/images/packaging/edit-packaging.jpg)

## The packaging page

On the packaging page, you will see multiple sections:

- **Header**: Includes the following buttons:
  - `Edit`: A dropdown menu with options to:
    - Edit the packaging information
    - Copy the packaging
    - Delete the packaging
  - `Save`: Will [save](#saving-a-packaging) the packaging
  - `Fulfill product requests`: Read more about product requests [here](/documentation/getting-started/supplier-quickstart#responding-to-a-customer-request).
- **Product details**: Shows the product information, along with the quality of the entered data.
- **Materials**: Shows the materials used in the packaging.

## Managing materials

In the `Materials` section, click the `Add material` button.

![Image of the material section](/images/product/material-section.jpg)

This will open a modal window where you can search for all materials available in Eando X.

![Image of the materials modal](/images/product/select-material.jpg)

:::warning Missing a material?
If you can't find the material you need, you can click the `Request missing material` button in the top right corner of the modal window. This will allow you to send us a request so that we can add it to the platform.
:::

Select the materials you want to add. Then click the `Add material` button in the top right corner of the modal window. This will close the modal and the materials you selected will show up in the table of added materials.

![Image of the materials table](/images/packaging/added-materials.jpg)

The table has the following columns:

| Column name | Colun description                                                         |
| ----------- | ------------------------------------------------------------------------- |
| **Name**    | The name of the material.                                                 |
| **Weight**  | How much of the material is used in the packaging, in the specified unit. |
| **Unit**    | The unit of the weight.                                                   |
| **X**       | A button used to remove the material from the packaging.                  |

## Saving a packaging

<!--@include: ../__partials/saving.md -->
