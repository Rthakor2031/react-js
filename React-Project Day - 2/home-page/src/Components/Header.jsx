import { FaSearch , FaShopify} from "react-icons/fa";
function Header()
{
    return(
        <div>
            <div className="header">
                <div className="logo">
                    <img src="https://www.shutterstock.com/image-vector/me-em-abstract-initial-monogram-260nw-2396586645.jpg" alt="" height={120} width={170}/>
                </div>
            <nav>
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Footer</a></li>
                </ul>
            </nav>
                    <div className="icons">
                        <span className="st-icon"><FaSearch/></span>
                        <span className="nd-icon"><FaShopify /></span>
                    </div>
            </div>
        </div>
    )
}
export default Header