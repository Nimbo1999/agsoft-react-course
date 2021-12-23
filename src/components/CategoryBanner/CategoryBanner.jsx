import { useNavigate } from 'react-router-dom';

import ROUTES_CONSTANTS from '../../constants/route';

const CategoryBanner = ({ id, image, name, style }) => {
    const navigate = useNavigate();

    const onClick = () => navigate(ROUTES_CONSTANTS.CATEGORY + '/' + id);

    return (
        <div
            key={id}
            className="category-banner"
            style={{ backgroundImage: `url(${image})`, ...style }}
            onClick={onClick}
        >
            <footer>
                <p>{name}</p>
            </footer>
        </div>
    );
};

export default CategoryBanner;
