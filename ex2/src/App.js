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

 
  addSomeStuff = (stuffDescription) => {
    return () => {
      const searchResult = this.state.items.findIndex(
        (element) => {
          if (element.value === stuffDescription) {
            return true;
          } else {
            return false;
          }
        }
      );
      console.log(searchResult)
      if (searchResult !== -1) {
        let newItems = [...this.state.items];
        newItems[searchResult].qty += Math.floor(1 + (Math.random() * (100-1)));
        this.setState({ items: newItems });
      } else {
        this.setState({
          items: [
            ...this.state.items,
            {
              id: this.state.items.length + 1,
              value: stuffDescription,
              qty: Math.floor(1 + (Math.random() * (100-1))),
            },
          ],
        });
      }
    };
  };
  
  render()
  {
    
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeStuff("Carrots") }>Carrots</button>
      <button onClick={ this.addSomeStuff("Beer") } >Beer</button>
      <button onClick={ this.addSomeStuff("Strawberries")}>strawberries</button>
      <button onClick={ this.addSomeStuff("Yogurt") } >yogurt</button>

    </div>
  }
}

export default App;