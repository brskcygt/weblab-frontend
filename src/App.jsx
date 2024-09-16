import { ThemeProvider } from "@mui/material"
import { Home } from "./pages/Home/Home"
import { getTheme } from "./commons/Theme"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { trTR } from "@mui/x-date-pickers/locales";
import { Suspense, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./pages/AppLayout/AppLayout";
import { LatestNews } from "./pages/LatestNews/LatestNews";

function App() {
  const [mode, setMode] = useState('light');
  const theme = getTheme(mode);
  const handleToggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  

  return (
    <>
      <ThemeProvider theme={{...theme, handleToggleColorMode, lightMode: theme.palette.mode === 'light'}}>
        <LocalizationProvider
          dateAdapter={AdapterMoment}
          // adapterLocale="tr"
          // localeText={trTR.components.MuiLocalizationProvider.defaultProps.localeText}
        >
          <Suspense fallback={<div />}>
            <Routes>
              <Route element={<AppLayout />} >
                <Route element={<Home/>} path="/home"/>
                <Route element={<LatestNews />} path="latest-news"/>
                <Route element={<Navigate to="/home" />} path="*" />
              </Route>
            </Routes>
          </Suspense>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
