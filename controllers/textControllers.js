const Text = require('../models/Text')
const { connectDB, disconnectDB } = require('../config/db');


async function createText(req,res){
    try {
        if(req.method == 'GET'){
            res.render('client/create')
        }else if(req.method == 'POST'){
            await connectDB();
            const {text} = req.body
            const text1 = new Text({
                text:text
            })
            await text1.save()
            await disconnectDB()
            res.redirect('/home');
        }
    } catch (error) {
        await disconnectDB()
        res.status(500).send(error.message);
    }
}
async function readTexts(req,res){
    try {
        await connectDB();
        const texts=await Text.find()
        res.render('client/index',{texts})
        await disconnectDB()
        // res.redirect('/home');

    } catch (error) {
        await disconnectDB()
        console.log(error)
        res.status(500).send(error.message);
    }
}
async function readText(req,res){
    try {
        const id = req.params.id
        await connectDB();
        const text = await Text.findById(id)
        res.render('client/show',{text})
        await disconnectDB()
        // res.redirect('/home');

    } catch (error) {
        await disconnectDB()
        console.log(error)
        res.status(500).send(error.message);
    }
}
async function updateText(req,res){
    try {
        const id = req.params.id
        if(req.method == 'GET'){
            await connectDB();
            const text = await Text.findById(id)
            await disconnectDB()
            res.render('client/update',{text})
        }else if(req.method == 'POST'){
            const {text} = req.body
            await connectDB();
            const updatedtext = await Text.findByIdAndUpdate(id, {text:text}, { new: true });
            res.redirect('/show/'+id,)
            await disconnectDB()
        }
    } catch (error) {
        await disconnectDB()
        console.log(error)
        res.status(500).send(error.message);
    }
}
async function deleteText(req,res){
    try {
        const id = req.params.id
        await connectDB();
        const text = await Text.findByIdAndDelete(id)
        await disconnectDB()
        res.redirect('/home');

    } catch (error) {
        await disconnectDB()
        console.log(error)
        res.status(500).send(error.message);
    }
}

module.exports = {
    createText,
    readTexts,
    readText,
    updateText,
    deleteText,
}