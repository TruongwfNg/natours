// import axios from 'axios';
// import { showAlert } from './alert';

// const { default: Stripe } = require('stripe');

// const stripe = Stripe(
//   'pk_test_51M8MWiJt7MEqP95KHZkGmui8k6rDpA8hZkfopFqIhf6i6AHUkTGTlj9O2HnMpbzfwlFKL9MjdMynjlzp11xDxTFa00I98Bn2C6'
// );

// export const bookTour = async (tourId) => {
//   try {
//     // 1) get Checkout Session from API
//     const session = await axios(
//       `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
//     );
//     console.log(session);
//     // 2) Create checkout form + charge credit card
//     window.location.replace(session.data.session.url);
//   } catch (error) {
//     showAlert('error', error);
//   }
// };
