//Bribes routes.js
const router = require("../helpers/router").createRouter();
const {post, validate} = require('./controller');

router.addRoute('/', 'post', validate(), post);

module.exports = router.expressRouter;