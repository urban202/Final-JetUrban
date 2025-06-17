import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="p-about" className="container-about">

      {/* Vision Section */}
      <div>
        <h1>Vision</h1>
        <p className='p-long'>
          The vision is to bring awareness and donate to kids in foster care, group homes, and non-profits that
          are geared towards mental health awareness, using Blockchain Technology, Smart Contracts, Fashion, and NFTs.
          <br /><br />
        </p>

        <h4>Also to use NFTs to create inclusivity within:</h4>

        <h6>Voting</h6>
        <h6>Your Shopping Experience</h6>
        <h6>Events Access</h6>
        <h6>Upgrading The Utility Ecosystem</h6>
        <h6>Augmented Reality</h6>
      </div>

      {/* Mission Section */}
      <div className="columnA-left">
        <h1>Mission</h1>
        <p className='p-long'>
          The mission is to teach people how to invest and understand the Web3 space, so we can collectively
          give back to kids in foster care, group homes, and orphanages through NFT sales and blockchain development.
          <br /><br />
          We also aim to support non-profits focused on mental health awareness, empowering underserved communities
          with financial literacy, education, and real impact.
        </p>
      </div>

      {/* Passion Section */}
      <div className="columnA-center">
        <h1>Passion</h1>
        <p className='p-long'>
          My mother was killed when I was just 5 years old. Her name was (T)amaura (E)laine (J)ohnson.
          <br /><br />
          I wanted her name to live on through me, so I created a luxury urban clothing brand: JET URBAN CLOTHING.
          <br /><br />
          "Urban" was added because I wanted to be a voice for the low-income urban areas.
          Many of us are victims of a centralized system designed to oppress and control.
        </p>

        <br /><br />
        <h2>NO MORE!!!!</h2>
      </div>

      {/* Why Polygon Section */}
      <div className="columnA-right">
        <h1>WHY POLYGON?</h1>
        <p className='p-long'>
          After comparing different blockchains, Polygon won the top spot because it represents us — scalability,
          originality, and innovation. It also offers low gas fees and flexibility via Golang support.
          <br /><br />
          There are 75 REPLICA NFTs and 225 1-of-1s. Each 1-of-1 is edited with traits ranging from tattoos,
          shades, hats, shoes, and more. All warriors are rare — but some are rarer than others.
          Each warrior stands firm on the Polygon Magic Network. Minting starts at just 0.01 MATIC.
        </p>
      </div>
    </div>
  );
};

export default Header;
