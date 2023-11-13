import Items from "./Items";

const Fooditems=({items})=>{

    return(
        <ul className="list-group list-group-flush">
          {items.map((items)=>(
            <Items key={items} Items={items}/>
          ))}
        </ul>

    );
   
};

export default Fooditems;