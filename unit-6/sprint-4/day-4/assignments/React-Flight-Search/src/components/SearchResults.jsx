const SearchResults = ({ filter }) => {
  return (
    <table>
      {/* add columnsheadings */}
      <thead>
        <tr>
          <td>DEPARTURE</td>
          <td>DURATION</td>
          <td>ARRIVAL</td>
          <td>PRICE</td>
        </tr>
      </thead>

      <tbody data-testid="flight-results">
        {filter.map((item) => (
          <tr>
            <td>{item.departure}</td>
            <td>{item.duration}</td>
            <td>{item.arrival}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
