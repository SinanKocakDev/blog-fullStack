import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Dashboard from "./components/Dashboard";
import Board from "./components/pages/Board"
import Create from "./components/pages/Create";
import Edit from "./components/pages/Edit";
import DetailPost from "./components/pages/DetailPost";
import Error from "./components/pages/Error";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/posts/:id" element={<DetailPost />} />
          <Route path="*" element={<Error />} />          
        </Route>

        
        

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Board />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
