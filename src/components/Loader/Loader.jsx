import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="rgb(28, 28, 174)"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
