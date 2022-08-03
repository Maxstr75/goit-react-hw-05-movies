import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
