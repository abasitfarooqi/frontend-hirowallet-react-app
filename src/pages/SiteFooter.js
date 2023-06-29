import React, { useState } from "react";

const SiteFooter = () => {
    
  return (
    <footer className="footer mt-4">

        <div className="row">
            <div className="col-md-5">
                <div className="footer-logo">
                    <a href="index.html"><img src={process.env.PUBLIC_URL + 'logo-cleaned.png'} className="img-fluid" alt="Risidio" /></a>
                </div>
                <div className="company-desc">
                    <p>Risidio Marketplace is a decentralised marketplace to buy and sell NFTs and digital collectibles on the Bitcoin blockchain using Stacks.</p>
                </div>
            </div>
            <div className="col-md-7">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <h3 className="mt-2">NFT</h3>
                        <ul>
                            <a href="/mint-nft"><li>Your NFT</li></a>
                            <a href="/mint-nft"><li>Mint A File</li></a>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <h3 className="mt-2">How it works</h3>
                        <ul>
                            <a><li>Self Owned Indenty</li></a>
                            <a><li>Getting Testnet Stc</li></a>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <h3 className="mt-2">What we do</h3>
                        <ul>
                            <a><li>Get in Touch</li></a>
                            <a><li>Developers</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  );
};

export default SiteFooter;