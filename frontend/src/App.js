import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import { LanguageProvider } from "@/lib/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#ffffff",
              color: "#424240",
              border: "1px solid #e5e2dc",
              borderRadius: "4px",
              fontFamily: "Manrope, sans-serif",
            },
          }}
        />
      </LanguageProvider>
    </div>
  );
}

export default App;
