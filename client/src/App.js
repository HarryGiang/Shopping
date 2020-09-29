import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import About from "./screens/AboutUs";
import CheckOutCart from "./screens/CheckOutCart";
import Contact from "./screens/Contact";
import HomeScreen from "./screens/HomeScreen";
import EditPasswordScreen from "./screens/MyAccount/EditPasswordScreen";
import MyAccountScreen from "./screens/MyAccount/MyAccountScreen";
import OrdersScreen from "./screens/MyAccount/OrdersScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import { PaymentCart } from "./screens/PaymentCart";
import RegistrationScreen from "./screens/RegistrationScreen";
import RegistrationScreen1 from "./screens/RegistrationScreen1";
import Shop from "./screens/Shop";
import Test from "./screens/Test";
import ViewDetailsScreen from "./screens/ViewDetailsScreen";

function App() {
  const { account } = useSelector((state) => state.myaccount);

  return (<>
    <BrowserRouter>
      {account.length !== 0 ? (
        <>
          {console.log("account", account)}
          <Route
            exact={true}
            path="/my-account/edit-password"
            component={EditPasswordScreen}
          />
          <Route
            exact={true}
            path="/my-account/orders"
            component={OrdersScreen}
          />

          <Route exact={true} path="/my-account" component={MyAccountScreen} />
        </>
      ) : (
        <Redirect to="/" />
      )}
      <Route path="/checkoutcart" component={CheckOutCart} />
      <Route path="/test" component={Test} />
      <Route path="/paymentcart" component={PaymentCart} />
      <Route path="/registrationscreen" component={RegistrationScreen} />
      <Route path="/registrationscreen1" component={RegistrationScreen1} />
      <Route
        path="/orderdetailsscreen/:id/:date"
        component={OrderDetailsScreen}
      />
      <Route path="/viewdetail/:id" component={ViewDetailsScreen} />
      {/*Okey*/}
      <Route path="/contact" component={Contact} />
      {/*Okey*/}
      <Route path="/shop" component={Shop} />
      <Route path="/about" component={About} />
      {/*Okey*/}
      <Route path="/" exact={true} component={HomeScreen} /> {/*Okey*/}
      {/* <Route component={PageNotFoundScreen} /> */}
    </BrowserRouter>
    {/* <!-- Load Facebook SDK for JavaScript --> */}
    
    </>
  );
}

export default App;
