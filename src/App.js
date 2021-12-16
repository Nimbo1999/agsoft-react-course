import { Routes, Route } from 'react-router-dom';

import ListItem from './components/ListItem/ListItem';
import ShoppingBag from './assets/icons/ShoppingBag';

import routes from './routes';

function App() {
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
