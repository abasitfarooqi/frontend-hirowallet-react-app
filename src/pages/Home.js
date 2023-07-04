import ConnectWallet from "../components/ConnectWallet";
import ContractCallVote from "../components/ContractCallVote";

const Home = () => {
  return (
    <>
    <div className="site-page mt-3">
      <div className="text-center">
        <h3>Home</h3>
        <div className="text-center">
            {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
            <ConnectWallet />

            {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
            <ContractCallVote />
        </div>
      </div>
    </div>
    </>
  )
  
};

export default Home;
