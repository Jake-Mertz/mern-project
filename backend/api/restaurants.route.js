import express from "express";
import RestaurantsCTRL from './restaurants.controller.js';
import ReviewsCTRL from './reviews.controller.js';

const router = express.Router();

router.route("/").get(RestaurantsCTRL.apiGetRestaurants);

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)

export default router;
