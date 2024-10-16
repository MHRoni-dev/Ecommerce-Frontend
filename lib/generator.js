const fs = require('fs')
const path ={
    product : "../dummy/product.json"
}

const defaultKeys = ['title', 'price', 'discountPrice', 'ratting', 'image' ]
const titleSample = ['TShirt', 'Pants', 'Jeans', 'Shooes']
const tagSample = ['new', 'latest', 'hot']
const categorySample = ['thsirt', 'pants', 'jeans', 'shooes', 'shirt']
const price = {
    min : 200,
    gap : 50,
    max : 4000
}


 function productGenerate ( keys = defaultKeys , quantity = 10, callback) {

    const data = []
    for(i = 0; i < quantity; i++){
        const product = keys.reduce((product, key) =>{
          
            //generate title
            if(key === 'title'){
                product.title = generateTitle()
            }

            if(key === 'category'){
                product.category = generateCategory(product.title)
            }

            if(key === 'price'){
                product.price = generatePrice()
            }

            return product
        } ,{id : i + 1})
        
        
        callback(product)
        data.push(product)
    }

    return data
}


function getRandomItem (items = []) {
    let index = Math.floor(Math.pow(10,items.length.toString().length) * Math.random())
    index = index >= items.length ? index % items.length : index
    return items[index]
}

function generateTitle () {
    return `${getRandomItem(tagSample)} ${getRandomItem(categorySample)}`
}

function generateCategory(title = "") {
    return categorySample.find(category => title.toLowerCase().includes(category.toLowerCase()))
}

function generatePrice(){
    let distance =(price.max - price.min) / price.gap
    let random = Math.floor(Math.random() * Math.pow(10, distance.toString().length)) % distance
    let generatedPrice =  price.min + price.gap * random
    if(generatedPrice < price.min || generatedPrice > price.max) throw new Error(generatedPrice)
    return generatedPrice
}


function writeProduct (products) {
    console.log('writing')
    fs.writeFile(path.product, JSON.stringify(products))
    console.log('done')
}

function appendProduct (product) {
    console.log('appending product', product.id)
    fs.appendFile(path.product, JSON.stringify(product) + ',\n\t',err =>{ if(err) throw Error(err)})
    console.log('done')
}

productGenerate(['title', 'category', 'price'], 100, appendProduct)