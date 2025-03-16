const express = require('express')
const expense = require('../models/expence')
const Expense = require('../models/expence')
const router = express.Router()
router.post('/',async(req , res)=>{
    try{
        const{amount,description,category,userId }= req.body
        const new_expense = await Expense.create({amount,description,category,userId})
        res.status(201).json(new_expense)
    }
    catch(err){
        res.status(500).json({ err: 'Failed to add expense' })
    }
})
router.get('/',async (req,res)=>{
    try{
        const expense = await Expense.findAll()
        res.json(expense)
    }catch(err){
        res.status(500).json({ error: 'Failed to fetch expenses' })
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const expenceId = req.params.id
        const expence = await Expense.findByPk(expenceId)
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' })
        }
        res.json(expense)
    }catch(err){
        res.status(500).json({ err: 'Failed to fetch expenses for id' })
    }
})

module.exports = router