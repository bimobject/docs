# Creating a factory

This guide will walk you through the process of creating a factory in Eando X.

## Creating a new factory

Navigate to the `Factories` page in the left navigation menu, and click the `Create factory` button in the top right corner.

![Image of the factories page with the create factory button](/images/factory/create-button.jpg)

This will open a modal window where you can fill out the necessary information for your factory. This information can be changed later on, but it is recommended to fill it out correctly the first time.

![Image of the factory creation modal window](/images/factory/creation-modal.jpg)

The fields in the modal window are as follows:

| Field name           | Field description                                                                    |
| -------------------- | ------------------------------------------------------------------------------------ |
| **Name**             | The name of the factory.                                                             |
| **Factory location** | The location of the factory. You can use the search input to search for the address. |

Click `Confirm` to create the factory. This will take you to the factory page where you can view and edit the details and data of your factory.

## Editing a factory

To edit a factory, navigate to the `Factories` page in the left navigation menu, and click the factory you want to edit. From there you can follow all the steps below.

![Image of the factories page](/images/factory/edit-factory.jpg)

## The factory page

On the factory page, you will see multiple sections:

- **Header**: Includes the following buttons:
  - `Edit`: A dropdown menu with options to:
    - Edit the factory information
    - Delete the factory
  - `Save`: Will [save](#saving-and-publishing-factories) the factory, without publishing it.
  - `Publish`: Will [publish](#saving-and-publishing-factories) the factory.
  - `Fulfill product requests`: Read more about product requests [here](/documentation/getting-started/supplier-quickstart#responding-to-a-customer-request).
- **Report**: Shows how much emissions the factory has produced in the time range delected in the **Data** section further down the page.
- **Data quality**: Shows the data quality of the data you have entered.
- **About**: Includes the following information:
  - `Certification`: Wether the factory has any ISO certifications or not.
  - `Data collection`: How the data for the factory is collected.
- **Data**: Shows the data for the factory.
- **Location**: Shows the location of the factory.

## The data section

This section is the most important part of the factory page. It is split into three sub-sections:

### Time range

The time range is the period of time for which the factory has been producing your product. TODO: is this correct?

The fields in the time range section are as follows:

| Field name                           | Field description                                                                                                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **From**                             | The start date of the time range.                                                                                                                                      |
| **To**                               | The end date of the time range.                                                                                                                                        |
| **Use default data for this period** | If this is checked, Eando X will use generic data for the factory. It is however recommended that you enter custom data on your factories to get accurate LCA reports. |

### Production

This field is used to enter the net sel production during the time range selected in the previous section. This is measured in tons.

### Inputs

This sub-section defines how much material is used as inputs for the production of your product.

Clicking the `+`-on the right side of the box will open a dropdown where you can select an input category, and then add a new input.

![Image of the inputs section](/images/factory/inputs.jpg)

The fields in the `Mandatory inputs` section are as follows:

| Field name         | Field description                                        |
| ------------------ | -------------------------------------------------------- |
| **Input category** | The category of the production input.                    |
| **Type**           | The type of input used.                                  |
| **Amount**         | The amount of the input, measured in the specified unit. |
| **X**              | A button that removes the item.                          |

### Outputs

This sub-section defines how much waste material is produced during production. It is split into two categories:

- **Waste**: This category defines the non-recycled waste created during production.
- **Waste to Recycling**: This category defines the waste that is sent to a recycling facility.

Clicking the `+`-on the right side of the box will open a dropdown where you can select an output category, and then add a new output.

![Image of the outputs section](/images/factory/outputs.jpg)

The fields in the `Waste` section are as follows:

| Field name          | Field description                                                |
| ------------------- | ---------------------------------------------------------------- |
| **Output category** | The category of the waste created.                               |
| **Type**            | The type of waste created.                                       |
| **Amount**          | The amount of the waste created, measured in the specified unit. |
| **X**               | A button that removes the item.                                  |

The fields in the `Waste to Recycling` section are a little different. Here you first need to fill out the details for the item, and then click the `Add recycling item`-button. The fields for a recycling item are as follows:

| Field name      | Field description                                              |
| --------------- | -------------------------------------------------------------- |
| **Description** | A description of the waste being recycled.                     |
| **Amount**      | The amount of the waste being recycled, measured in kilograms. |
| **Value**       | The value of the waste being recycled, measured in euros.      |

After you have clicked the `Add recycling item`-button, the item will be added to the list.

You can change its data at any time, and remove the item by clicking the `X`-button to the right of the item.

## Saving and publishing factories

<!--@include: ../__partials/saving-and-publishing.md -->
