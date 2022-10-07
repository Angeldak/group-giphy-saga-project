import HomeList from '../../HomeList/HomeList';
import SearchForm from '../../SearchForm/SearchForm';
function Home() {
  return (
    <div className="homeFormDiv">
      <SearchForm />
      <HomeList />
    </div>
  )
}

export default Home;
