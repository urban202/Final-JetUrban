import React from 'react';
import './Utilities.css';

const Utilities = () => {
  return (
    <div id="p-utilities" className="container-free">

      {/* Security Notice */}
      <div className="notice-container">
        <div className='solid'></div>
        <br /><br /><br />
        <h2>As A Security Measure</h2>
        <p>
          Jet Urban Clothing admin locked the OpenSea account @urbanwarriors wallet address.
        </p>
        <h6>0x13E051C962Ed2870F9121bF5F827F653355CA10D</h6>
        <p>
          If you own any from this collection you will not be able to buy, sell, or transfer!
        </p>
        <br />
        <h2>
          All previous holders of the Golden Boy collection will be airdropped the NFTs once minting from <br />
          (official name & link to this site) goes live.
        </h2>
      </div>

      {/* Utilities Section */}
      <div className='solid'></div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>Utilities</h1>
      <h2>10% to 15% OFF</h2>
      <h3>
        <br />On all merchandise EXCEPT for NEW RELEASES.
        <br /><br />
        New Releases with wearable NFTs.
      </h3>
      <h6>(Discounts depend on traits.)</h6>
      <br /><br />

      {/* Utility Cards */}
      <ul className="cards">

        <li className="card">
          <div>
            <h4>Voting Rights</h4>
          </div>
        </li>

        <li className="card">
          <div>
            <h4>GOLDEN BOY OG ROLES</h4>
            <p>
              Holders of the Golden Boy collection will get an OG role that allows them to mint the next generation at a discounted price and vote on changes in the community.
            </p>
          </div>
        </li>

        <li className="card">
          <div>
            <h4>EARLY ACCESS</h4>
            <p>
              Get the drop on the latest NFTs, Jet Urban Clothing, and Urban Warriors merch 15–30 days before the official 🚀 launch date.
            </p>
          </div>
        </li>

        <li className="card">
          <div>
            <h4>Whitelist for 2nd Gen</h4>
          </div>
        </li>

      </ul>

      {/* Golden Boy Battle Zone */}
      <div>
        <li className="card">
          <div>
            <h5>Golden Boy Battle Zone</h5>
            <div className="ut-battlezone">

              <p className="column-center">
                The weight classes include: featherweight, lightweight, middleweight, and heavyweight.
                The winner will be randomized.
              </p>

              <p className="column-left">
                Your weight class will depend on the value of your NFT and token holdings.
                You will not be able to box anyone outside of your weight class.
              </p>

              <p className="column-right">
                Wage your Golden Boy or Warriors NFTs in the Warriors Stadium — in the ring.
              </p>

            </div>
          </div>
        </li>
      </div>

    </div>
  );
};

export default Utilities;
