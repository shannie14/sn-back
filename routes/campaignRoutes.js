const express = require('express')
const {
    getCampaign,
    getCampaigns,
    getBacardi,
    getCampari,
    getDiageo,
    getGoslings,
    getJeffersons,
    getDobel,
    getPernod,
    getProximo,
    getStranahans,
    getRoyalsalute,
    getWaterford,
    getWash,
    getWhipshots
} = require('../controllers/campaignController')

const router = express.Router()

router.get('/', getCampaigns)
router.get('/id', getCampaign)
router.get('/goslings', getGoslings)
router.get('/bacardi', getBacardi)
router.get('/campari', getCampari)
router.get('/diageo', getDiageo)
router.get('/jeffersons', getJeffersons)
router.get('/dobel', getDobel)
router.get('/pernod', getPernod)
router.get('/proximo', getProximo)
router.get('/stranahans', getStranahans)
router.get('/royalsalute', getRoyalsalute)
router.get('/waterford', getWaterford)
router.get('/wash', getWash)
router.get('/whipshots', getWhipshots)

module.exports = router