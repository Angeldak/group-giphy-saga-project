import HomeList from '../../HomeList/HomeList';
import SearchForm from '../../SearchForm/SearchForm';
function Home() {
  return (
    <div className="homeFormDiv">
      <h2>Home</h2>
      <SearchForm />
      <HomeList />
    </div>
  )
}

export default Home;
