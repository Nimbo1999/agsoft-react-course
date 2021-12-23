import ROUTES_CONSTANTS from '../constants/route';

import HomeContainer from './Home/Home';
import CategoryContainer from './Category/Category';

const routes = [
    {
        path: ROUTES_CONSTANTS.HOME,
        element: <HomeContainer />
    },
    {
        path: ROUTES_CONSTANTS.CATEGORIES,
        element: <h1>categories</h1>
    },
    {
        path: ROUTES_CONSTANTS.CATEGORY + ROUTES_CONSTANTS.TOKEN,
        element: <CategoryContainer />
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
