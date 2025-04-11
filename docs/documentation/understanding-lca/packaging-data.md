# Packaging data

This article explains the key concepts of packaging data, from simple product-level entries to reusable packaging entities.

:::warning Please note
If you are looking for more hands-on information on how to create _Packaging_ entites, please refer to the [Packaging](/documentation/packaging/packaging-overview) chapter.
:::

## Understanding packaging calculations

EandoX lets you add packaging information in two ways. You can either add it on a product level, or as a separate reusable _Packaging_ entity:

### Product-level packaging

If a product packaging consists of a single material, you can add it directly as a material when defining the product/component. An example of this could be adding `0.05kg of Plastic Wrapping` in the [Materials section](/documentation/product/creating-a-product#managing-materials).

The benefit of this approach is that it's straightforward and doesn't require the creation of a separate _Packaging_ entity.

However, it's less clear that the `Plastic Wrapping` is representing the packaging material (and not a part of the product itself). It's also less flexible for complex packaging setups, and can't be reused (or modified) for multiple products/components at once.

:::tip Data quality
While it's straightforward, this approach may not be as accurate for LCA calculations as creating a separate _Packaging_ entity (as detailed below). It may also make it harder to keep all product data up to date.
:::

### Packaging entity

For complex multi-material packaging, it's better to create it as a separate _Packaging_ entity. An example of this could be to [create a `Packaging` entity](/documentation/packaging/creating-a-packaging) called `Cardboard box with foam inserts`, containing all material and amounts. You can then add this _Packaging_ entity to the product/component in the [Packaging section](/documentation/product/creating-a-product#managing-packaging).

The benefit of using a _Packaging_ entity, is that it lets you manage all materials and amounts in one place. When you need to update the packaging, you only need to change it once, and all products using that packaging will automatically update.

:::tip Data quality
It is generally a better idea to use a _Packaging_ entity for all your packaging needs, as it provides a more structured and organized approach to managing the data. It may also lead to more accurate LCA calculations.
:::

## Understanding functional units

The amount of packaging you enter is always connected to the functional unit (FU) of the product/component being analyzed. The functional unit is the unit in which the product is sold, and it sets the scale for your packaging data.

:::tip Setting the functional unit
The unit is set when [creating a product](/documentation/product/creating-a-product#creating-a-new-product), but can be changed from the [Edit menu](/documentation/product/creating-a-product#the-product-page) in the **Product page** header.
:::

The functional units are:

- **Piece - pc**
- **Meter - m**
- **Kilogram - kg**
- **Square Meter - m2**
- **Cubic Meter - m3**

### Example 1 - Wooden Chair

The functional unit for the product _Wooden Chair_ is `Piece - pc`. This means that you need to specify the packaging for **one single chair**. For instance, if one chair requires 0.5kg of cardboard, you input `0.5kg` of cardboard packaging.

### Example 2 - Diamond

The functional unit for the product `Wood Pellets` is `Kilogram - kg`. This means that you need to specify how much packaging is used for **1 kg of Wood Pellets** (even if the `Wood Pellets` are sold in other quantities). For example, if 1kg of `Wood Pellets` uses 0.1kg of LDPE plastic, you input `0.1 kg` of LDPE.
