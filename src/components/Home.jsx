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

function Home() {
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
            <img
              className="w-12 relative -left-3 mix-blend-color-dodge"
              src="/logo.jpg"
              alt="logo"
            />
            <ul className="flex gap-2 sm:gap-12 sec-font">
              <li>Home</li>
              <li>DAO Governance</li>
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
            <div className="my-20 mb-20 bg-[url('/hero-bg.png')] px-10 lg:px-32">
              <div className="sm:w-[430px] relative z-20">
                <h2 className="main-font text-[22px] font-semibold">
                  The Coop Network DAO <br/> A Decentralised Finance Ecosystem for a <br />
                  <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                    New Generation
                  </span>
                </h2>
                <p className="text-[12px] my-4 sec-font">
                  Moving towards decentralisation one step at a time
                </p>
                <button className="text-[12px] bg-green-700 py-2 px-4 rounded-md">
                  Become a member
                </button>
              </div>
              <div className="md:flex hidden items-center absolute right-0 sm:right-4 lg:right-12 top-[440px] sm:top-[250px] lg:top-28">
                <img
                  className="w-1/5 sm:w-20 md:w-32 lg:w-40 relative top-12"
                  src="G-Man_2.webp"
                  alt=""
                />
                <img
                  className="w-1/3 sm:w-32 md:w-48 lg:w-64 relative -rotate-[16deg] z-10"
                  src="G-Man_3.webp"
                  alt=""
                />
                <img
                  className="w-1/5 sm:w-20 md:w-32 lg:w-40 relative bottom-12"
                  src="G-Man.webp"
                  alt=""
                />
              </div>
              <img className="invisible" src="Ellipse1.svg" alt="" />
            </div>
            <img className="top-[350px] hidden lg:block absolute" src="Ellipse1.svg" alt="" />

            {/* app section */}
            <div className="mb-20 lg:mb-32 px-10 lg:px-32">
              <h3 className="text-center text-[20px] font-bold mb-10">
                Download the{" "}
                <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  {" "}
                  COOP Wallet
                </span>{" "}
                <br /> in order to receive your unique Membership Card
              </h3>
              <div className="flex py-10 gap-8 flex-col lg:flex-row w-full lg:w-[700px] mx-auto overflow-hidden lg:justify-between px-5 text-center bg-gradient-to-b lg:bg-gradient-to-r from-[#008215] via-[#090A10] to-[#008215] text-[12px] items-center rounded-xl">
                <div className="flex flex-col gap-6 sec-font">
                  <p>Get Started Today</p>
                  <button className="text-black rounded-full bg-white py-1 px-12">
                    Mint Now
                  </button>
                  <p>See Traits on the back of your card</p>
                </div>
                <img className="w-52" src="G-Man-cropped.png" alt="" />
                <div className="flex flex-col items-center">
                  <p className="sec-font">Download The COOP Wallet From</p>
                  <img
                    className="w-32"
                    src="google-play.png"
                    alt="google play"
                  />
                  <img className="w-28" src="app-store.png" alt="app store" />
                </div>
              </div>
            </div>

            {/* membership section */}
            <div className="mb-20 lg:mb-32 px-10 lg:px-32">
              <h2 className="text-[30px] font-semibold text-center mb-8">
                How the membership works
              </h2>
              <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center gap-10 lg:gap-20 mb-20">
                <p className="sec-font">
                  Membership comes with benefits but also with responsibilities.{" "}
                  <br />
                  <br />
                  Only as a member is it allowed to interact within the
                  protocol. <br />
                  <br />
                  Your membership commitment shows that you are past being a bad
                  actor.
                </p>
                <h3 className="text-[22px] lg:text-[50px] font-semibold py-8 lg:py-20 pl-16 bg-gradient-to-r from-[#4B2413] to-[transparent] rounded-l-[50px]">
                  First
                </h3>
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 lg:gap-20 mb-20">
                <h3 className="text-[22px] lg:text-[50px] font-semibold py-8 lg:py-20 pl-16 lg:pr-20 bg-gradient-to-r from-[transparent] to-[#008215] rounded-r-[50px]">
                  Second
                </h3>
                <p className="sec-font">
                  Traits on the NFT can be updated with certain S(mart)
                  C(ontracts) individually when interacting with specific action
                  within the protocol. <br />
                  <br />
                  Also the membership status will be updated on the NFT
                  according to the actions, involvement and contribution. <br />
                  <br />
                  The highest status is Councelor.
                </p>
              </div>
              <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center gap-10 lg:gap-20">
                <p className="sec-font">
                  On the other hand, if someone decides to leave the DAO, the
                  NFT can be sold on Opensea. <br />
                  <br /> Acces and benefits are being passed forward to the new
                  owner after proceeding through themembers onboarding steps.
                </p>
                <h3 className="text-[22px] lg:text-[50px] font-semibold py-8 lg:py-20 pl-16 bg-gradient-to-r from-[#4B2413] to-[transparent] rounded-l-[50px]">
                  Third
                </h3>
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

            {/* blog section */}
            <div className="mb-20 lg:mb-32 px-10 lg:px-32">
              <h2 className="text-[30px] font-semibold text-center mb-8">
                Check out our latest blog posts
              </h2>
              <Tabs
                className="bg-gradient-to-r from-[#008215] rounded-[20px] py-10 lg:py-5 px-4 lg:px-10 sec-font"
                variant="unstyled"
              >
                <TabList className="flex flex-wrap text-[12px] gap-3 mb-8">
                  <Tab
                    className="px-3 py-1 rounded-md text-white bg-gray-800"
                    _selected={{ color: "black", bg: "white" }}
                  >
                    Finance
                  </Tab>
                  <Tab
                    className="px-3 py-1 rounded-md text-white bg-gray-800"
                    _selected={{ color: "black", bg: "white" }}
                  >
                    Health Tips
                  </Tab>
                  <Tab
                    className="px-3 py-1 rounded-md text-white bg-gray-800"
                    _selected={{ color: "black", bg: "white" }}
                  >
                    Gardening Tips
                  </Tab>
                  <Tab
                    className="px-3 py-1 rounded-md text-white bg-gray-800"
                    _selected={{ color: "black", bg: "white" }}
                  >
                    Learn Something New
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="flex flex-wrap gap-8 font-bold">
                      <p className="text-black p-8 bg-gray-300 rounded-[20px] w-[320px]">
                      The difference between Currency and Money
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="flex flex-wrap gap-8 font-bold">
                      <p className="text-black p-8 bg-gray-300 rounded-[20px] w-[320px]">
                      Nature is The Ultimate Healer
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="flex flex-wrap gap-8 font-bold">
                      <p className="text-black p-8 bg-gray-300 rounded-[20px] w-[320px]">
                      Happiness and Wellbeing by growing your own little Indoor Garden
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="flex flex-wrap gap-8 font-bold">
                      <p className="text-black p-8 bg-gray-300 rounded-[20px] w-[320px]">
                      Keep your mind sharp, Train your attention
                      </p>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>

            {/* mint section */}
            <div className="mb-20 lg:mb-32">
              <h2 className="text-[22px] px-5 lg:text-[30px] lg:w-[650px] mb-4 mx-auto font-semibold text-center">
                Build Wealth and Passive Income through the Power of Community{" "}
              </h2>
              <p className="text-center mb-5 sec-font">
                Your journey starts today and you will be in good company
              </p>
              <div style={{height : width < 1200 ? 23 * width / 100 : ""}} className="bg-cover bg-no-repeat bg-[url('/mint-bg.png')] flex justify-center items-center mx-auto w-4/5 lg:w-[790px] lg:h-[230px] mb-20">
                <button className="bg-green-900 relative bottom-0 lg:bottom-0 px-3 py-1 rounded-[8px]">
                  Mint now
                </button>
              </div>
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
          <footer className="text-[10px] flex justify-between pb-10 items-start px-4 sm:px-10 lg:px-32">
            <div className="flex gap-2 sm:gap-12 items-start">
              <img
                className="w-12 relative -left-3 -top-4 mix-blend-color-dodge"
                src="/logo.jpg"
                alt="logo"
              />
              <div className="flex gap-2 sm:gap-12">
                <ul className="flex flex-col gap-3">
                  <li>Sections</li>
                  <li>Home</li>
                  <li>Info</li>
                  <li>Mint</li>
                  <li>Governance</li>
                  <li>Protocol</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li>Blog</li>
                  <li>The difference between Currency and Money</li>
                  <li>Nature is The Ultimate Healer</li>
                  <li>Happiness and Wellbeing by growing your own little Indoor Garden</li>
                  <li>Keep your mind sharp, Train your attention</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <img className="w-7" src="/twitter.svg" alt="twitter logo" />
              <img src="/discord.svg" alt="discord logo" />
              <img src="/opensea.svg" alt="opensea logo" />
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default Home;
