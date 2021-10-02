// import { Link } from 'react-router-dom';
// import React, { useState } from "react";
// import { MdClose } from "react-icons/md"
// import { FiMenu } from "react-icons/fi"
// import { FavoriteSVGIcon, SearchSVGIcon } from 'react-md';

// const Navbar = () => {

//     const [navbarOpen, setNavbarOpen] = useState(false);
    
//     const handleToggle = () => {
//         setNavbarOpen(prev => !prev)
//     }

//     const closeMenu = () => {
//         setNavbarOpen(false)
//     }

//     return (
//         <nav className="navBar">
//             <button onClick={handleToggle}>
//                 {navbarOpen ? (
//                     <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
//                 ) : (
//                     <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
//                 )}
//             </button>
//             <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
//                 <li><Link className="nav-link" to="/" onClick={() => closeMenu()}>
//                     <SearchSVGIcon style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
//                 </Link></li>
//                 <li><Link className="nav-link" to="/" onClick={() => closeMenu()}>
//                     <FavoriteSVGIcon style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
//                 </Link></li>
//             </ul>
//         </nav>
//     );
// }
 
// export default Navbar;