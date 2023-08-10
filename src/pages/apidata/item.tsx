const Item = ({item}) => {
    return (
      <>
        <h1>{item.title}</h1>
        <img src={item.image} alt={item.title} />
      </>
    );
  };
  
  export default Item;