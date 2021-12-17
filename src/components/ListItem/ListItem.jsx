import { Link } from 'react-router-dom';

const ListItem = ({ label, to }) => {
    return (
        <li className="list-item">
            <Link to={to}>{label}</Link>
        </li>
    );
};

export default ListItem;
