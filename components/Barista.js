import React, { useState } from 'react';
import "./styles/barista.css";
import WrapContainer from './WrapContainer';
import CartPage from './CartPage';
import { Link } from 'react-router-dom';

const Barista = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (item) => {
    const newItem = { ...item, quantity: 1 };
    setCartItems((prevCart) => [...prevCart, newItem]);
  };

  const items = [
    {
        id: 1,
        name: "Veg Momos",
        price: 126,
        image: "./momos.png",
      },
      {
        id: 2,
        name: "Alfredo Pasta",
        price: 200,
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg",
      },
      {
        id: 3,
        name: "Arabiata Pasta",
        price: 180,
        image: "https://static.toiimg.com/photo/93068647.cms",
      },
      {
          id: 4,
          name: "Chocolate Excess",
          price: 215,
          image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/c2/97/2f/buddha-garden-pizza.jpg",
        },
        {
          id: 5,
          name: "Brownie Fondente",
          price: 189,
          image: "https://t4.ftcdn.net/jpg/06/43/23/65/360_F_643236518_nFrKDOGvUt79fmAZMndRfyKGtuD9KGCv.jpg",
        },
        {
          id: 6,
          name: "Wicked Brownie",
          price: 288,
          image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?cs=srgb&dl=pexels-pixabay-45202.jpg&fm=jpg",
        },
        {
          id: 7,
          name: "Blueberry Muffin",
          price: 176,
          image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZWJlcnJ5JTIwbXVmZmlufGVufDB8fDB8fHww",
        },
        {
          id: 8,
          name: "Almond Muffin",
          price: 176,
          image: "https://www.shutterstock.com/image-photo/healthy-gluten-free-almond-muffins-600nw-1936592272.jpg",
        },
        {
          id: 9,
          name: "Lemon Cake",
          price: 110,
          image: "https://static.vecteezy.com/system/resources/thumbnails/010/375/786/small_2x/lemon-cake-with-coconut-flakes-piece-of-delicate-vanilla-dessert-with-cream-photo.jpg",
        },
        {
            id: 10,
            name: "Marble Cake",
            price: 110,
            image: "https://t3.ftcdn.net/jpg/03/21/02/72/360_F_321027238_u38SodAyFaybXk8YzbsKiTQnsDvLVVwG.jpg",
          },
          {
            id: 11,
            name: "Veg Puff",
            price: 110,
            image: "https://www.blueberriesfoods.com/wp-content/uploads/2018/10/Vegetable-Puffs-1.png",
          },
          {
            id: 12,
            name: "Cheesy Garlic Bread",
            price: 162,
            image: "https://t4.ftcdn.net/jpg/01/77/40/41/360_F_177404119_oH2uSPYmTqPqTfGNHJUEO7c7j4oHDghr.jpg",
          },
          {
            id: 13,
            name: "Three Pepper Cheese Toastie",
            price: 120,
            image: "https://healthyhappylife.com/wp-content/uploads/2012/05/daiya-large-cheese-sandwich564_edited-3.jpg",
          },
          {
            id: 14,
            name: "Spinach & Corn Sandwich",
            price: 231,
            image: "https://theflavoursofkitchen.com/wp-content/uploads/2017/06/Spinach-Corn-Sandwich-1-scaled.jpg",
          },
          {
            id: 15,
            name: "Paneer Tikka Sandwich",
            price: 225,
            image: "https://images1.livehindustan.com/uploadimage/library/2023/06/11/16_9/16_9_6/paneer_tikka_sandwich_1686449679.jpg",
          },
          {
            id: 16,
            name: "Mushroom Toastie",
            price: 178,
            image: "https://sundaysuppermovement.com/wp-content/uploads/2022/11/mushroom-grilled-cheese-featured.jpg",
          },
          {
            id: 17,
            name: "Cappuccino Large",
            price: 163,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg",
          },
          {
            id: 18,
            name: "Cafe Americano Large",
            price: 147,
            image: "https://wallpapercave.com/wp/wp9571900.jpg",
          },
          {
            id: 19,
            name: "Caffe Latte Large",
            price: 183,
            image: "https://www.thespruceeats.com/thmb/0CK65lVOSHILEZXSh1dVJ_Hl4Hc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg",
          },
          {
            id: 20,
            name: "Flat White Large",
            price: 246,
            image: "https://media.istockphoto.com/id/1065068246/photo/latte-hot-coffee-in-a-cup-its-a-popular-drink-in-the-world-for-refresh-at-the-morning-or-make.jpg?s=612x612&w=0&k=20&c=p1O0byhRmTKzKEQnecilRZayWbHyA-fTfly8bTwApdk=",
          },
          {
            id: 21,
            name: "Brewed-French Press Regular",
            price: 131,
            image: "https://assets.epicurious.com/photos/54de2fa1e77a7de93305de53/6:4/w_1998,h_1332,c_limit/5_french%20press%20finished%20pour.jpg"
          }
        
  ];

  return (
    <div className='barista'>
      <header>
        <nav className="logo-container">
          <img src="foodhub-logo.png" alt="logo" className="logo-1" />
        </nav>
        <nav>
          <ul className="nav-linkss">
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">About</a></li>
            <li><a href="./login.html">Log In</a></li>
            <li><Link to="/cartpage">Cart</Link></li>
          </ul>
        </nav>
      </header>

      <div className="logo">
        <img src="./bg-barista-main.png" alt="logo" className="logo1" />
      </div>

      <div className="row-container">
        {items.map((item, index) => (
          <div className="outlet-items" key={index}>
            <div className="wrap-container-main">
              <div className="wrap-container">
                <div className="wrap-container-img">
                  <img src={item.image} alt="" className="wrap-img" />
                </div>
                <div className="wrap-container-text">
                  <h4 className="wrap-name">{item.name}</h4>
                  <p className="wrap-name">₹{item.price}.00</p>
                  <button className="add-itm-btn" onClick={() => onAddToCart(item)}>
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CartPage cartItems={cartItems} />
    </div>
  );
};

export default Barista;
