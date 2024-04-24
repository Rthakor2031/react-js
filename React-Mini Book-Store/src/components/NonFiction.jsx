import NonFictionData from '../nonfiction.json'
import BookCard from './BookCard';
export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Books</h1>

      <div className="books-container" style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)"}}>
      {NonFictionData.map((e)=><BookCard author={e.author} img={e.img} price={e.price} title={e.title} year={e.year}/>)};
      </div>
    </div>
  );
}
