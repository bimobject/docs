# Export products to Excel

Exporting products to Excel is good when you have a lot of data to import or update. It does not allow for the more advanced data entry that can be achieved in the Eando X app, but can in many cases be more efficient if you only need the basics, and are proficient in manipulating spreadsheets.

:::info Workflow tip
A common workflow is to first generate an export spreadsheet in Eando X, populate it with your data (in your spreadsheet editor of choice), and then import it back into Eando X.

Read more about importing data [here](/documentation/product/product-excel-import).
:::

## Exporting data

Navigate to the `Products` page in the left navigation menu and click the `Export` button in the top right corner.

![Image of the export products button](/images/product/export-button.jpg)

This will open a sidepanel where you can select the entities you want to export.

![Export products sidepanel](/images/product/export-modal.jpg)

It has the following options:

| Field name                   | Field description                                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Add extra components**     | By default the export will only include fields for the attached components. Adding extra components will include empty fields where you can attach other component and product entities. |
| **Add extra materials**      | By default the export will only include fields for the attached materials. Adding extra materials will include empty fields where you can attach other material entities.                |
| **Include transport**        | Wether or not to include the transport information in the export.                                                                                                                        |
| **Include recycled content** | Wether or not to include the recycled content information in the export.                                                                                                                 |
| **Include CAS/EC**           | Wether or not to include the CAS/EC information in the export.|
| **Include custom fields**    | Wether or not to include the custom fields in the export.                                                                                                                                |

Select the entities you want to export and click the `Export` button. This will start generating an export file. When the file is ready, the button label will change to `Download xlsx`. Click it to download the file.

When the file is downloaded, you can open it in Excel and start editing the data.

:::info Dependencies
Selecting an entity that has another entity linked to it will export the linked entity as well.

An example of this is exporting a **Pillowcase** that includes the material **Cotton**. This will export the **Pillowcase** product entity, and prevent the **Cotton** material entity from being deselected in the list.
:::

## Excel file format

:::danger macOS Numbers app
Due to limitations in the macOS Numbers app, it is recommended to edit the file with either Excel or Google Sheets.
:::

The exported Excel file will contain three sheets:

- **Instructions**
- **Products**
- **Components**

### Products/components sheet

The **Products** and **Components** sheets include the same columns and data. The only difference is their entity type.

They have the following columns:

| Column name         | Column description                                                                                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Id**              | An internal id used by Eando X. This should never be modified.                                                                                                                                                                                                                             |
| **Name**            | The name of the product.                                                                                                                                                                                                                                                                   |
| **Art nr**          | Your internal article number for the product.                                                                                                                                                                                                                                              |
| **Unit**            | The unit the product is measured in. Includes all units that are supported by Eando X.                                                                                                                                                                                                     |
| **Folder**          | The folder that the product is organized in in Eando X.                                                                                                                                                                                                                                    |
| **Factory [A-Z]**   | The factory that the product is made in. Populated by the factories that you have added to Eando X.                                                                                                                                                                                        |
| **Share**           | How many percent of the product is manufactured in the factory [A-Z].                                                                                                                                                                                                                      |
| **Pack Comp [A-Z]** | The packaging used for component [A-Z].                                                                                                                                                                                                                                                    |
| **Amount**          | How many units of the packaging [A-Z] are used for the product.                                                                                                                                                                                                                            |
| **Component [A-Z]** | The component that is used in the product.                                                                                                                                                                                                                                                 |
| **Amount**          | How many units of the component [A-Z] are used in the product.                                                                                                                                                                                                                             |
| **Transport**       | The transport that is used for the component [A-Z]. The transport is defined as a comma separated string of three numbers, representing truck, boat and train in kilometers. The value `100,200,300` means that the transport has been defined as 100km truck, 200km boat and 300km train. |
| **Material [A-Z]**  | The material that is used in the product. Populated with all materials that are available in Eando X                                                                                                                                                                                       |
| **Weight**          | The weight of the material [A-Z] in KG.                                                                                                                                                                                                                                                    |
| **Transport**       | The transport that is used for the material [A-Z]. The transport is defined as a comma separated string of three numbers, representing truck, boat and train in kilometers. The value `100,200,300` means that the transport has been defined as 100km truck, 200km boat and 300km train.  |
