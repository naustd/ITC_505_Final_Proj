import Shop from "../components/Shop";
export const ProductHome = () => {
  const products = [
    {
      id: 1,
      name: "Tomatoes",
      price: 12.5,
      image: "/assets.images/tomatoes.png",
    },
    {
      id: 2,
      name: "Carrot",
      price: 10.5,
      image: "/assets.images/carrot.png",
    },
    {
      id: 3,
      name: "Cabbage",
      price: 9.5,
      image: "/assets.images/cabbage.png",
    },
    {
      id: 4,
      name: "Chillies",
      price: 4.5,
      image: "/assets.images/chillies.png",
    },
    {
      id: 5,
      name: "Onions",
      price: 8.5,
      image: "/assets.images/onions.png",
    },
    {
      id: 6,
      name: "Mangoes",
      price: 6.5,
      image: "/assets.images/mango.png",
    },
  ];
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <Shop key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductHome;
