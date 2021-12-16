import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import ListItem from './components/ListItem/ListItem';
import ShoppingBag from './assets/icons/ShoppingBag';

import routes from './routes';

import { categoriesDocs } from './firebase';

function App() {
    useEffect(() => {
        const test = async () => {
            const result = await categoriesDocs;
            console.log({ result });
            result.forEach(doc => console.log({ doc: doc.data() }));
        };

        test();
    }, []);

    return (
        <div className="main-application">
            <header>
                <div>
                    <ShoppingBag />
                    <h2>Nimbo Store</h2>
                </div>

                <nav>
                    <ul>
                        <ListItem label="Products" />
                        <ListItem label="Shopping Cart" />
                        <ListItem label="Sign in" />
                    </ul>
                </nav>
            </header>

            <Routes>
                {routes.map(props => (
                    <Route {...props} />
                ))}
            </Routes>
        </div>
    );
}

export default App;
