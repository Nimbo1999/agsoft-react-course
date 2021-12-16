import ListItem from './components/ListItem/ListItem';
import ShoppingBag from './assets/icons/ShoppingBag';

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
        </div>
    );
}

export default App;
