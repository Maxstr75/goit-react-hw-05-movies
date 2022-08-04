import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';


// const createAsyncComponent = path => {
//   const HomePage = path.match(/[a-zA-Z]+$/)[0];
//   return lazy(() =>
//     import(path).then(module => ({ ...module, default: module[HomePage] }))
//   );
// };

// const HomePage = createAsyncComponent('pages/HomePage');

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'first baseline',
        alignItems: 'left',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
