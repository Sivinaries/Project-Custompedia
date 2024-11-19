function Aboutus() {
  return (
    <div className="grid grid-cols-1 bg-black">
      <div className="md:my-20 my-8 mx-2 md:mx-4">
        <div className="md:space-y-8 space-y-4">
          <div className="flex space-x-2">
            <div>
              <h1 className="text-xl text-left md:text-7xl text-white font-bold">
                About Us
              </h1>
            </div>
            <div className="pt-3.5 md:pt-12">
              <div className="bg-yellow-400 p-1 md:p-2 rounded-xl px-8 md:px-16"></div>
            </div>
          </div>
          <div className="md:space-y-8 space-y-4">
            <h1
              className="text-white text-xs font-extralight md:text-xl"
              style={{ textAlign: "justify" }}
            >
              Why Us? Experience the all-in-one solution for unmatched creative
              marketing results. Founded in 2014, our creative agency started by
              selling merchandise and souvenirs. We applied our knowledge of
              marketing strategy from our prior work to the creative marketing
              consultant agency; where we have led our journey with clients on
              numerous social platforms; from 2017 until this moment. Our path
              has been distinguished by a constant pursuit of quality, assisting
              clients of all sizes to accomplish their goals and develop their
              digital presence.
            </h1>
            <h1
              className="text-white text-xs font-extralight md:text-xl"
              style={{ textAlign: "justify" }}
            >
              With a decade of expertise, our team combines creativity and
              strategic thinking to craft compelling campaigns that resonate
              with target audiences. Our extensive awareness of the most recent
              trends and technology guarantees that we stay ahead of the
              competition. We optimize the use of technology and determine the
              most effective strategy to sell your brand on search engines,
              therefore, we may be your choice to create marketing campaigns
              that deliver verifiable marketing results.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
