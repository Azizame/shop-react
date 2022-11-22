export default function BasketItem(props){
    const {id, name, price, quantity, incrementQuantity, decrementQuantity} = props;
    

    return(
        <li className="collection-item">
            {name} x{quantity} = {price * quantity} <b>$</b>
            <span className="secondary-content">
                <button className="weves-effect weves-light btn btnq" 
                onClick={() => incrementQuantity(id)
                }>
                    <i className="material-icons left">exposure_plus_1</i>add
                </button>
                <button className="weves-effect weves-light btn btnq" onClick={() => decrementQuantity(id)} style={{marginLeft: 10, marginRight: 10}}>
                    <i className="material-icons left">exposure_minus_1</i>remove
                </button>
                <i className="material-icons basket-delete" onClick={() => props.removeFormBasket(id)}>delete_forever</i>
            </span>
        </li>
    )
} 