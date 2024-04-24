export default function BookCard({author , img , price , title , year}) {
  return (
    <div data-testid="book-card" style={{border:"" , padding:"15px" , boxShadow:"0px 7px 6px rgba(0,0,0,#e3e2db)"}}>
      <img src={img} alt={title} height={200} width={150} style={{border:"3px solid white"}}/>
      <b>
        <div data-testid="book-card-title">
          {title}
          <span>{year}</span>
        </div>
      </b>
      <div data-testid="book-card-author">{author}</div>
      <div data-testid="book-card-price">{price}</div>
    </div>
  );
}
