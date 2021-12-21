import { useEffect, useState } from 'react';
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { getCategoriesCollection } from '../../firebase';

const HomeContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setCategories(await getCategoriesCollection());
        })();
    }, []);

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    return (
        <div className="home-page-container">
            <section className="discover-section">
                <SectionHeader label="Discover products" />

                <div className="discover-content">
                    {categories.map(({ id, ...props }) => (
                        <CategoryBanner key={id} id={id} style={{ flex: '1 0 40%' }} {...props} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeContainer;
