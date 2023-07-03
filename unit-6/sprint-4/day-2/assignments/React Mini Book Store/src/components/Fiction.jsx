import BookCard from "./BookCard";
export default function Fiction({ fictionData }) {
  return (
    <div data-testid="books-fiction">
      <h1 data-testid="books-container-title">{"Fictional Books"}</h1>

      <div className="books-container">
        {fictionData.map((book) => {
          return <BookCard {...book} />;
        })}
      </div>
    </div>
  );
}
