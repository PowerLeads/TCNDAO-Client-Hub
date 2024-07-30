import { useEffect, useState } from "react";
import Footer from "./Footer";

function PayWays() {
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
            {/* payment section */}
            <div className="mt-16 mb-20 lg:mb-32">
              <h2 className="mb-12 text-[32px] font-bold text-center">
                Send Your Payment <br />
                <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  Securely
                </span>
              </h2>
              <div className="rounded-2xl pt-10 outline-1 bg-[#0E0F15] outline-white outline mx-[40px] px-4 md:px-20 py-5 lg:py-10">
                <h2 className="mb-12 text-[32px] font-bold text-center bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  Choose How You Pay
                </h2>
                <div>
                  <div className="rounded-2xl outline outline-1 outline-white py-8 text-center flex flex-col items-center gap-8">
                    <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                      Pay Securely With GMD
                    </h3>
                    <button className="main-font outline outline-[0.7px] rounded-[7px]  px-6 py-2">
                      Pay $amount with GMD
                    </button>
                    <button className="main-font outline outline-[0.7px] rounded-[7px] w-4/5 md:w-[400px] py-2">
                      GMD Address Example
                    </button>
                  </div>
                  <div className="my-12 rounded-2xl outline outline-1 outline-white py-8 text-center flex flex-col items-center gap-8">
                    <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                      Pay Securely With USDC
                    </h3>
                    <button className="main-font outline outline-[0.7px] rounded-[7px] px-6 py-2">
                      Pay $amount with USDC
                    </button>
                    <button className="main-font outline outline-[0.7px] rounded-[7px] w-4/5 md:w-[400px] py-2">
                      USDC Address Example
                    </button>
                  </div>
                  <div className="rounded-2xl outline outline-1 outline-white py-8 text-center flex flex-col items-center gap-8">
                    <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                      Pay Securely With COOP
                    </h3>
                    <button className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent main-font font-bold outline outline-[0.7px] outline-white rounded-[7px] px-6 py-2">
                      COMING SOON
                    </button>
                    <button className="main-font outline outline-[0.7px] rounded-[7px] px-5 py-2">
                      Check Other Payment Methods
                    </button>
                  </div>
                  <div className="flex justify-center pt-8 pb-4">
                    <button className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent main-font font-bold outline outline-[0.7px] outline-white rounded-[7px] px-6 py-2">
                      Become A Member
                    </button>
                  </div>
                </div>
              </div>
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

export default PayWays;
