import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
      <Rings
        height="100"
        width="100"
        color="rgb(154 52 18)"
        radius="12"
        wrapperStyle={{
            position: 'absolute',
            top: '50%',
            right: '50%',
            transform: 'translate(50%, -50%)',
            opacity: 0.8,
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
  );
};

export default Loader;