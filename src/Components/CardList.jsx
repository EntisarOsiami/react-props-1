import Card from "./Cardf";
function CardList() {
  let cardsInfo = [
    {
      img: "https://images.pexels.com/photos/31449901/pexels-photo-31449901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Pink Tree",
      description: "a pink tree with flowers in spring",
      list: "Flowers",
      list2: "tress",
      list3: "spring",},
    
    {
      img: "https://images.pexels.com/photos/31701241/pexels-photo-31701241/free-photo-of-colorful-pink-and-beige-mediterranean-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Buildings & street",
      description: "a street with colorful buildings",
      list: "buildings",
      list2: "street",
      list3: "colorful",
    },
    {
      img: "https://images.pexels.com/photos/31008103/pexels-photo-31008103/free-photo-of-elegant-dessert-with-mimosa-flowers-and-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Coffee break",
      description: "coffee and dessert",
      list: "coffee",
      list2: "dessert",
      list3: "flowers",
    },
        {
      img: "https://images.pexels.com/photos/31940358/pexels-photo-31940358/free-photo-of-serene-spring-evening-with-blooming-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "evening flowers",
      description: "another pink tree with flowers in spring",
      list: "flowers",
      list2: "evening",
      list3: "spring",
    },
        {
      img: "https://images.pexels.com/photos/31747630/pexels-photo-31747630/free-photo-of-majestic-rock-formation-at-maruata-beach-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Ocean view",
      description: "cliffs and ocean",
      list: "sea",
      list2: "rocks",
      list3: "blue",
    },
  ];
   let cards =cardsInfo.map((card)=>{
    return (
      <Card
        img={card.img}
        title={card.title}
        description={card.description}
        list={card.list}
        list2={card.list2}
        list3={card.list3}
      />
    );
  });

  return <div className="cardContainer">{cards}</div>;
}

export default CardList;
