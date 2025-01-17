
// schemas/order.js
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'orderReference', title: 'Order Reference', type: 'string' },
      { name: 'userId', title: 'User  ID', type: 'string' },
      { name: 'orderStatus', title: 'Order Status', type: 'string' },
      {
        name: 'orderItems',
        title: 'Order Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'productId', title: 'Product ID', type: 'number' },
              { name: 'quantity', title: 'Quantity', type: 'number' },
            ],
          },
        ],
      },
    ],
  };
  