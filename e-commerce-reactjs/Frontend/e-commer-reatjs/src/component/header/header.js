import React,{useState} from "react"
import "./header.css"
import CartShoppin from "../../asset/sprite/sprite.svg";
import {categoryData} from "./hearder-data" 
import { BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom"


function Header(){

    const [sidebar, setSideBar]=useState(true)
    const [subMenu,setSubmenu] = useState("ul-submenu");
    const [click, setClick] = useState(false)
    const [openHamburger, setOpenHamburger] = useState(false)

    // <li onClick={openSubMenuHamburguer}>CATEGORIA ▼</li>
    // <ul className={subMenuCategory}>


    const opneMenuHamburguesas = () =>{
         setOpenHamburger(!openHamburger)
    }
   

  const  openSubmenu = (e) => {
        setSubmenu("ul-submenu-show")
        console.log("aca estoy") 
    }
    const closeSubMenu = (e) =>{
        console.log("eh salido")
       setSubmenu("ul-submenu")
        e.stopPropagation();
    }
    const openSubMenuHamburguer = (e) =>{
       setClick(!click)
    }
    const cerrarSubMenu = () =>{
        
        setOpenHamburger(false)
    }
  
    return(
    
        <>
  
         <header className="header">

   <div className="navigation">
       <div className="container">
           <nav className="nav">
               <div className="nav__hamburger" onClick={opneMenuHamburguesas}>
                     <svg>
                       <use xlinkHref={CartShoppin+"#icon-menu"}> z

                       </use>
                     </svg>
               </div>
               <div className="nav__logo">
                   <Link to="/#" className="scroll-link">PHONE</Link>
               </div>
               <div className={ sidebar ? 'nav__menu' : 'nav__menu open'}>
                   <div className= "menu__top open">
                       <span className="nav__category">
                           PHONE
                       </span>
                       <Link  className="toggle__close">
                           <svg>
                               <use xlinkHref={CartShoppin + "#icon-cross"}></use>
                           </svg>
                    </Link>
                   </div>
                   <ul className="nav__list">
                
                        
                    <li className="nav__item" key="home" >
                        <Link  to="/#" className="nav__link scroll-link">HOME</Link>
                    </li>
                  
                    <li className="nav__item category" key="categoria" onMouseLeave={closeSubMenu}  onMouseEnter={openSubmenu} >
                        <Link  to="/#" className="nav__link scroll-link category"><a>Categoria▼</a></Link>
                    
                        
                    </li>
                    <li className="nav__item" key="blog" >
                        <Link  to="/#" className="nav__link scroll-link">Blog</Link>
                    </li>
                    <li className="nav__item" key="contacto" >
                        <Link  to="/#" className="nav__link scroll-link">Contacto</Link>
                    </li>
 
    
             
                </ul>
               </div>
           
        {/* ----------------Iconos header------------------------- */}
              
               <div className="nav__icons">

                <Link to="/#" className="icon__item">
                    <svg>
                        <use xlinkHref={CartShoppin +"#icon-user"}></use>
                       </svg>
                </Link>
                <Link to="/#" className="icon__item">
                    <svg>
                        <use xlinkHref={CartShoppin + "#icon-search"}></use>
                       </svg>
                </Link>
                <Link to="/#" className="icon__item">
                    <svg>
                        <use xlinkHref={CartShoppin + "#icon-shopping-basket"}></use>
                       </svg>
                       <span id="cart__total">0</span>
                </Link>
               </div>
           </nav>
       </div>
            {/* ----------------Iconos header------------------------- */}
   </div>

  
    </header>
    <ul className={subMenu} onMouseEnter={openSubmenu} onMouseLeave={closeSubMenu}>
                              {categoryData.map((item,index)=>{return(
                               <div className="box__sub__menu" key={item.categoria} >
                                <div className="sub__menu">
                                    <div className="flex__li">
                              <li  className="item-submenu">{item.categoria}</li>
                              </div>
                              </div>
                              </div>
                              )})}
                              
                          </ul>
        <div className={openHamburger ? "menu-hamburguesa": "menu-hamburguesa-close" }>
        <ul>
        <span className="close-menu-hamburguesa" onClick={cerrarSubMenu}> X </span>
            <li><h1>HOME </h1> </li>
            <li onClick={openSubMenuHamburguer} >CATEGORIA ▼</li>
                    <ul className={click ? "item-submenu-hamburger-open": "item-submenu-hamburger"}>
                    {categoryData.map((item,index)=>{return(
                              <Link  to="/#" key={item.categoria}>
                              <li >{item.categoria}</li>
                              </Link>
                              )})}
                    </ul>
            <li>BLOG</li>
            <li>CONTACTENOS</li>
            
        </ul>

        </div>
       

        </>
    )}



    export default Header;
