import BookCard from '../components/BookCard';
import Fictiondata from "../fiction.json"
function Fiction(){
  return(
    <div>
      <h1>Fictional Books</h1>
      <div className="Books-container" style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)"}}>
        {Fictiondata.map((e)=><BookCard author={e.author} img={e.img} price={e.price} title={e.title} year={e.year}/>)};
      </div>
    </div>
  )
}
export default Fiction;