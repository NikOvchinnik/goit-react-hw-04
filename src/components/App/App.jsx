import { useState, useEffect } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) return;
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        setTotalPage(data.total_pages);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const onSearch = (searchValue) => {
    setImages([]);
    setPage(1);
    setSearchQuery(searchValue);
  };

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
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
