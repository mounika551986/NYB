function Searchbar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Employee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "300px",
        padding: "10px",
        margin: "20px",
      }}
    />
  );
}

export default Searchbar;