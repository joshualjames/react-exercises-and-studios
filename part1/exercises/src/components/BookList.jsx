export default function BookList() {
   let pageTitle = "Here Are Some Books";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgmBs4BMkCQFKqT18G2NiCw6RsaX8fPq21w&usqp=CAU";
   let book2 = "https://m.media-amazon.com/images/I/819tY-gDcWL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://books.google.com/books/publisher/content?id=chqhDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1i-ROemMHgfhlK--_0xrnXvULprg&w=1280";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height={250} width={180} alt="A Memory of Light cover image" />
         <img src={book2} height={250} width={180} alt="The Ballad of Songbirds and Snakes cover image" />
         <img src={book3} height={250} width={180} alt="Cemetery Boys cover image" />
      </div>      
   );
}