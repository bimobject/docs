# Import products from Excel

Importing products from Excel is good when you have a lot of data to import, and already have it in other spreadsheets. This is especially useful for companies that already have their product data in Excel, and have a lot of knowledge in manipulating spreadsheets.

:::info Workflow tip
A common workflow is to first create an Excel export file, populate it with your data and then import it back into Eando X.

Read more about exporting data [here](/documentation/product/product-excel-export).
:::

## Importing products

Navigate to the `Products` page in the left navigation menu and click the `Import` button in the top right corner.

![Image of the import products button](/images/placeholder.png)

This will open a modal window where you can select the Excel file you want to import.

![Import products modal window](/images/placeholder.png)

It has the following options:

| Field name                            | Field description                                                                              |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Force autoshare setting**           | Decides wether the imported products should be shareable with other companies in Eando X.      |
| **Auto publish updates after import** | Decides wether the imported products should be published to the Eando X platform after import. |
| **Pick file**                         | Selects the Excel file you want to import.                                                     |

:::info Autoshare vs Publish
Products that have the _autoshare_ setting enabled will not be visible when other companies search for products in Eando X, but can be shared with them upon request.

Published products will be visible to all companies in Eando X when they search for products.
:::

When the file is uploaded, click the `Validate` button to check if the data is valid. This will bring up the validation view.

![Validation view](/images/placeholder.png)

When the validation is completed it will show you what data will be imported in the **Rows to import** tab.

![Validation view](/images/placeholder.png)

If there are any errors, they will show up in the **Errors** tab. Here you can see what the error is and where it occurred so that you have a chance to fix it.

![Validation view](/images/placeholder.png)

When you are ready to import the data, click the `Import` button in the top right corner. Any rows with errors will not be imported.

This will import the data, and start the impact calculation process for the products.

![Validation view](/images/placeholder.png)

<!--

- importing products
- exporting products to get data
- importing edited data again

- products page, imprting/exporting both products and components

- export exports subcomponents as well
  -extra components extra metarials gives more empty columns

- Instructions, components, products is what is shown in excel

- guide on the excel file??
- transport, km truck - boat - train, the UI has more options
- ART nr is the key!

- most common errors??
- import will ignore all errors

- after import the environmental impact will be calculated

- only 66 products where changed

-->
