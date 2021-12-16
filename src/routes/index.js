const routes = [
    {
        path: '/',
        element: <h1>Home page</h1>
    },
    {
        path: '/categories',
        element: <h1>Categories</h1>
    },
    {
        path: '/categories/:token',
        element: <h1>Categorie</h1>
    },
    {
        path: '/cart',
        element: <h1>Cart</h1>
    },
    {
        path: '/signin',
        element: <h1>Sign in</h1>
    },
    {
        path: '/signup',
        element: <h1>Sign Up</h1>
    }
];

export default routes;
