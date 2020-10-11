import React from 'react';
// import 'bulma';

class Header extends React.Component{
    render(){
        return(
            <nav class="navbar is-primary is-fixed-top">
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-light">
                                <span class="icon">
                                    <i class="fab fa-twitter"></i>
                                </span>
                                <span><strong>Tweet</strong></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;