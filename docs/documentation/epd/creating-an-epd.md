# Creating an EPD

This guide will walk you through the process of creating an EPD in Eando X.

## Creating a new EPD

Navigate to the `EPD` page in the left navigation menu, and click the `Create new EPD` button in the top right corner.

![Image of the EPD page with the create EPD button](/images/epd/create-button.jpg)

This will open a modal window where you can fill out the necessary information for your EPD. This information can be changed later on, but it is recommended to fill it out correctly the first time.

![Image of the EPD creation modal window](/images/epd/create-modal.jpg)

The fields in the modal window are as follows:

| Field name      | Field description         |
| --------------- | ------------------------- |
| **Epd name**    | The name of the EPD.      |
| **Description** | A description of the EPD. |

Click `Create` to create the EPD. This will take you to the EPD page where you can see and edit the details of your EPD, and start adding products and transports to it.

## Editing an EPD

If you want to edit an existing EPD, you can navigate to the `EPD` page in the left navigation menu and click the EPD you want to edit. From there you can follow all the steps below.

![Image of the EPD overview page](/images/epd/edit-epd.jpg)

## The EPD page

On the EPD page, you will see multiple sections:

- **Header**: Includes the following buttons:
  - `Actions`: A dropdown menu with options to:
    - Edit the EPD information
    - Delete the EPD
  - `Edit PDF`: A button to open a preview of the generated PDF and edit all relevant data for each page.
  - `Save`: Will [save](#saving-and-publishing-epds) the EPD, without publishing it.
  - `Publish`: Will [publish](#saving-and-publishing-epds) the EPD.
- **EPD details**: Shows the EPD information, along with the current published EPD version and the last published date.
- **Published versions**: A list of all published versions of the EPD, together with the date they were published and a download link.
- **Product Selection**: Shows the products that are included in the EPD, along with settings on how to handle them in the report. This is also where you chose the PCR standard to follow.
- **Impact handling**: Shows settings and data regarding and how the environmental impact is reported, and what data to include.

## Product Selection section

The **Product Selection** section is where you can add products to the EPD.

![Image of the product selection section](/images/epd/product-selection.jpg)

It is split into three areas:

### Program operator

All EPD's are published by a program operator. Every program operator has special rules and regulations that are applied to their reports.

PCR (Product Category Rules) specifies what rules the EPD should follow. The rules follow an international standard, and are based on the category of products in the EPD.

The program operator area includes the following settings:

| Field name           | Field description                                                  |
| -------------------- | ------------------------------------------------------------------ |
| **Program operator** | The program operator. At the moment, only Environdec is supported. |
| **Select PCR**       | The category and standard of the product in the EPD.               |

These settings affect the rest of the EPD generation settings.

### EPD settings

This area sets global settings for how products are handled in the EPD.

The area includes the following fields:

| Field name                         | Field description                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| **Calculate average**              | If the report should include a calculation of the average of the selected products. |
| **Set functional unit to KG**      | If the report should specify the unit in which the product is sold in kilograms.    |
| **Show artnr for products in EPD** | If the report should include the artnr of the products.                             |
| **Deviation in EPD**               | If the report should include the deviation of the products.                         |

### Selected products

This is the area where you can add products to the EPD.

You can add the products that should be included in the report by clicking the `Pick products` button in the top right corner of the area.

This will open a modal window where you can select the products you want to include in the EPD.

Select the ones you want to include in the EPD, and click `Select`. This will close the modal window and add the selected products to the **Selected products** list.

The list includes the following fields:

| Field name              | Field description                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------- |
| **Set default product** | Makes the product the default product for the EPD. TODO: What does this mean?           |
| **Name**                | The name of the product. Clicking it will take you to the product page for the product. |
| **Weight**              | The weight of the product in the specified unit.                                        |
| **Unit**                | The unit of the weight.                                                                 |
| **X**                   | A button that removes the product from the EPD.                                         |

## Impact handling section

This section includes settings and data regarding how the environmental impact is handled. All of these sections directly correspond to numbered sections in the EPD report.

![Image of the impact handling section](/images/epd/impact-handling.jpg)

It is split into five areas:

### A4 - Transportation

This area contains all data regarding the transportation of the products in the EPD.

You can add the products that should be included in the report by clicking the `Add transport` button in the top right corner of the area.

To edit a transport, click the pen icon in the top right corner of the transport.

To remove a transport, click the trash can icon in the top right corner of the transport.

### A5 - Installation

This area contains settings on how to handle and present the environmental impact of the products installation.

### B1-B7 - Use stage

This area contains settings on how to handle and present the environmental impact of the products when they are in use.

### Set included stages

This area allows you to modify what data to include in the EPD. It is based on the PCR set in the **Program operator** area.

Based on what PCR you have selected, this section will look a little different. Some of the fields will be required, some will be excluded, and some will be optional. They may also contain different information, or be grouped differently.

:::info We have your back
The fields that can't be changed are designed to follow the requirements of the selected PCR standard. This ensures that the reports generated always have all necessary data, no matter what optional information you chose to include.
:::

### Set country

This area allows you to set the country or region that apply to the fields in the **Set included stages** area.

## Saving and publishing EPDs

<!--@include: ../__partials/saving-and-publishing.md -->
