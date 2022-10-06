function CategoryListItem({ item }) {
  return (
    <>
      <input value={item.name} type="radio" name="categories" id={item.name} />
      <label htmlFor={item.name}>{item.name}</label>
    </>
  );
}

export default CategoryListItem;
