import { Watch} from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <Watch
        height="120"
        width="120"
        radius="48"
        color="#e3ce0c"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderOverlay>
  );
};
