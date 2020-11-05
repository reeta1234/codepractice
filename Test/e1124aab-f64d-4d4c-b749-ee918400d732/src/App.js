import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products,
            increment:false,
            decrement:false
        }
    }

    addToCart=(product)=>{
        this.setState((cart)=>{
            if(cart.items){
                cart.items.push(product)
            }else{
                cart.items = [product]
            }
            return {
                cart:{
                    items : cart.items
                },
                increment:true,
                decrement:true
            }
        })

        const existingItem = this.state.cart.items.filter(item=>item.id===product.id)
        if(existingItem.length>0){
            const withoutExistingItem = this.state.cart.items.filter(item=>item.id!==product.id)
            const updateCart = {
                ...existingItem[0],
                quantity:existingItem[0].quantity+1
            }
            this.setState({
                cart:{
                    items:[...withoutExistingItem,updateCart]
                }
            })
    
        }else{
            this.setState({
                cart:{
                    items:[...this.state.cart.items,product]
                }
            })
        }
    }

    updateIncrement=(product)=>{
        const existingItem = this.state.cart.items.filter(item=>item.id===product.id)
        if(existingItem.length>0){
            const withoutExistingItem = this.state.cart.items.filter(item=>item.id!==product.id)
            const updateCart = {
                ...existingItem[0],
                quantity:existingItem[0].quantity+1
            }
            this.setState({
                cart:{
                    items:[...withoutExistingItem,updateCart]
                }
            })
    
        }else{
            this.setState({
                cart:{
                    items:[...this.state.cart.items,product]
                }
            })
        }
    }

    updateDecrement=(product)=>{
        const existingItem = this.state.cart.items.filter(item=>item.id===product.id)
        if(existingItem.length>0){
            const withoutExistingItem = this.state.cart.items.filter(item=>item.id!==product.id)
            const updateCart = {
                ...existingItem[0],
                quantity:existingItem[0].quantity-1
            }
            this.setState({
                cart:{
                    items:[...withoutExistingItem,updateCart]
                },
                decrement:(existingItem[0].quantity>2)?true:false
            })
        }else{
            this.setState({
                cart:[...this.state.cart.items,product]
            })
        }
    }

    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products} addToCart={this.addToCart} 
                    increment={this.state.increment} 
                    decrement={this.state.decrement}
                    updateIncrement={this.updateIncrement}
                    updateDecrement={this.updateDecrement}
                    />
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5,
        quantity:1
    },
    {
        name: "HandBag",
        price: 30,
        quantity:1
    },
    {
        name: "Shirt",
        price: 35,
        quantity:1
    },
    {
        name: "Shoe",
        price: 50,
        quantity:1
    },
    {
        name: "Pant",
        price: 35,
        quantity:1
    },
    {
        name: "Slipper",
        price: 25,
        quantity:1
    }
];
export default App;
