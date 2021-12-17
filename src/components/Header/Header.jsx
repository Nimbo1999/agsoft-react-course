import { Component } from 'react';
import { Link } from 'react-router-dom';

import ListItem from '../ListItem/ListItem';
import ShoppingBag from '../../assets/icons/ShoppingBag';
import ROUTES_CONSTANTS from '../../constants/route';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menus: []
        };
    }

    componentDidMount() {
        this.setState({
            menus: [
                {
                    label: 'Products',
                    to: ROUTES_CONSTANTS.CATEGORIES,
                    key: 'Products'
                },
                {
                    label: 'Shopping Cart',
                    to: ROUTES_CONSTANTS.CART,
                    key: 'Shopping Cart'
                },
                {
                    label: 'Sign in',
                    to: ROUTES_CONSTANTS.SIGN_IN,
                    key: 'Sign in'
                }
            ]
        });
    }

    render() {
        const { menus } = this.state;

        return (
            <header>
                <Link to={ROUTES_CONSTANTS.HOME}>
                    <ShoppingBag />
                    <h2>Nimbo Store</h2>
                </Link>

                <nav>
                    <ul>
                        {menus.map(({ key, ...props }) => (
                            <ListItem key={key} {...props} />
                        ))}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
