import { RotatingLines } from "react-loader-spinner";

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'50vh',background:'#fff'}}>
    <RotatingLines
      visible={true}
      height="30"
      width="30"
      color="grey"
      strokeWidth="3"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;