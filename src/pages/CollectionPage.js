const CollectionPage = () => {
    return (
        <>
        <div className="collection-page text-center">
                <h3 className="collection-title">Collection Name</h3>

                <div className="collection-content">
                    <div className="collection-artist">
                        <img src={process.env.PUBLIC_URL + '/artist.png'} className="artist-img rounded-circle" alt="Artist Name" />
                        <h3 className="artist-title">Artist Name</h3>
                    </div>

                    <div className="collection-description d-grid gap-2 col-lg-4 col-sm-8 col-xs-4 mx-auto">
                        Description of the NFT / Collectable - Examples such the content of NFTs, specific themes of the
                        collection,
                        quotations by the creator,
                        the meaning behind the creation of this piece
                        <br />
                        <div className="collapse " id="collapseExample"><br />
                            Description of the NFT / Collectable - - - Examples such the content of NFTs, specific themes
                            of the collection, quotations by the creator, the meaning behind the creation of
                            this piece etc Description of the NFT / Collectable - Examples
                            such the content of NFTs, specific themes of the collection, quotations by the creator,
                            the meaning behind the creation of this piece etc Description of the NFT / Collectable -
                            Examples such the content of NFTs, specific themes of the collection, quotations by the creator,
                            the meaning behind the creation of this piece etc
                        </div>
                        <a className="text-center readmore-btn" data-bs-toggle="collapse" href="#collapseExample" role="button"
                            aria-expanded="false" aria-controls="collapseExample">
                            Readmore
                        </a>

                        <div className="collection-details text-center">
                            <div className="row">
                                <div className="col">
                                    <h5>Floor Price</h5>
                                    <p>2,835 STX</p>
                                </div>
                                <div className="col ">
                                    <h5>Owners</h5>
                                    <p>1,236</p>
                                </div>
                                <div className="col ">
                                    <h5>Items</h5>
                                    <p>2500</p>
                                </div>
                            </div>

                        </div>


                    </div>

                    
                    <div className="container">
                        <div className="artist-data">
                            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="items-tab" data-bs-toggle="tab"
                                        data-bs-target="#items-tab-pane" type="button" role="tab" aria-controls="items-tab-pane"
                                        aria-selected="true">Items</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="activity-tab" data-bs-toggle="tab"
                                        data-bs-target="#activity-tab-pane" type="button" role="tab"
                                        aria-controls="activity-tab-pane" aria-selected="false">Activity</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active mb-5" id="items-tab-pane" role="tabpanel"
                                    aria-labelledby="items-tab" tabindex="0">

                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-1">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-6.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-2">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-5.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-3">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-4.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-4">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-2.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                                
                                
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-1">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-7.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-2">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-2.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-3">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-1.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 item-4">
                                        <div className="product-box">
                                            <div className="prod-img">
                                                <img src={process.env.PUBLIC_URL + '/art-3.png'} className="rounded img-fluid w-100" alt="artwork title" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="prod-content">
                                                <h3 className="prod-title float-start m-0 p-0">Artwork</h3>
                                                <strong className="prod-fprice float-end m-0 p-0">20 STX</strong>
                                                <div className="clearfix"></div>
                                                <p className="float-start m-0 p-0">By <strong className="prod-artist">Artist Name</strong></p>
                                                <p className="float-end m-0 p-0"><strong className="prod-price">20$</strong></p>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>

                                <div className="nomore-collection ">
                                    <h3 className="fw-light">You've seen the all collection</h3>
                                    <button className="btn btn-dark btn-lg theme-btn me-2"><a href="#">Gallery</a></button>
                                    <button className="btn btn-dark btn-lg theme-btn-opposite"><a href="#">Got Back To Top</a></button>
                                </div>
                                
                                </div>
                                <div className="tab-pane fade mt-5 mb-5" id="activity-tab-pane" role="tabpanel" aria-labelledby="activity-tab"
                                    tabindex="0">
                                
                                    <h3>Put Data Here</h3>
                                
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
  };
  
  export default CollectionPage;
  