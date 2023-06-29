import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header className="site-header">
      <nav className="navbar navbar-expand-lg  bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" >
                    <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/logo-1.png'} className="logo-one" alt="Risidio Collection" />
                    <img src={process.env.PUBLIC_URL + '/logo-2.png'} className="logo-two d-none" alt="Risidio Marketplace"/>
                    </Link>
                </a>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="/records/create">Create Record</Link></a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="collection-page">Explore</Link></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                               <Link to="collection-page"> Featured Collections</Link>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" ><Link to="collection-page">  Featured Collections </Link></a></li>
                                <li><a className="dropdown-item" href="#">All Collections</a></li>
                            </ul>
                        </li>
                    </ul>

                    <hr className="d-lg-none divider" />

                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page"><Link to="/how-it-works">How it Works</Link></a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link " aria-current="page"><Link to="/about-risidio">About Risidio</Link></a>
                        </li>
                        <li className="nav-item custom-button me-4">
                            <a className="nav-link active m-0" aria-current="page"><Link to="/mint-nft">Mint NFT</Link></a>
                        </li>
                        
                        <li className="nav-item custom-button me-4 d-none">
                            <a className="nav-link active m-0" aria-current="page"><Link to="/mint-nft">Register with Hiro Wallet</Link></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>

      <Outlet />
    </>
  )
};

export default Layout;
