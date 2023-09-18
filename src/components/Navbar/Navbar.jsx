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
        <nav className="bg-yellow-200 p-6">
          <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? 
                <AiOutlineClose></AiOutlineClose> 
                : <FiMenu></FiMenu>
                
            }
           
          </div>
          <ul className={`md:flex  duration-1000
            absolute md:static
            ${open ? 'top-16' : '-top-60'}
           bg-yellow-200 px-6`}>
            {
                routes.map(route => <Link key={route.id}
                route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default Navbar;