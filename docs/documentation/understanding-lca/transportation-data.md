# Transportation data

Accurate transportation data plays a key role in your LCA calculations. This article helps you understand how to choose and use the right transportation data to improve your LCA quality.

:::warning Please note
If you are looking for more hands-on information on how to add transportation data to your product, please see the [Creating a product](/documentation/product/creating-a-product) article.
:::

## Understanding transportation calculations

Transportation in EandoX consists of two main parts: material transport to your factory, and product delivery to customers. Let's look at how each of these work.

### Material transport to factory

When you add a material, EandoX starts with a generic transport distance representing typical supplier-to-factory routes. While this generic data is a good starting point, using your actual supply chain distances will make your LCA more accurate.

You can customize these distances in the **Transport data** tab in the [Material sidepanel](/documentation/product/creating-a-product#the-material-sidepanel). For example, if you receive steel rolls from a supplier in Berlin to your factory in Ystad, you would enter this specific route distance and select how it's transported (truck, train, etc.).

### Product delivery to customers

Customer delivery distances are managed at the EPD level in the **Impact Handling** section. Like material transport, you can use either:

- Generic distances
- Custom distances for specific routes

For instance, if your Ystad factory supplies products across Sweden, you might use the average distance from Ystad to a central location, like Stockholm, as your **A4** transport distance, along with the correct mode of transport.

:::tip Get the distance right
When calculating delivery distances, consider using a central location in your main market as the delivery point. This gives you a reasonable average for your calculations.
:::
