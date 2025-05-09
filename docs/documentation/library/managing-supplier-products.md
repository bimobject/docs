# Managing supplier products

This page is an in-depth documentation on how to manage the _supplier products_ you have added to your library. It will give you an understanding of the `Supplier Products` tab on the `My Library` page.

:::warning Related articles
This article assumes that you already have added supplier products to your library.

If your library is empty, you can read more about how to add supplier products [here](/documentation/library/accessing-supplier-products).
:::

## See your added supplier products

Navigate to the `My Library` page in the left navigation menu. The `Supplier Products` tab will be visible by default, and show a list of all the _supplier products_ you have added from the **Global Library**.

![Image of the supplier product list FIXME](/images/placeholder.png)

The list features the following columns:

| Field name         | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| **Name**           | The name of the supplier product.                                                    |
| **Article number** | The article number of the supplier product.                                          |
| **Supplier**       | The name of the supplier.                                                            |
| **Status**         | The status of the supplier product. Read more about it [below](#product-status).     |
| **Type**           | Where the product data originates from. Read more about it [below](#product-source). |
| **Unit**           | The unit that this supplier product is measured in.                                  |
| **Last updated**   | The date that the product data was last updated.                                     |

### Sorting and filtering

The supplier products can be sorted by clicking on the column headers. Clicking on the same column header again will reverse the sorting order.

Some of the columns can be filtered by typing in the input field below the column header. The list will be filtered as you type.

### Refreshing the list

At the top of the page you can find a `Refresh` button. This will refresh the list of supplier products, and make sure that you have the latest information about the items.

:::warning Caching
The list is cached for performance, but automatically updated with regular intervals. A manual refresh is only needed in rare cases, if you can't see recent changes you know should be there.
:::

## The supplier product sidepanel

To see the details of a supplier product (or product request), click on the name of the product in the list. This will open a sidepanel with all available data for the selected supplier product:

![Image of the sidebar FIXME](/images/placeholder.png)

On the left edge of the sidepanel you can find two tabs:

### 1. Entity data

This tab shows the data of the supplier product, and is split into three sections:

#### Data

This section shows the data for the supplier product, such as the name, supplier and GWP total.

Some of the fields may include generic data. These fields are marked with a `*`.

#### Impact

This section shows an impact graph of the supplier product.

Read more about impact graphs [here](/documentation/data/impact-graphs).

#### Usage

This section displays which of your products use this supplier component, helping you track dependencies and understand the impact of supplier changes.

### 2. Comments

Use this tab to view and manage your team's internal notes about the supplier product. All comments remain private within your organization.

## Removing a supplier product

:::danger You can only remove unused supplier products
Before you can remove a supplier product, ensure it's not used in any of your products. Attempting to delete a product that's still in use will result in an error.

To check where a supplier product is used, open the product's sidepanel and navigate to the **Usage section** under the **Entity data** tab. This shows all products using this supplier component. Remove the component from each product before returning to `My Library` to complete the deletion.
:::

There are two ways to remove a supplier product (or product request) from your library: using the list view, or the sidepanel.

### From the list view

Find the supplier product you want to remove in the list, and hover over it. Then chech the checkbox that appears to the left of the name. You can select multiple supplier products at once.

When you have selected at least one supplier product, you will see a menu bar appear in the page header. Click the `Delete` button to remove the selected supplier products. A confirmation dialog will appear, asking you to confirm the deletion.

### From the sidepanel

Open the sidepanel for the supplier product you want to remove. At the top right of the sidepanel you will find a `Delete` or `Cancel request` button. Click it to remove the supplier product. A confirmation dialog will appear, asking you to confirm the deletion.

## Product status

A supplier product can have one of three states:

- `No status`: The default state. No actions needed.
- `Pending`: Indicates that this is a supplier product request, that is yet to be fulfilled by the supplier
- `Update available`: Indicates that new product data is available from the supplier. You can apply these updates to keep your products LCA current.

<!-- TODO: Expand this section, explain how to update product -->

## Product source

<!--@include: ../__partials/supplier-product-source.md -->
