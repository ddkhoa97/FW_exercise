
import React from 'react';
import data from './data2.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdminView from './components/AdminView';
import ClientView from './components/ClientView';
import Register from './components/Register';
import RegisterView from './components/RegisterView';
import styles from "./App.module.css"
import ProfileView from './components/ProfileView';
import ProductView from './components/ProductView';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      SeachString  :"",
      userInfo:null,
    }
   
  }
 
  getData(){
   
   axios.get('http://localhost:4000/products')
  .then(response => {
    // handle success
    this.setState({items:response.data});
    console.log(response.data)
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
   });
   
}
  componentDidMount ()
  {
    console.log("mounted")
    this.getData();
   
  }
  
  
  
  searchFilterUpdate = (newValue) => {
    
    this.setState({ SeachString: newValue});
  }

  addNewItem = (name, seller, original_price,promotion_price,shipping,image) => {
    let newItem ={
      id: uuidv4(),
      name: name,
      seller: seller,
      original_price: original_price,
      promotion_price:promotion_price,
      shipping:shipping,
      image:image
    } ;

    axios.post('http://localhost:4000/products/add-new',newItem)
    .then(function(respone)
    {
      window.location.reload();
    })
    .catch(function(error)
    { 
      console.log(error)
    })

  
  }
 
  deleteItem = itemId => {
   
    axios.delete('http://localhost:4000/products/delete/'+itemId)
    .then(response =>
    {
      window.location.reload();
    })
    .catch(function(error)
    { 
      console.log(error)
    })
  }


  storeUserInfo = (name, address, phone,email) => {
    var data ={
      id: uuidv4(),
      name:name,
      address:address,
      phone:phone,
      email:email
    }
    this.setState({ userInfo: data});
    axios.post('http://localhost:4000/users/add-new',data)
    .then(function(respone)
    {
    
      console.log(respone)
    })
    .catch(function(error)
    { 
      console.log(error)
    })
  }
 
  getProductInfo = (productId) => {
    
    return (this.state.items.find(item => item.id === productId));
  
}

  render()
  {
    console.log('render')
    if (this.state.items.length ==[]){
      return <div>Loading...</div>
       }
    else{
      console.log(this.state)
  return (
    
    <Router>
     
      <Route path="/" exact render={
          (routeProps) =>
            <ClientView
              items={ this.state.items }
              SeachString={ this.state.SeachString }
              onSearchFilterUpdate={ this.searchFilterUpdate }
              userInfo={ this.state.userInfo }
               />
        } />
        
      <Route path="/register" exact render={ routeProps => <RegisterView storeUserInfo={ this.storeUserInfo } {...routeProps} /> }/>
      <Route path="/admin" exact render={ routeProps => <AdminView 
        addNewItem={ this.addNewItem }
        items={ this.state.items }
        deleteItem={ this.deleteItem } 
        {...routeProps}/>
        }/>

     <Route path="/profile" exact render={ routeProps => <ProfileView userInfo={ this.state.userInfo } {...routeProps} /> }/>
      <Route path="/product/:id" exact render={ routeProps => <ProductView {...routeProps} getProductInfo={ this.getProductInfo } /> } />
    </Router>
  )
  }
}
}

export default App;
