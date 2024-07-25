import { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";

function Forums() {
  const [width, setWidth] = useState(false);
  const [tab, setTab] = useState(0);
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
            {/* forums section */}
            <div className="mt-16 mb-20 lg:mb-32">
              <h2 className="px-4 mb-12 text-[32px] font-bold text-center">
                Take Vital Decisions <br />
                <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  Among The Community
                </span>
              </h2>
              <p className="px-4 md:w-1/2 mx-auto text-center">
                <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  {" "}
                  COOP Token-Holders{" "}
                </span>{" "}
                collectively discuss, propose, and vote on different issues
                regarding
                <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  The DAO
                </span>
              </p>

              <div className="px-4 md:px-32 mt-16 mb-32">
                <div className="flex flex-wrap text-[14px] gap-8">
                  <Menu>
                    <MenuButton
                      as={Button}
                      className="outline !outline-1 !outline-white rounded-lg !px-6 !py-1"
                    >
                      all categories
                    </MenuButton>
                    <MenuList className="!bg-[#0E0F15] py-2 px-4 rounded-lg">
                      <MenuItem className="hover:text-blue-600 mb-2">
                        General
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        Treasury
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        Delegate Communication
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        Governance
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        Knowledge Base
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600">
                        Announcements
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton
                      as={Button}
                      className="outline !outline-1 !outline-white rounded-lg !px-6 !py-1"
                    >
                      all tags
                    </MenuButton>
                    <MenuList className="!bg-[#0E0F15] py-2 px-4 rounded-lg">
                      <MenuItem className="hover:text-blue-600 mb-2">
                        tag 1
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        tag 2
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        tag 3
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        tag 4
                      </MenuItem>
                      <MenuItem className="hover:text-blue-600 mb-2">
                        tag 5
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <button
                    onClick={() => setTab(1)}
                    className={`main-font ${
                      tab == 1 ? "bg-[#0E0F15]" : ""
                    } rounded-[7px] px-4 py-2`}
                  >
                    Categories
                  </button>
                  <button
                    onClick={() => setTab(2)}
                    className={`main-font ${
                      tab == 2 ? "bg-[#0E0F15]" : ""
                    } rounded-[7px] px-4 py-2`}
                  >
                    Latest
                  </button>
                  <button
                    onClick={() => setTab(3)}
                    className={`main-font ${
                      tab == 3 ? "bg-[#0E0F15]" : ""
                    } rounded-[7px] px-4 py-2`}
                  >
                    Top
                  </button>
                </div>
                <hr className="my-6" />

                <div className="flex flex-wrap justify-between gap-6">
                  <div className="hover:outline hover:cursor-pointer outline-white outline-1 bg-gradient-to-r from-[#0E0F15] via-[#0E0F15] to-[transparent] w-[400px] h-[180px] rounded-2xl pt-10 px-6">
                    <h3 className="font-bold text-[20px] mb-2">General</h3>
                    <p className="text-[18px]">
                      General Discussion around Technical and Community topics
                    </p>
                  </div>
                  <div className="hover:outline hover:cursor-pointer outline-white outline-1 bg-gradient-to-r from-[#0E0F15] via-[#0E0F15] to-[transparent] w-[400px] h-[180px] rounded-2xl pt-10 px-6">
                    <h3 className="font-bold text-[20px] mb-2">
                      Announcements
                    </h3>
                    <p className="text-[18px]">
                      Projects, updates and newest developments.
                    </p>
                  </div>
                  <div className="hover:outline hover:cursor-pointer outline-white outline-1 bg-gradient-to-r from-[#0E0F15] via-[#0E0F15] to-[transparent] w-[400px] h-[180px] rounded-2xl pt-10 px-6">
                    <h3 className="font-bold text-[20px] mb-2">Treasury</h3>
                    <p className="text-[18px]">
                      Treasury overview of the TCNDAO
                    </p>
                  </div>
                  <div className="hover:outline hover:cursor-pointer outline-white outline-1 bg-gradient-to-r from-[#0E0F15] via-[#0E0F15] to-[transparent] w-[400px] h-[180px] rounded-2xl pt-10 px-6">
                    <h3 className="font-bold text-[20px] mb-2">Governance</h3>
                    <p className="text-[18px]">Proposal and voting.</p>
                  </div>
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
                  <li>
                    Happiness and Wellbeing by growing your own little Indoor
                    Garden
                  </li>
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

export default Forums;
