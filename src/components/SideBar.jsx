// import React, { useState } from 'react';
// import style from "../styles/SideBar.module.css";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={style.container}>
//       {/* Toggle Button */}
//       <button className={style.toggleButton} onClick={toggleSidebar}>
//         &#9776;
//       </button>

//       {/* Sidebar */}
//       <div className={`${style.sidebar} ${isOpen ? style.open : ''}`}>
//         <button className={style.closeButton} onClick={toggleSidebar}>
//           &times;
//         </button>
//         <nav className={style.menu}>
//           <a href="#" className={style.menuItem}>Sign Up</a>
//           <a href="#" className={style.menuItem}>Log In</a>
//           <a href="#" className={style.menuItem}>Create a Business Account</a>
//           <a href="#" className={style.menuItem}>Add Your Restaurant</a>
//           <a href="#" className={style.menuItem}>Sign Up to Deliver</a>
//         </nav>

//         <div className={style.appLinks}>
//           <p>There's more to love in the app:</p>
//           <div className={style.storeLinks}>
//             <a href="#" className={style.storeItem}>iPhone</a>
//             <a href="#" className={style.storeItem}>Android</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
