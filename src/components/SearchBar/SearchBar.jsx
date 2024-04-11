import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Your form is empty!");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchValue = form.elements.name.value.trim();
    if (searchValue === "") {
      notify();
      return;
    }
    onSubmit(searchValue);
    form.reset();
  };

  return (
    <header>
      <Toaster />
      <form className={style.headerForm} onSubmit={handleSubmit}>
        <input
          className={style.headerInput}
          name="name"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.headerBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
