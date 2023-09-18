import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [open,setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'About', path: '/about', exact: true },
        { id: 3, name: 'Contact', path: '/contact', exact: true },
        { id: 4, name: 'Products', path: '/products', exact: true },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      

    return (
        <nav>
          <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? 
                <AiOutlineClose></AiOutlineClose> 
                : <FiMenu></FiMenu>
                
            }
           
          </div>
          <ul className="md: flex">
            {
                routes.map(route => <Link key={route.id}
                route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default Navbar;