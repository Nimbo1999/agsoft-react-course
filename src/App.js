import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import routes from './routes';

function App() {
    return (
        <div className="main-application">
            <Header />

            <Routes>
                {routes.map(({ path, ...props }) => (
                    <Route key={path} path={path} {...props} />
                ))}
            </Routes>
        </div>
    );
}

export default App;
