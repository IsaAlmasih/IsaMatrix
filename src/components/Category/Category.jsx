import Link from "next/link";

import "./Category.css";


const Category = ({ id, categoryName, image, href }) => {
  return (
    <div className="category-item" key={id}>
      <Link href={href} className="category-item__link">
        <p className="category-item__heading">{categoryName}</p>
        <img
          src={image.src}
          alt={categoryName}
          className="category-item__image"
        />
      </Link>
    </div>
  );
};

export default Category;
