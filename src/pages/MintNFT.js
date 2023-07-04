import ConnectWallet from "../components/ConnectWallet";
import ContractCallVote from "../components/ContractCallVote";
const MintNFT = () => {
    return (
        <>
        <div className="site-page">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-5">
                    <h3 className="text-center mt-4">Mint an NFT</h3>
                    {/* <img id="nftImage" src="images/art-1.png" alt="NFT Image" onclick="handleNFTImageClick()">  */}
                    <form id="mintForm">
                        <div>
                            <label for="nftTitle">NFT Title:</label>
                            <input type="text" id="nftTitle" className="form-control" name="nftTitle" required />
                        </div>
                        <div>
                            <label for="nftDescription">NFT Description:</label>
                            <textarea id="nftDescription"  className="form-control" name="nftDescription" rows="4" required></textarea>
                        </div>
                        <div>
                            <label for="nftImage">NFT Image:</label>
                            <input type="file" className="form-control" id="nftImage" name="nftImage" required />
                        </div>
                        <div className="text-center m-2">
                            <button type="submit" className="btn btn-dark theme-btn">Mint NFT</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        
        
            
            <div className="text-center">
                {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
                <ConnectWallet />

                {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
                <ContractCallVote />
            </div>
        </div>
        </div>
        </>
    );
  };
  
  export default MintNFT;
  