// schemas/cart.js
export default {
    name: 'cart',
    title: 'Cart',
    type: 'document',
    fields: [
      { name: 'userId', title: 'User  ID', type: 'string' },
      {
        name: 'cartContents',
        title: 'Cart Contents',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
    ],
  };
  