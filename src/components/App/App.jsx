import { useState } from "react";
import { fetchImages } from "../../api";
import style from "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [searchUser, setSearchUser] = useState(null);

  const onSearch = async (searchValue) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      setSearchUser(searchValue);
      const data = await fetchImages(searchValue);
      setTotalPage(data.total_pages);
      setImages(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onLoadMore = async () => {
    try {
      setLoading(true);
      setPage((prev) => {
        return (prev += 1);
      });
      const data = await fetchImages(searchUser, page + 1);
      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  function onOpenModal(img) {
    setModalIsOpen(true);
    setModalImg(img);
  }

  function onCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={style.container}>
      <SearchBar onSubmit={onSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {totalPage > page && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {modalIsOpen && (
        <ImageModal
          modalImg={modalImg}
          modalIsOpen={modalIsOpen}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
};

export default App;
