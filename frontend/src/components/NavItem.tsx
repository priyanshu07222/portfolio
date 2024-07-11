import { Link } from "react-router-dom"


export const NavItem = (props:any) => {
  // console.log(items)
  return (
    <div>
        <ul>
          <li>
            <Link to={props.items.url}>{props.items.name}</Link>
          </li>
        </ul>
    </div>
  )
}
