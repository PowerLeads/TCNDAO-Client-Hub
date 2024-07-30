function Footer() {
  return (
    <footer className="text-[10px] flex justify-between pb-10 items-start px-4 sm:px-10 lg:px-32">
      <div className="flex gap-2 sm:gap-12 items-start">
        <a className="cursor-pointer" href="/">
          <img
            className="w-12 relative -left-3 -top-4 mix-blend-color-dodge"
            src="/logo.jpg"
            alt="logo"
          />
        </a>
        <div className="flex gap-2 sm:gap-12">
          <ul className="flex flex-col gap-3">
            <a href="/">
              <li>Home</li>
            </a>
            <li>Info</li>
            <li>Mint</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <a href="/forums">
              <li>Governance</li>
            </a>
            <li>Protocol</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4">
        <img className="w-7" src="/twitter.svg" alt="twitter logo" />
        <img src="/discord.svg" alt="discord logo" />
        <img src="/opensea.svg" alt="opensea logo" />
      </div>
    </footer>
  );
}

export default Footer;
