function FavListItem({ item }) {
  return (
    <div className="card">
      <div className="gif">
        <img src={item.url} />
      </div>
      <div className="button">
        <button>Favorite</button>
      </div>
    </div>
  );
}

export default FavListItem;
