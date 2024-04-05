import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-xl font-semibold">All Categories</h1>
            {
                categories.map(category => <Link className="block p-4 text-xl font-medium text-gray-500 hover:bg-gray-200 rounded-xl hover:font-semibold" to={`/category/${category.id}`} key={category.id}>{category.name}</Link> )
            }
        </div>
    );
};

export default LeftNav;