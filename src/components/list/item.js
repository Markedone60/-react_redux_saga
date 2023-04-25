import { Link } from "react-router-dom";
import { servicesinitState } from '../../redux/actionCreators';

export default function Item({obj, dispatch}) {

  const handleInit = e => dispatch(servicesinitState());

  return(
    <li className="item" data-id={obj.id}>
      <Link className="link" to={`/${obj.id}/details`} onClick={handleInit} >
        <span className="item-name">{obj.name}</span>
        <span className="item-price">{obj.price}</span>
      </Link>
    </li>
  )
}
