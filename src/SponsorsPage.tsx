import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

function SponsorsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Large sponsors (AAPI, Mars, Creativemoods)
  const largeSponsors = [
    { name: "AAPI", image: "/sponsors/big/aapi.png" },
    { name: "Mars", image: "/sponsors/big/mars.png" },
    { name: "Creative Moods", image: "/sponsors/big/creativemoods.jpg" },
  ];

  // Small sponsors
  const smallSponsors = [
    { name: "Sponsor 1", image: "/sponsors/small/image (10).png" },
    { name: "Sponsor 2", image: "/sponsors/small/image (11).png" },
    { name: "Sponsor 3", image: "/sponsors/small/image (12).png" },
    { name: "Sponsor 4", image: "/sponsors/small/image (14).png" },
    { name: "Sponsor 5", image: "/sponsors/small/image (15).png" },
    { name: "Sponsor 6", image: "/sponsors/small/image (16).png" },
    { name: "Sponsor 7", image: "/sponsors/small/image (17).png" },
    { name: "Sponsor 8", image: "/sponsors/small/image (18).png" },
  ];

  // Text-only sponsor
  const textSponsor = "Indian Spices and Groceries, Milwaukee";

  return (
    <div className="min-h-screen bg-white">
      <Header openQRModal={() => {}} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  Sponsors
                </span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Large Sponsors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Major Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {largeSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {sponsor.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Small Sponsors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Supporting Sponsors
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {smallSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="h-20 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Text-only Sponsor Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Supporters
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  {textSponsor}
                </h3>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SponsorsPage; 