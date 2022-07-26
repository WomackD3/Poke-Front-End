import { NavLink } from 'react-rrouter-dom'

export default function Nav() {
  
  return (

    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      <div>
          <NavLink to="/pokemon">Pokemon</NavLink>
        </div>
        </div>
    </nav>
  )
}