const express = require('express')
const {
    getSale,
    getSales,
    getBacardi,
    getCampari,
    getDiageo,
    getGoslings,
    getJeffersons,
    getDobel,
    getPernod,
    getStranahans,
    getRoyalsalute,
    getWaterford,
    getWash,
    getWhipshots
} = require('../controllers/saleController')

const router = express.Router()

router.get('/', getSales)
router.get('/id', getSale)
router.get('/goslings', getGoslings)
router.get('/bacardi', getBacardi)
router.get('/campari', getCampari)
router.get('/diageo', getDiageo)
router.get('/jeffersons', getJeffersons)
router.get('/dobel', getDobel)
router.get('/pernod', getPernod)
router.get('/stranahans', getStranahans)
router.get('/royalsalute', getRoyalsalute)
router.get('/waterford', getWaterford)
router.get('/wash', getWash)
router.get('/whipshots', getWhipshots)

module.exports = router