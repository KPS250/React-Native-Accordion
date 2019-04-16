import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Accordian from './app/Accordian'
import { Colors } from './app/Colors';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Non Veg Biryanis', 
          data: [
            {key:'Chicken Biryani', value:'false'},
            {key:'Mutton Biryani', value:'false'},
            {key:'Prawns Biryani', value:'false'},
          ] 
        },
        { 
          title: 'Pizzas',
          data: [
            {key:'Chicken Dominator', value:'false'},
            {key:'Peri Peri Chicken', value:'false'},
            {key:'Indie Tandoori Paneer', value:'false'},
            {key:'Veg Extraveganza', value:'false'}
          ]
        },
        { 
         title: 'Drinks',
         data: [
           {key:'Cocktail',value:'false'},
           {key:'Mocktail',value:'false'},
           {key:'Lemon Soda',value:'false'},
           {key:'Orange Soda', value:'false'}
          ]
        },
        { 
          title: 'Deserts',
          data: [
            {key:'Choco Lava Cake', value:'false'},
            {key:'Gulabjamun', value:'false'},
            {key:'Kalajamun', value:'false'},
            {key:'Jalebi', value:'false'}
          ]
        },
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderAccordians() }
      </View>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:100,
   backgroundColor:Colors.PRIMARY,
   
  }
});
