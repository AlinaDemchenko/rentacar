import heroPic from "../images/Hero.png";

function Home() {
  return (
    <main className="py-9 px-10 h-fit mt-[102px]">
      <div className="flex">
        <div className="w-max">
          <h1 className="title">
            /// RENTACAR
          </h1>
          <p className="text-6xl text-black font-extralight text-right mb-12 inline-block">
            24<span className="text-orange-800">/</span>7
          </p>
          <p className="text-sm w-[400px] block mb-6">
            Discover seamless car rental services at RENTACAR. Choose from a
            variety of vehicles to suit your needs, <br />
            and experience hassle-free booking with exceptional customer
            support. Your journey starts with us.
          </p>
          <div className="w-fit flex flex-col justify-between h-48">
            <p className="text-4xl block font-thin text-orange-800">
              +380730000000
            </p>
            <p className="left-12 text-xs tracking-wide font-medium">
              Car insurance / GPS navigator / Child seat / Wi-Fi internet /
              Concierge service
            </p>
          </div>
        </div>
        <img
          src={heroPic}
          alt="cars"
          className="w-1/2 absolute right-[80px] top-14"
        />
      </div>
    </main>
  );
}

export default Home;
