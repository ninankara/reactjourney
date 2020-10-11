import React from "react";
import Footer from "./Footer";
// import "bulma";
import Header from "./Header";


class Banner extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <section class="hero is-white is-fullheight">
          
        <div class="hero-body is-primary">
          <div class="container has-text-centered">
            <h1 class="title">Hello, Bulma!</h1>
            <h2 class="subtitle">This is react app feat. Bulma</h2>
          </div>
        </div>
     
      </section>
      <Footer />
      </div>
        
      
    );
  }
}

export default Banner;
