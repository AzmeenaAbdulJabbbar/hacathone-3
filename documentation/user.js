// schemas/user.js
export default {
    name: 'user',
    title: 'User ',
    type: 'document',
    fields: [
      { name: 'userId', title: 'User  ID', type: 'string' },
      { name: 'username', title: 'Username', type: 'string' },
      { name: 'password', title: 'Password', type: 'string' },
      { name: 'accessToken', title: 'Access Token', type: 'string' },
    ],
  };
  