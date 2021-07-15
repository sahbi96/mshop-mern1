import bcrypt from 'bcryptjs'

const data = {

  users :[
  {
    name:'Sahbi',
    email:'sahbinour@gmail.com',
    password:bcrypt.hashSync('1234',8),
    isAdmin:true,
  },
  {
    name:'ahmed',
    email:'ahmed@gmail.com',
    password:bcrypt.hashSync('1234',8),
    isAdmin:false,
  }
  ],
  products: [
    {
      
      name: 'JBL GO 2',
      category: 'Speaker',
      image: '/images/product1.png',
      price: 30,
      countInStock: 10,
      brand: 'JBL',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'JBL PartyBox 300',
      category: 'Speaker',
      image: '/images/product2.jpg',
      price: 350,
      countInStock: 20,
      brand: 'JBL',
      rating: 5.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Behringer - SX3242FX',
      category: 'mix table',
      image: '/images/product3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Behringer',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      
      name: 'Pioneer DJM-S7',
      category: 'mix table',
      image: '/images/product4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Pioneer',
      rating: 5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      
      name: 'SONY GTKXB5B',
      category: 'Speaker',
      image: '/images/product5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Sony',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Sony SRS-XB12',
      category: 'Speaker',
      image: '/images/product6.jpg',
      price: 60,
      countInStock: 12,
      brand: 'Sony',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;