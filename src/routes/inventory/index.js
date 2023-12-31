'use strict'
const express=require('express')
const router=express.Router()
const {asyncHandler}=require('../../auth/checkAuth')
const { authentication } = require('../../auth/authUtils')
const inventoryController = require('../../controllers/inventory.controller')
router.use(authentication)
router.post('/addstock',asyncHandler(inventoryController.addStockToInventory))

module.exports=router