import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCategoryProducts } from '../../firebase';

const product = {
    id: '',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    name: '3 seater sofa belgrade',
    price: 1320.23,
    smallDescription: 'Host with warmth and good taste'
};

const Category = () => {
    const [products, setProducts] = useState([]);
    const { token } = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await getCategoryProducts(token);
            setProducts(response);
        };

        // getData();
    }, []);

    return (
        <div className="category-container">
            <main className="product-item">
                <div className="image-wrapper">
                    <img src={product.image} onLoad={() => console.log('Loaded!!!!')} />
                </div>

                <section>content</section>
            </main>
        </div>
    );
};

export default Category;
