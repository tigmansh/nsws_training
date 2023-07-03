import BookCard from "./BookCard";
export default function NonFiction({ NonFictionData }) {
  return (
    <div data-testid="books-nonfiction">
      <h1 data-testid="books-container-title">{"Non-Fiction Books"}</h1>

      <div className="books-container">
        {NonFictionData.map((book) => {
          return <BookCard {...book} />;
        })}
      </div>
    </div>
  );
}
