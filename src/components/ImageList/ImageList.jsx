import ImageListItem from "../ImageListItem/ImageListItem";

function ImageList({ list }) {
  return (
    <div className="container">
      {list.map((item, index) => (
        <li key={index}>Item</li>
      ))}
    </div>
  );
}

export default ImageList;
