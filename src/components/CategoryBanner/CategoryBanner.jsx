const CategoryBanner = ({ id, image, name, style }) => (
    <div
        key={id}
        className="category-banner"
        style={{ backgroundImage: `url(${image})`, ...style }}
    >
        <footer>
            <p>{name}</p>
        </footer>
    </div>
);

export default CategoryBanner;
