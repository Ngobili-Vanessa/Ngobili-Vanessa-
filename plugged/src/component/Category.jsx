import { Link } from "react-router-dom";
import "./Category.css";

const categories = [
    {
        name: "Audio",
        description: "Earbuds, speakers, and studio-grade headphones for every moment.",
        image: "/images-featured/b74469f61562f7379f3e6c4dfcf159b2.jpg",
        badge: "Trending",
    },
    {
        name: "Computing",
        description: "Laptops, tablets, and accessories built for work and play.",
        image: "/images-featured/IMG-20260615-WA0010.jpg",
        badge: "Top picks",
    },
    {
        name: "Mobiles",
        description: "Flagship phones, premium cases, and fast charging essentials.",
        image: "/images-featured/IMG-20260615-WA0032.jpg",
        badge: "New arrivals",
    },
    {
        name: "Smart Home",
        description: "Smart speakers, home assistants, and connected appliances.",
        image: "/images-featured/IMG-20260616-WA0019.jpg",
        badge: "Popular",
    },
    {
        name: "Gaming",
        description: "Consoles, controllers, and immersive gear for every gamer.",
        image: "/images-featured/IMG-20260616-WA0024.jpg",
        badge: "Hot deals",
    },
    {
        name: "Wearables",
        description: "Smart watches and fitness tech to keep you moving.",
        image: "/images-featured/IMG-20260615-WA0034.jpg",
        badge: "Fresh picks",
    },
];

function Category() {
    return (
        <section className="category-page">
            <div className="category-hero">
                <div>
                    <p className="eyebrow">Shop by category</p>
                    <h1>Find the perfect tech for your lifestyle.</h1>
                    <p>
                        Browse curated categories filled with premium gadgets, smart devices,
                        and everyday essentials.
                    </p>
                    <Link to="/search" className="category-cta">
                        Explore products
                    </Link>
                </div>
            </div>

            <div className="category-grid">
                {categories.map((item) => (
                    <article className="category-card" key={item.name}>
                        <img src={item.image} alt={item.name} />
                        <div className="category-card-body">
                            <span className="category-badge">{item.badge}</span>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <Link to="/search">Shop now</Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Category;
