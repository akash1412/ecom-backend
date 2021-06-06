const { Router } = require('express');
const { restricTo, protect } = require('../middlewares/authController');

const {
  getAllItems,
  getItemsByCategory,
  getCategoryTypes,
  getAllItemsSlug,
  createItem,
  updateItemBySlug,
  getItemBySlugName,
  deleteItemSlug,
} = require('../middlewares/storeController');

const router = Router();

router.route('/').get(getAllItems).post(createItem);

router.route('/category/:category').get(getItemsByCategory);

router.get('/category-types', getCategoryTypes);

router.get('/slugs', getAllItemsSlug);

router.get('/:slug', getItemBySlugName);

router.route('/:slug').patch(updateItemBySlug).delete(deleteItemSlug);

// router
//   .route('/:id')
//   .get(getItemById)
//   .delete(protect, restricTo('admin'), deleteItem);

module.exports = router;
