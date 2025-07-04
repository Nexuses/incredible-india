import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

function SponsorsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Large sponsors (AAPI, Creativemoods)
  const largeSponsors = [
    { name: "AAPI", image: "/sponsors/big/aapi.png" },
    { name: "Creative Moods", image: "/sponsors/big/creativemoods.jpg" },
  ];

  // Small sponsors
  const smallSponsors = [
    { name: "New Gold Sponsor", image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/WhatsApp%20Image%202025-07-03%20at%2015.06.29_cbf079e6.jpg" },
    { name: "Mars", image: "/sponsors/big/mars.png" },
  ];

  // Media sponsors (now Silver Sponsors)
  type MediaSponsor = { name: string; image: string } | { name: string; isText: true };
  const mediaSponsors: MediaSponsor[] = [
    { name: "DNA College Advising", image: "/sponsors/small/image (11).png" },
    { name: "Elements Massage", image: "/sponsors/small/image (12).png" },
    { name: "New Silver Sponsor", image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/WhatsApp%20Image%202025-07-03%20at%2015.06.28_66438146.jpg" },
    { name: "Indian Groceries and Spices, Milwaukee", isText: true },
  ];

  // Supporters section
  const supporters = [
    { name: "Sewa USA", image: "/sponsors/supporters/sewa-usa.png" },
    { name: "Akshaya Patra", image: "/sponsors/supporters/akshaya-patra.png" },
  ];

  // Additional supporters (Our Food Vendors)
  const additionalSponsors = [
    { name: "", image: "/sponsors/small/image (17).png" },
    { name: "Sponsor 5", image: "/sponsors/small/image (15).png" },
    { name: "Sponsor 6", image: "/sponsors/small/image (16).png" },
    { name: "New Sponsor", image: "https://i.imgur.com/AR3gtJ3.png" },
    { name: "", image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/unnamed.png" },
    { name: "", image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/unnamed%20(1).png" },
  ];

  // Supporting Partners section
  const supportingPartners = [
    { name: "Sewa USA", image: "/sponsors/supporters/sewa-usa.png" },
    { name: "Akshaya Patra", image: "/sponsors/supporters/akshaya-patra.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header openQRModal={() => {}} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  Sponsors
                </span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We are grateful to our sponsors who have made the Incredible India Festival possible
              </p>
            </motion.div>
          </div>
        </section>

        {/* Biggest Supporter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Biggest Supporter
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/main%20supporter.png"
                  alt="Consulate General of India Chicago"
                  className="h-28 md:h-36 w-auto object-contain mb-4 mx-auto"
                  style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Consulate General of India<br />Chicago
                </h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Co-organizer Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Co-organizer
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/charu.png"
                  alt="Co-organizer Logo"
                  className="h-28 md:h-36 w-auto object-contain mb-4 mx-auto"
                  style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diamond Sponsors Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Diamond Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {largeSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-40 w-full"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-24 md:h-32 w-auto object-contain mb-2 mx-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gold Sponsors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gold Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {smallSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-40 w-full"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-24 md:h-32 w-auto object-contain mb-2 mx-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Silver Sponsors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Silver Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {mediaSponsors.map((sponsor, index) => {
                if (typeof sponsor === 'object' && 'isText' in sponsor && sponsor.isText) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-40 w-full"
                    >
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-3 border border-orange-100">
                        <h3 className="text-center font-semibold text-gray-800 px-2">
                          {sponsor.name}
                        </h3>
                      </div>
                    </motion.div>
                  );
                } else if (typeof sponsor === 'object' && 'image' in sponsor) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-40 w-full"
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          className="h-24 md:h-32 w-auto object-contain mb-2 mx-auto"
                        />
                      </div>
                    </motion.div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>

        {/* Vendors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Food Vendors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {additionalSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="h-24 md:h-32 w-auto object-contain mb-2 mx-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Supporters Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Supporters
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            {/* Custom grid: first row 3, second row 2 */}
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[ 
                  { image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/sewa%20usa%20logo.png", name: "Sewa USA" },
                  { image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/askshaya.png", name: "Akshaya Patra" },
                  { image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/desivibes.png", name: "Desi Vibes" },
                ].map((supporter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
                  >
                    <img
                      src={supporter.image}
                      alt={supporter.name}
                      className="h-24 md:h-32 w-auto object-contain mb-2 mx-auto"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[ 
                  { image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/bestfood.png", name: "Best Food" },
                  { image: "/sponsors/small/image (18).png", name: "Cafe 94 Indian Fusion" },
                ].map((supporter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
                  >
                    <img
                      src={supporter.image}
                      alt={supporter.name}
                      className="h-24 md:h-32 w-auto object-contain mb-2 mx-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SponsorsPage; 