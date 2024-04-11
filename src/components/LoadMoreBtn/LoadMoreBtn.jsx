import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={style.containerMore}>
      <button
        className={style.btnMore}
        type="button"
        onClick={() => {
          onLoadMore();
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
