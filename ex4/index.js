const express = require('express')
const app = express()
const port = 4000
var fs = require("fs")
const cors = require('cors');
const { query } = require('express');
const data = require('./data.json');
const data_users=require('./users.json');
const data_invoices=require("./invoices_a_user.json");
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})




//GET ALL PRODUCTS && GET SINGLE PRODUCT
app.get('/products', async (req, res) => {
  if(req.query.id == undefined)
  {
  
    res.json(data.items);
  }
  else{
    res.json(  data.items.filter(item => item.id == req.query.id));
  }
  
});

//GET PRODUCTS BY CONDITIONS

app.get('/products/search', (req, res) => {
  
 const filters = req.query
   
   for(var key in filters)
   {
        console.log(key)
   
   }
  filtered_data= data.items.filter(item =>{
    for(var key in filters)
    {
      if(item[key] === undefined || item[key] != filters[key])
      {
        
        return false;
      }
      return true;
    
    }
  
  })
 res.json(filtered_data)


 
});



//CREATE NEW PRODUCT
app.post('/products/add-new', (req, res) => {
  if(req.body.id== undefined || req.body.name == undefined || req.body.seller == undefined || req.body.original_price == undefined|| req.body.promotion_price == undefined || req.body.image == undefined || req.body.shipping == undefined  )
  { 
    console.log("Input again, lack of information")
    res.send("Input again, lack of information");
    
   
  }
  else{
    data.items[data.items.length]= req.body;
    fs.writeFile('data.json', JSON.stringify(data),  function(err) {
      if (err) {
          return console.error(err);
      }});
     res.send("Successful!")
  }
   


});


//MODIFY PRODUCT
app.patch('/products/modify/:id', (req, res) => {
  if(req.body.name == undefined || req.body.seller == undefined || req.body.original_price == undefined|| req.body.promotion_price == undefined || req.body.image == undefined || req.body.shipping == undefined  )
  { 
    console.log("Input again, lack of information")
    res.send("Input again, lack of information");
    
   
  }
  else{
  var update_item=
  {
    "id": req.params.id,
    "name": req.body.name,
    "seller": req.body.seller,
    "original_price": req.body.original_price,
    "promotion_price": req.body.promotion_price,
    "image": req.body.image,
    "shipping":req.body.shipping
  }
  
  for(let i=0 ; i <data.items.length;i++)
  {
    if(data.items[i].id == req.params.id)
    {
      data.items[i]= update_item;
    }
  }
  
 
  fs.writeFile('data.json', JSON.stringify(data),  function(err) {
    if (err) {
        return console.error(err);
    }});

  res.send("successful !!!");
  }

});


//DELETE PRODUCTS
app.delete('/products/delete/:id', (req, res) => {
 
 
 data.items=data.items.filter(item => item.id != req.params.id)
    
    fs.writeFile('data.json', JSON.stringify(data),  function(err) {
      if (err) {
          return console.error(err);
      }});
    res.json(data);
     return("Successful !!!")
});



//CREATE NEW USER
app.post('/users/add-new', (req, res) => {
  
  if(req.body.id == undefined || req.body.name == undefined || req.body.address == undefined || req.body.phone == undefined || req.body.email== undefined)
  {
    console.log("Input again, lack of information")
    res.send("Input again, lack of information");
  }
  else{
    data_users.users[data_users.users.length]=req.body;
    fs.writeFile('users.json', JSON.stringify(data_users),  function(err) {
      if (err) {
          return console.error(err);
      }});
  res.send("Successful!")
  }
  
  
});

// CREATE INVOICES

app.post('/check-out', (req, res) => {
  if(req.body.user_id == undefined || req.body.product_id == undefined || req.body.qty == undefined || req.body.price == undefined )
  {
    console.log("Input again, lack of information")
    res.send("Input again, lack of information");
  }
  else{
    var new_invoice={
      "user_id":req.body.user_id,
      "invoice_id":uuidv4(),
      "purchases":[
      {"product_id":req.body.product_id,
      "qty":req.body.qty,
      "price":req.body.price,
      "total":req.body.qty*req.body.price}
      ]    
    }
    data_invoices.invoices[data_invoices.invoices.length]=new_invoice;
   
    fs.writeFile('invoices_a_user.json', JSON.stringify(data_invoices),  function(err) {
      if (err) {
          return console.error(err);
      }});
    
  res.send("Successful !!!");
  }
     
});

//GET A OR MANY INVOICES OF A USER
app.get('/users/invoices', (req, res) => {

  if(req.query.invoiceId != undefined)
  {
    filtered_data=data_invoices.invoices.filter(item => item.invoice_id == req.query.invoiceId)
  }
  else{
    filtered_data=data_invoices.invoices }
    console.log(filtered_data)
    res.json(filtered_data)
});


//DELETE INVOICE OF A USER

app.delete('/invoices/delete/:invoiceId', (req, res) => {
  
  const id_invoice= req.params.invoiceId

   data_invoices.invoices=data_invoices.invoices.filter(item =>item.invoice_id != id_invoice)
  fs.writeFile('invoices_a_user.json', JSON.stringify(data_invoices),  function(err) {
    if (err) {
        return console.error(err);
    }});
  
     res.json( data_invoices)
    res.send("successful !")
 });

 //DELETE ALL INVOICES OF A USER
//  app.delete('/invoices/delete', (req, res) => {
//   data_invoices.invoices= [];
//     res.json( data_invoices)
//  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})