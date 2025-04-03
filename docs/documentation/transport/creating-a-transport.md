# Creating a transport

This article will go through all the steps of creating a transport entity in EandoX.

## Creating a new transport

To create a transport, click on the **Transport** tab in the sidebar menu. Then click the **Add transport** button in the top right corner.

![Image of the transport page with the create transport button](/images/transport/create-button.jpg)

This will open a sidepanel where you can fill out the necessary information about your transport.

![Image of the transport creation sidepanel](/images/transport/create-panel.jpg)

<span id="transport-fields-table">The fields in the sidepanel are as follows:</span>

| Field name                 | Field description                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Truck/Train/Plane/Boat** | Specifies the vehicle type for this transport entity.                                                                                                 |
| **Transport name**         | The name of the transport.                                                                                                                            |
| **Transport data set**     | Selects a vehicle in the specified vehicle type. This data set describes the vehicles environmental impact, and will be used in the LCA calculations. |
| **Description**            | A description of the transport.                                                                                                                       |
| **Fill rate**              | The amount of the vehicle's cargo space that is filled during outbound shipping (in percent).                                                         |
| **Empty return**           | The amount of the vehicle's cargo space that remains empty during return trips (in percent).                                                          |

Click `Create` in the top right corner to create the transport. This will add the transport to the list of available transports.

## Editing a transport

If you want to edit an existing transport, you can navigate to the `Transport` page in the left navigation menu and click the transport you want to edit.

![Image of the transport page](/images/transport/edit-transport.jpg)

This will take you to the transports page, where you can see and edit the details of your transport. The fields are the same as when [creating a new transport](#transport-fields-table).

## The transport page

![Image of the transport page](/images/transport/transport-page.jpg)

On the transport page, you will see multiple sections:

- **Header**: Includes the following buttons:
  - `Comment`: Allows your team to leave [comments](/documentation/data/comments) on this transport, for internal use
  - `Save`: Will save the transport
- **Details**: All of the details of the transport. Some fields are editable, others are calculated based on the selected data set and provided data. These details are the ones described in the ["creating a new transport"](#transport-fields-table) section.
- **Description**: Your description of the transport.
