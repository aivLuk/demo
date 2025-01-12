import { Home, Task } from './pages';
import { Route, Routes } from 'react-router-dom';
import { MainLayout, HeaderLayout } from './layouts';
import { BasketProvider } from './context';

function App() {
  return (
    <BasketProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HeaderLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/task" element={<Task />} />
        </Route>
      </Routes>
    </BasketProvider>
  );
}

export default App;
