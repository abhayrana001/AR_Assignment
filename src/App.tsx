import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ReactBlog from './Pages/ReactBlog';
import TypescriptBlog from './Pages/TypescriptBlog';
import CssVsTailwindBlog from './Pages/CssVsTailwindBlog ';
import HadoopBlog from './Pages/HadoopBlog';
import StateManagementBlog from './Pages/StateManagementBlog';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog/react-tips-tricks" element={<ReactBlog />} />
      <Route path="/blog/why-typescript" element={<TypescriptBlog />} />
      <Route path="/blog/css-vs-tailwind" element={<CssVsTailwindBlog />} />
      <Route path="/blog/hadoop-ecosystem" element={<HadoopBlog />} />
      <Route path="/blog/state-management-react" element={<StateManagementBlog />} />
    </Routes>
  );
};

export default App;
