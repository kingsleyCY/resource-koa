const base = require('./base')
const users = require('./users')
const router = require('koa-router')()

router.use(base.routes(), base.allowedMethods());
router.use(users.routes(), users.allowedMethods());

module.exports = router