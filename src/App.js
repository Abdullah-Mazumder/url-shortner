import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Edit from "./pages/Edit";
import Navbar from "./components/Navbar";
import { useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "./pages/Link";

function App() {
  const [mode, setMode] = useState("dark");

  let theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  theme = responsiveFontSizes(theme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <BrowserRouter>
          <Navbar mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/:id" element={<Link />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
