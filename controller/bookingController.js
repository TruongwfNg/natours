const Booking = require('../models/bookingModel');
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('../controller/handlerFactory');

exports.createBooking = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug });
  const userId = res.locals.user.id;
  console.log(tour);
  if (!tour && !userId && !price) {
    return next();
  }

  await Booking.create({
    tour: tour.id,
    user: userId,
    price: tour.price,
  });

  res.redirect('/');
});

exports.createBookingAPI = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
