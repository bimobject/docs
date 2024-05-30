# Supplier quickstart

Welcome to Eando X!

:::danger TODO:

    - Improve this section

:::

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

## Creating an account

:::danger TODO:

    - Improve this section

:::

1. **Receive Invitation:** You will receive an email from your customer containing a link to create your account for the LCA Supply Chain Tool.

2. **Click on the Link:** Open the email and click on the provided link. This will redirect you to the account creation page.

3. **Follow Instructions:** Follow the on-screen instructions to fill out the necessary information and complete the account creation process.

4. **Access Your Account:** Once your account is created, you will be able to access the LCA Supply Chain Tool using the login credentials you provided during the registration.

## Responding to a customer request

:::danger TODO:

    - Do you get an email notification when a request is received?
    - How does the "Fulfill product requests" button look when you have no requests?

:::

### Seeing your requests

In the top right corner of your dashboard you will see a button labeled "Fulfill product requests", followed by a number.

![The "Fulfill product requests" button](/images/placeholder.png)

Clicking on this button will open a modal window where you can see a table of all the requests you have received.

![The modal window with the requests](/images/placeholder.png)

The table has the following columns:

<!-- - **Company:** The name of the customer that sent the request.
- **Name:** The name of the product that the request is for. This is filled in by the customer that sent the request, and might not match your product name.
- **Article Number:** The article number of the product. This is filled in by the customer that sent the request, and might not match your product number.
- **Has Matching Art no.:** Indicates whether the article number provided by the customer matches an already existing article number in your Eando X library.
- **Request Date:** The date on which the customer requested the product. -->

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

<!-- - **Reject request:** Dismiss and remove the request from the list. TODO: the user will be notified that the request has been rejected.
- **Fulfill with matching art no.:** If the product requested by the customer already exists in your library, and the article number they provided is correct, the request will be fulfilled with the already existing product.
- **Fulfill with non-matching art no.:** If the product requested by the customer exists in your library, but the article number they provided is wrong, this will open a modal window allowing you to search for the correct product.
- **Create product:** If the product requested by the customer does not exist in your library, this will open a modal window allowing you to create a new product. -->

| Button label                          | Action description                                                                                                                                                                            |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reject request**                    | Dismiss and remove the request from the list. TODO: the user will be notified that the request has been rejected.                                                                             |
| **Fulfill with matching art no.**     | If the product requested by the customer already exists in your library, and the article number they provided is correct, the request will be fulfilled with the already existing product.    |
| **Fulfill with non-matching art no.** | If the product requested by the customer exists in your library, but the article number they provided is wrong, this will open a modal window allowing you to search for the correct product. |
| **Create product**                    | If the product requested by the customer does not exist in your library, this will open a modal window allowing you to create a new product.                                                  |

:::tip Creating a product

Choosing the "Create product" option will take you to the product creation view.

If you are new to Eando X, we recommend that you first start with the [Workflow overview](/documentation/getting-started/workflow-overview) to get a better understanding of the product creation process, the different entities and they all work together.

If you're feeling adventurous, you can skip right to the [Product docs](/documentation/product/product-overview).
:::

## Downloading all requests as XLSX

:::danger TODO:

    - How does this process work?

:::

If the in-app fulfillment workflow is not suitable for you, it is possible to download all requests as an XLSX file. This file can be filled out in Excel and then imported into Eando X.

### Downloading the requests

Clicking the "Download XLSX Import File" button will download a file with all the requests in a single XLSX file.

### Importing the requests

Once you have filled out the data in Excel, you can import it into Eando X.

:::danger TODO:

    - How do I import the file?

:::
