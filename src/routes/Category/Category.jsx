import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCategoryProducts } from '../../firebase';

const Category = () => {
    const [products, setProducts] = useState([]);
    const { token } = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await getCategoryProducts(token);
            setProducts(response);
        };

        getData();
    }, []);

    return (
        <div className="category-container">{products.map(product => JSON.stringify(product))}</div>
    );
};

export default Category;
