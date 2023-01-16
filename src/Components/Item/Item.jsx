import "./Item.styles.css"

function Item( {item}) {

    return (
        <li className="wrapper">
            <p>
                {item.name}
            </p>
        </li>
    );

}

export default Item;