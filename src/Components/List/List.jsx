import Item from "../Item/Item"

function List({items}){
    
    const itemsMap = items.map((item)=> {
        return (
            <Item key={item.id} item={item}/>
        )
    });

    return(
        <div>
            <p>List</p>
            <ul>
                 {itemsMap}
            </ul>
           
        </div>
    )
}

export default List;