import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Footer from "./Footer";

function Register() {
  const [width, setWidth] = useState(false);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      {!width ? null : (
        <div
          style={{ zoom: width > 1200 ? `${width / 1200}` : `${1}` }}
          className="text-white bg-[#07080D] py-6"
        >
          <header className="text-[10px] flex justify-between items-center px-4 sm:px-10 lg:px-32">
            <a className="cursor-pointer" href="/">
              <img
                className="w-12 relative -left-3 mix-blend-color-dodge"
                src="/logo.jpg"
                alt="logo"
              />
            </a>
            <ul className="flex gap-2 sm:gap-12 sec-font">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/forums">
                <li>DAO Governance</li>
              </a>
            </ul>
            <div className="flex gap-4">
              <img src="/opensea.svg" alt="opensea logo" />
              <button className="main-font outline outline-[0.7px] rounded-[7px] px-3 py-2">
                TCNDAO Protocol
              </button>
            </div>
          </header>

          <main>
            {/* hero section */}
            <div className="my-20 mb-20 px-10 lg:px-32">
              <div className="relative z-20">
                <h2 className="main-font text-[32px] text-center font-semibold mb-10">
                  Dive Deeper Into Our <br />
                  <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                    Decentralised Finance Ecosystem
                  </span>
                </h2>
                <img
                  className="mx-auto"
                  width="80%"
                  src="/mint-bg.png"
                  alt="NFT imdages"
                />
              </div>
            </div>

            {/* wallet section */}
            <div className="mb-20 lg:mb-32">
              <h2 className="main-font text-[32px] text-center font-semibold mb-10">
                Let's start by <br />
                <span className="font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  Connecting Your Wallet
                </span>
              </h2>
              <div className="flex flex-col lg:flex-row mx-[40px] rounded-2xl outline-white outline outline-1 lg:px-12 py-10 gap-10 lg:gap-20 items-center">
                <div className="lg:w-1/2 text-center lg:mb-10 relative">
                  <img
                    className="mx-auto w-36"
                    src="/wallet.webp"
                    alt="wallet 3D"
                  />
                  <h3 className="text-[32px] font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                    Connect Your Wallet
                  </h3>
                  <p className="mb-10">
                    You can only connect using your digital wallet.
                  </p>
                  <div>
                    <h4 className="text-[18px] bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                      Download MetaMask Wallet
                    </h4>
                    <div className="flex items-center gap-2 justify-center mb-6">
                      <img
                        className="w-20 sm:w-32"
                        src="google-play.png"
                        alt="google play"
                      />
                      <img
                        className="w-16 sm:w-28"
                        src="app-store.png"
                        alt="app store"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-4 text-[18px] bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                      Create an Account and Scan QR Code
                    </h4>
                    <div className="flex justify-center gap-4">
                      <button className="flex items-center gap-2 main-font outline outline-[0.7px] rounded-[7px] px-3 py-2">
                        <img className="w-6" src="/metamask.svg" alt="logo" />
                        MetaMask
                      </button>
                      <button className="flex items-center main-font outline outline-[0.7px] rounded-[7px] px-3 py-2">
                        <img
                          className="w-8 relative -left-1 mix-blend-color-dodge"
                          src="/logo.jpg"
                          alt="logo"
                        />
                        Coop Wallet
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 px-10 lg:px-0">
                  <h3 className="text-[28px] mb-5 bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                    What is a Digital Wallet?
                  </h3>
                  <p className="mb-10">
                    A digital wallet is a tool that allows you to make any kind
                    of financial transaction via an app with just one tap of
                    your smartphone. It securely stores you membership card,
                    using advanced encryption for guaranteed protection of your
                    data.
                  </p>
                </div>
              </div>
            </div>

            {/* get started section */}
            <div className="mb-20 lg:mb-32 px-10 lg:px-32">
              <h2 className="text-[30px] font-semibold text-center mb-8">
                How to Get Started
              </h2>
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-10 lg:gap-20 mb-20">
                <p className="sec-font">
                  Download Coop Wallet from App Store or Google Play in order to
                  keep your NFT safe and looking forward to be able to interact
                  with the TCNDAO protocol.
                </p>
                <h3 className="text-[22px] w-full lg:text-[50px] lg:w-[450px] font-semibold py-8 lg:py-20 pl-16 bg-gradient-to-r from-[#4B2413] to-[transparent] rounded-[12px] rounded-l-[50px]">
                  Step 1.
                </h3>
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-center gap-20 mb-20">
                <h3 className="text-[22px] w-full lg:text-[50px] lg:w-[300px] font-semibold py-8 lg:py-32 pl-16 lg:pr-2 bg-gradient-to-r from-[transparent] to-[#008215] rounded-[12px] rounded-r-[50px]">
                  Step 2.
                </h3>
                <p className="sec-font">
                  Mint your NFT.
                  <br />
                  <br /> The NFT represents your Identity in the DAO.
                  <br />
                  Liquidity is safely stored in a multi sign wallet. <br />
                  <br /> The address can be anytime consulted. It will be used
                  to show the TCNDAO’s TVL (total value locked).
                  <br />
                  <br /> The multi sign wallet is managed by a governance
                  council from within the organisation.
                  <br />
                  <br /> Your NFT gives you the opportunity to be elected into
                  the council after passing a integrity test.
                </p>
              </div>
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-20">
                <p className="sec-font w-full">
                  Start building collateral.
                  <br />
                  <br /> The protocol will use two of it’s own coins for
                  collateral.
                  <br />
                  <br /> One coin with low volatility, but not a stable coin and
                  the projects utility token.
                  <br />
                  <br /> Learn more about these coins from the white paper.{" "}
                  <br />
                  <br />
                  When the protocol launches start interacting with the
                  opportunities given.
                </p>
                <h3 className="text-[22px] w-full lg:text-[50px] lg:w-[300px] font-semibold py-8 lg:py-32 pl-16 lg:pl-12 bg-gradient-to-r from-[#4B2413] to-[transparent] rounded-[12px] rounded-l-[50px]">
                  Step 3.
                </h3>
              </div>
            </div>

            {/* faq section */}
            <div className="mb-20 lg:mb-32 px-10 lg:px-32">
              <h2 className="text-[30px] font-semibold text-center mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion allowToggle className="sec-font">
                <AccordionItem className="mb-4 p-4 bg-gradient-to-l from-[#4B2413] rounded-2xl">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        1. What is a NFT?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    A NFT is a nonfugible Token (invisible Token) a unique
                    digital identifier that is recorded on a blockchain and is
                    used to certify ownership and authenticity. They are
                    considered to be assets, like Art or Digital Content.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="mb-4 p-4 bg-gradient-to-l from-[#4B2413] rounded-2xl">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        2. Why on the Blockchain?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Blockchains are open Ledgers free for anyone to consult.
                    Transaction once validated stay forever on the blockchain
                    and cannot be undone. Validators are machines or computers
                    and you can think of them like accountants writing down
                    business incidents in their ledger. Like accountants,
                    validators are being paid for their eﬀort in Tokens related
                    to the given blockchain. Blockchain Technology is considered
                    to be part of the forth industrial revolution.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="mb-4 p-4 bg-gradient-to-l from-[#4B2413] rounded-2xl">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        3. What is Decentralised Finance?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Decentralised Finance is a emerging Technology still in it’s
                    infant days. It removes the middle man and centralised
                    institutions from financial transactions. The components of
                    a DeFi protocol are blockchain, tokens or cryptocurrencies
                    and a software that allows people to transact financially
                    with each other.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="mb-4 p-4 bg-gradient-to-l from-[#4B2413] rounded-2xl">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        4. Are there any risks for me?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Yes there are risks. As in Traditional Finance ( TradFi) the
                    risks in DeFi are mostly of human nature and these can be
                    divided into two: First of all sloppy developers writing bad
                    code just for making a quick buck without any resentment,
                    and then comes the hacker exploiting the bad code and
                    draining liquidity or hijacking a part of the protocol for
                    ransom, and bad actors in general. Secondly there is You. If
                    you are ignorant and don’t take your time to learn about the
                    protocol or not focused when you are doing transactions you
                    put the risk on yourself and nobody can change that.
                    Otherwise the core technology is practically risk free.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem className="mb-4 p-4 bg-gradient-to-l from-[#4B2413] rounded-2xl">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        5. Do you use AI?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    AI is a sensible topic and has to be addressed accordingly.
                    For certain repetitive tasks, yes, we will work to integrate
                    AI.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>

            {/* mint section */}
            <div className="mb-20">
              <div className="flex px-10 lg:w-[500px] mx-auto gap-12 items-center">
                <div className="text-center">
                  <h3 className="text-[12px] font-medium mb-2">
                    The NFT underlying Artwork was done by the Artist Velika
                    through painting, and adapted to NFTs needs by Community
                    Members.
                  </h3>
                  <p className="text-[12px]">
                    (no need to search for her online, she is not a public
                    person)
                  </p>
                </div>
                <div>
                  <img
                    className="w-44 mb-2"
                    src="/velika.png"
                    alt="velika the artist"
                  />
                  <p className="text-[10px] text-center">Velika, the Artist</p>
                </div>
              </div>
            </div>

            {/* newsletter section */}
            <div className="px-10 lg:px-32 mb-20 lg:mb-32">
              <div className="bg-[#10121A] p-4 sm:p-12 my-12 rounded-[10px] rounded-ee-[100px] flex md:flex-row flex-col gap-8 md:justify-between">
                <h3>Stay in touch with latest news</h3>
                <div className="text-[12px] flex">
                  <input
                    className="rounded-l-[4px] h-8 px-2"
                    type="email"
                    placeholder="Enter your email here"
                  />
                  <button className="bg-green-700 h-8 rounded-r-[4px] px-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Register;
