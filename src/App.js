import { BrowserRouter, Routes, Route } from "react-router-dom";


import SiteFooter from "./pages/SiteFooter";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import MintNFT from "./pages/MintNFT";
import CollectionPage from "./pages/CollectionPage";
import HowItWorks from "./pages/HowItWorks"
import AboutUs from "./pages/AboutUs"
import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCallVote";
// --
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
// -- Login
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="mint-nft" element={<MintNFT />} />
              <Route path="collection-page" element={<CollectionPage />} />
              <Route path="how-it-works" element={<HowItWorks />} />
              <Route path="about-risidio" element={<AboutUs />} />
              <Route exact path="/records" element={<RecordList />} />
              <Route path="/records/edit/:id" element={<Edit />} />
              <Route path="/records/create" element={<Create />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>


        <SiteFooter />  
    </div>
  );
}

export default App;
