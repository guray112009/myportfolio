import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
