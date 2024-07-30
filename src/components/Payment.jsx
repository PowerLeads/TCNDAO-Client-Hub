import { useEffect, useState } from "react";
import Footer from "./Footer";

function Payment() {
  const [width, setWidth] = useState(false);
  const [payId, setPayId] = useState("");
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const handlePay = (id) => {
    setPayId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!payId) {
      alert("Please select a payment method");
      return;
    }
    window.location.href = `/payment/method`;
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
                Get Started With <br />
                <span className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  Your New Membership
                </span>
              </h2>
              <div className="rounded-2xl pt-10 outline-1 bg-[#0E0F15] outline-white outline mx-[40px] px-4 md:px-12 py-5 lg:py-10">
                <h2 className="mb-12 text-[32px] font-bold text-center bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                  Choose your payment method
                </h2>
                <div className="flex flex-col-reverse md:flex-row items-start gap-16">
                  <div className="md:w-3/5">
                    <div
                      onClick={() => handlePay(1)}
                      className={`${
                        payId == 1
                          ? "outline-blue-900 outline-2"
                          : "outline-white"
                      } flex gap-4 items-center justify-start outline outline-1 rounded-2xl p-3 cursor-pointer hover:outline-blue-500`}
                    >
                      <img
                        className="w-8"
                        src="/computer.svg"
                        alt="computer icon"
                      />
                      <div>
                        <h3 className="text-[16px] font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          GMD
                        </h3>
                        <p className="my-2 text-[12px]">
                          You can now use GMD from your digital wallet to
                          acquire your NFT.
                        </p>
                        <p className="text-[12px] font-bold">
                          Process Time - up to 2-5 minutes
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => handlePay(2)}
                      className={`${
                        payId == 2
                          ? "outline-blue-900 outline-2"
                          : "outline-white"
                      } my-8 flex gap-4 items-center justify-start outline outline-1 rounded-2xl p-3 cursor-pointer hover:outline-blue-500`}
                    >
                      <img
                        className="w-8"
                        src="/computer.svg"
                        alt="computer icon"
                      />
                      <div>
                        <h3 className="text-[16px] font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          USDC
                        </h3>
                        <p className="my-2 text-[12px]">
                          Acquire your NFT by using USDC from your digital
                          wallet.
                        </p>
                        <p className="text-[12px] font-bold">
                          Process Time - up to 2-5 minutes
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => handlePay(3)}
                      className={`${
                        payId == 3
                          ? "outline-blue-900 outline-2"
                          : "outline-white"
                      } flex gap-4 items-center justify-start outline outline-1  rounded-2xl p-3 cursor-pointer hover:outline-blue-500`}
                    >
                      <img
                        className="w-8"
                        src="/computer.svg"
                        alt="computer icon"
                      />
                      <div>
                        <h3 className="text-[16px] font-bold bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          COOP
                        </h3>
                        <p className="my-2 text-[12px]">
                          Acquire your NFT by using COOP from your digital
                          wallet.
                        </p>
                        <p className="text-[12px] font-bold">Coming Soon</p>
                      </div>
                    </div>
                    <form className="mb-8" onSubmit={handleSubmit}>
                      <div className="flex my-10 gap-4">
                        <input
                          className="scale-150 accent-[#65558F]"
                          type="checkbox"
                          required
                        />
                        <p>
                          I have read the Terms and Conditions regarding
                          visiting and using the registration platform as a
                          member of The Coop Network DAO.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="text-[12px] bg-green-700 py-2 px-8 outline outline-[0.7px] oultine-white rounded-md"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="w-full md:w-2/5">
                    <img
                      className="mb-6 md:w-[300px] rounded-3xl"
                      src="/nft-pay.png"
                      alt=""
                    />
                    <div className="p-2 flex flex-col gap-2">
                      <h3 className="bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent font-bold">
                        Payment Estimate
                      </h3>
                      <hr />
                      <div className="flex justify-between">
                        <p className="text-[16px] bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          Cost
                        </p>
                        <p className="font-bold">$102.00</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[14px] bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          Included Fee
                        </p>
                        <p className="text-[14px] font-bold">$2.00</p>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <p className="text-[14px] bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          USDC
                        </p>
                        <p className="text-[14px] font-bold">4.5835</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[14px] bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          STAKE
                        </p>
                        <p className="text-[14px] font-bold">458.35</p>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <p className="text-[14px] bg-gradient-to-r from-[#39F056] to-[#8ED3ED] bg-clip-text text-transparent">
                          Total Cost
                        </p>
                        <p className="text-[14px] font-bold">467.52 USDC</p>
                      </div>
                    </div>
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

export default Payment;
