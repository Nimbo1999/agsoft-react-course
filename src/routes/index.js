import ROUTES_CONSTANTS from '../constants/route';
import HomeContainer from './Home/Home';

const routes = [
    {
        path: ROUTES_CONSTANTS.HOME,
        element: <HomeContainer />
    },
    {
        path: ROUTES_CONSTANTS.CATEGORIES,
        element: <h1>Categories</h1>
    },
    {
        path: ROUTES_CONSTANTS.CATEGORY,
        element: <h1>Categorie</h1>
    },
    {
        path: ROUTES_CONSTANTS.CART,
        element: <h1>Cart</h1>
    },
    {
        path: ROUTES_CONSTANTS.SIGN_IN,
        element: <h1>Sign in</h1>
    },
    {
        path: ROUTES_CONSTANTS.SIGN_UP,
        element: <h1>Sign Up</h1>
    }
];

export default routes;
