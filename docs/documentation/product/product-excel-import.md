# Import products from Excel

If you have a lot of data that already exists in spreadsheets, you can import it into EandoX with the import feature.

:::tip Workflow tip
The easiest way to get a template sheet for your data is by generating an empty export spreadsheet in EandoX. You can then edit the file in your spreadsheet editor of choice, and import it back into EandoX when it's filled out.

Read more about exporting data [here](/documentation/product/product-excel-export).
:::

## Importing products

Navigate to the `Products` page in the left navigation menu and click the `Import` button in the top right corner.

![Image of the import products button](/images/product/import-button.jpg)

This will open a sidepanel where you can select the Excel file you want to import.

![Import products sidepanel](/images/product/import-modal.jpg)

It has the following options:

| Field name                            | Field description                                                                              |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Force autoshare setting**           | Decides wether the imported products should be shared with other companies in EandoX.      |
| **Auto publish updates after import** | Decides wether the imported products should be published to the EandoX after import. |
| **Pick file**                         | Selects the Excel file you want to import.                                                     |

:::info Autoshare vs Publish
Products that have the _autoshare_ setting enabled will not be visible when other companies search for products in EandoX, but can be shared with them upon request.

Published products will be visible to all companies in EandoX when they search for products.
:::

When the file is uploaded, click the `Validate` button in the top right corner of the sidepanel to check if the data is valid. This will bring up the validation view.

The first thing you will see is the **Rows to import** tab. It will show you the data that will be imported.

![Validation view](/images/product/rows-to-import-tab.jpg)

If there are any errors, they will show up in the **Errors** tab. Here you can see what the error is and where it occurred so that you have a chance to fix it.

![Validation view](/images/product/error-tab.jpg)

:::danger Check the data
Rows with errors won’t be imported. Check the errors tab, fix any issues in your spreadsheet, and try importing again.
:::

When you are ready to import the data, click the `Import` button in the top right corner. The data will start to import, and the LCA results will be calculated.

![Validation view](/images/product/importing.jpg)

When the import is complete, you will see a success message. Click the `X` button in the top left corner to close the sidepanel.

![Validation view](/images/product/import-finished.jpg)
