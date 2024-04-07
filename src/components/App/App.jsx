import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar />
      <Loader />
      <ImageGallery />
      <ErrorMessage />
      <LoadMoreBtn />
      <ImageModal />
    </div>
  );
};

export default App;
