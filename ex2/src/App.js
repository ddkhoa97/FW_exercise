import React,{ useState } from "react";

import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';


class App extends React.Component {
  
  constructor(props)
  {
  
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
    
    
  };

 

 
  addSomeCarrots =(t) =>{
  
    if ((this.state.items.filter(e => e.id === 5)).length >0 ) {
      const newQty= this.state.items[t.target.id -1].qty + Math.floor(1 + (Math.random() * (100-1)))
      console.log(newQty)
    // 1. Make a shallow copy of the items
    let items = [...this.state.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[t.target.id -1]};
    // 3. Replace the property you're intested in
    item.qty = newQty;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[t.target.id -1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
  
    }
   else{
    this.setState({items:[...this.state.items,{id:5,value:"Carrots",unit:"pcs",qty: Math.floor(1 + (Math.random() * (100-1)))}]})
   }
  }
  addSomeBeer =(t) =>{
  
    if ((this.state.items.filter(e => e.id === 6)).length >0 ) {
      const newQty= this.state.items[t.target.id -1].qty + Math.floor(1 + (Math.random() * (100-1)))
      console.log(newQty)
    // 1. Make a shallow copy of the items
    let items = [...this.state.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[t.target.id -1]};
    // 3. Replace the property you're intested in
    item.qty = newQty;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[t.target.id -1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
  
    }
   else{
    this.setState({items:[...this.state.items,{id:6,value:"Beer",unit:"ltr",qty: Math.floor(1 + (Math.random() * (100-1)))}]})
   }
  }
 
  addSomeStrawberries =(t) =>{
  
    if ((this.state.items.filter(e => e.id === 7)).length >0 ) {
      const newQty= this.state.items[t.target.id -1].qty + Math.floor(1 + (Math.random() * (100-1)))
      console.log(newQty)
    // 1. Make a shallow copy of the items
    let items = [...this.state.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[t.target.id -1]};
    // 3. Replace the property you're intested in
    item.qty = newQty;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[t.target.id -1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
  
    }
   else{
    this.setState({items:[...this.state.items,{id:7,value:"strawberries",unit:"pcs",qty: Math.floor(1 + (Math.random() * (100-1)))}]})
   }
  }
 
  addSomeYogurt =(t) =>{
  
    if ((this.state.items.filter(e => e.id === 8)).length >0 ) {
      const newQty= this.state.items[t.target.id -1].qty + Math.floor(1 + (Math.random() * (100-1)))
      console.log(newQty)
    // 1. Make a shallow copy of the items
    let items = [...this.state.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[t.target.id -1]};
    // 3. Replace the property you're intested in
    item.qty = newQty;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[t.target.id -1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
  
    }
   else{
    this.setState({items:[...this.state.items,{id:8,value:"yogurt",unit:"pcs",qty: Math.floor(1 + (Math.random() * (100-1)))}]})
   }
  }
  

  
  render()
  {
    
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeCarrots } name="Carrots" id="5">Carrots</button>
      <button onClick={ this.addSomeBeer } name="beer"  id="6">Beer</button>
      <button onClick={ this.addSomeStrawberries} name="strawberries"  id="7">strawberries</button>
      <button onClick={ this.addSomeYogurt } name="yogurt"  id="8">yogurt</button>

    </div>
  }
}

export default App;