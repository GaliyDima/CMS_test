import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home/Home";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";
import TabsPage from "./pages/Tabs/Tabs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tabs" element={<TabsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
