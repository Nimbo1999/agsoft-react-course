import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import routes from './routes';

import { categoriesDocs } from './firebase';

function App() {
    useEffect(() => {
        const test = async () => {
            const result = await categoriesDocs;
            console.log({ result });
            result.forEach(doc => console.log({ doc: doc.data() }));
        };

        // test();
    }, []);

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
