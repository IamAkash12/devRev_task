export  var initialState = {

  cartList:[],
  productList:[{
    title: 'The Psychology of Money By- Morgan Housel',
    price: '1.02',
    rating: '4',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg',
 

  },
  {
    title: 'Amet do fugiat officia exercitation exercitation eiusmod ad aliqua duis minim.',
    price: '2.03',
    rating: '3',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg'
  },
  {
    title: 'Consequat eiusmod cillum tempor cillum excepteur velit laboris veniam.',
    price: '3.04',
    rating: '2',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg.jpg'
  },
  {
    title: 'Tempor in exercitation do elit deserunt non adipisicing proident adipisicing est.',
    price: '4.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg'
  },
  {
    title: 'Cupidatat aliquip laboris tempor eu eiusmod veniam velit cupidatat Lorem Lorem exercitation proident.',
    price: '5.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg'
  },
  {
    title: 'Quis officia culpa commodo ut laborum ex laboris elit aliqua irure mollit culpa dolore sunt.',
    price: '6.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg'
  },
  {
    title: 'Incididunt nisi aliqua elit nostrud dolore consequat deserunt nostrud laboris ipsum id deserunt commodo.',
    price: '7.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg'
  },
  {
    title: 'Voluptate aliqua qui deserunt cillum amet excepteur eu velit.',
    price: '8.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg'
  },
  {
    title: 'Est cillum ad incididunt id quis magna pariatur ullamco aliqua nisi.',
    price: '9.00',
    rating: '4',
    quantity: '5',
    imageURL: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}