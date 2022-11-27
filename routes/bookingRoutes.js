const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const bookingController = require('../controller/bookingController');

router.use(authController.protect);

router
  .route('/')
  .get(
    authController.restrictTo('admin', 'lead-guide'),
    bookingController.getAllBookings
  );

router
  .route('/:id', bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
