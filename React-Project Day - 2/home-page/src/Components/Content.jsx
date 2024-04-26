import { FaStar } from "react-icons/fa"
function Content(){
    return(
        <div>
            <div className="box-container">
                <div className="out-boxes">
                    <img src="https://bizweb.dktcdn.net/100/208/222/products/235317029-284156586812890-7054295645539018896-n.jpg" alt="" height={300} width={300}/>
                    <hr />
                    <h4>Dior Sauvage</h4>
                    <span>$100.00 /<FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar/> </span>
                </div>
                <div className="out-boxes">
                    <img src="https://i.ebayimg.com/images/g/fZ8AAOSwlodlOdIc/s-l400.jpg" alt="" height={300}/>
                    <hr />
                    <h4>Versace V-Vertical</h4>
                    <span>$200.00 / <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar /></span>
                </div>
                <div className="out-boxes">
                    <img src="https://techcrunch.com/wp-content/uploads/2022/10/CMC_3762.jpg" alt="" height={290} width={300}/>
                    <hr />
                    <h4>Google Pixel 7 Or 7pro</h4>
                    <span>$800.00 / <FaStar style={{color:"yellow"}} /> <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/> <FaStar style={{color:"yellow"}}/></span>
                </div>
            </div>
        </div>
    )
}
export default Content