# Supplier quickstart

Welcome to Eando X!

You are probably here because you have been invited by one of your customers to help them optimize their supply chain operations. We are thrilled to have you on board and look forward to working with you to make a positive impact on the environment.

:::tip We are thankful for your participation
Being an Eando X supplier is free, as your participation as a great benefit to our users.

We are happy for your contribution and look forward to working with you. Please contact us at [supplier@eando.se](mailto:supplier@eando.se) if you have any questions not covered in this quickstart.
:::

## What is Eando X?

Eando X is a platform designed to simplify the LCA (Life Cycle Assessment) process for manufacturers and suppliers.

The platform allows you to enter your products, and attach all the relevant data about their materials, packaging, transport and factories. This data is used to generate LCAs that can be shared with your customers. Your LCAs allows them to make precise LCAs for their own products without you having to share any of your internal manufacturing data.

:::info Data security
All your product data is stored in a single-tenant database, for your company's eyes only. This ensures that your internal data is secure, and not shared with others, from the core up - by design.
:::

An added benefit is reusability and composability: whenever you change the manufacturing data of one of your products, the LCAs will be updated automatically. These changes will take place wherever the product has been used, both in your library and in the products of your customers.

By analyzing the data of the products and processes, we can identify areas for improvement and implement sustainable practices.

## Quick links

Here are some helpful links if you already have an account, and want to get started quickly:

- [Creating your first product](/documentation/guides/creating-your-first-product)
- [Sharing a product](/documentation/product/sharing-a-product)
- [Creating a product request](/documentation/supplier/creating-a-product-request)

:::warning This is just the beginning
These articles might not cover all of the features in Eando X, but they should provide a good starting point for you as a new supplier.

Suppliers have access to the same features as all other users. This means that all of the other docs are relevant to you as well. Feel free to browse them at your own leisure.
:::

## Creating an account

The only way to create a supplier account is to be invited by one of your customers. You will receive an email from your customer containing a link to create your account. Clicking on the link will redirect you to the account creation page. It will take you to a signup form where you can fill out the necessary information and complete the account creation process.

:::tip No customers yet?
If you dont have any customers using Eando X yet, but still want to be a supplier in Eando X, you can reach out to us at [supplier@eando.se](mailto:supplier@eando.se), and we will assess your case and help you get started.
:::

## Responding to a customer request

Whenever there is a new request from a customer, you will receive an email notification about it.

You can then log in to your account and respond to the request.

In the top right corner of your dashboard you will see a button labeled `Fulfill product requests`, followed by a number.

![The "Fulfill product requests" button](/images/supplier-quickstart/fulfill-requests-button.jpg)

Clicking on this button will open a sidepanel where you can see a table of all the requests you have received.

![The sidepanel with the requests](/images/supplier-quickstart/requests-modal.jpg)

The table has the following columns:

| Column name              | Column description                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Company**              | The name of the customer that sent the request.                                                                                                  |
| **Name**                 | The name of the product that the request is for. This is filled in by the customer that sent the request, and might not match your product name. |
| **Article Number**       | The article number of the product. This is filled in by the customer that sent the request, and might not match your product number.             |
| **Has Matching Art no.** | Indicates whether the article number provided by the customer matches an already existing article number in your Eando X library.                |
| **Request Date**         | The date on which the customer requested the product.                                                                                            |

### Responding to a request

Clicking an item in the list will select it. Multiple items can be selected.

Selecting items in the list will activate one or more of the following buttons:

| Button label                          | Action description                                                                                                                                                                            |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Download XLSX Import File**         | Creates and downloads an XLSX file populated with all data provided by your customers. This will allow you to fill out all missing data in a spreadsheet, and then import it with the [product importer](/documentation/product/product-excel-import).|
| **Reject request**                    | Dismiss and remove the request from the list. The user will be notified that the request has been rejected.                                                                                   |
| **Fulfill with matching art no.**     | If the product requested by the customer already exists in your library, and the article number they provided is correct, the request will be fulfilled with the already existing product.    |
| **Fulfill with non-matching art no.** | If the product requested by the customer exists in your library, but the article number they provided is wrong, this will open a sidepanel allowing you to search for the correct product. |
| **Create product**                    | If the product requested by the customer does not exist in your library, this will open a sidepanel allowing you to create a new product.                                                  |

:::tip Creating a product

Choosing the "Create product" option will take you to the product creation view.

If you are new to Eando X, we recommend that you first start with the [Workflow overview](/documentation/getting-started/workflow-overview) to get a better understanding of the product creation process, the different entities, and how they all work together.

If you're feeling adventurous, you can skip right to the [Product docs](/documentation/product/product-overview).
:::

## Downloading all requests as XLSX

If the in-app fulfillment workflow is not suitable for you, it is possible to download all requests as an XLSX file.

Click the `Fulfill product requests` button in the top right corner of the dashboard.

![The "Fulfill product requests" button](/images/supplier-quickstart/fulfill-requests-button.jpg)

This will open a sidepanel with a table of all the requests you have received. Click the `Download XLSX Import File` button to download the file.

![The sidepanel with the requests](/images/supplier-quickstart/xlsx-import-button.jpg)

This file can be filled out in Excel and then imported into Eando X, using the [product importer](/documentation/product/product-excel-import).

:::tip Learn more
Read more about importing products and components from Excel [here](/documentation/product/product-excel-import).
:::
