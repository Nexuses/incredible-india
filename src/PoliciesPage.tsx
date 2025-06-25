import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Download, FileText, ExternalLink } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

function PoliciesPage() {
  // State for iframe dimensions and viewer
  const [iframeWidth, setIframeWidth] = useState<number>(800);
  const [iframeHeight, setIframeHeight] = useState<number>(600);
  const [useGoogleViewer, setUseGoogleViewer] = useState<boolean>(false);
  
  // Dummy function for openQRModal - this would ideally be handled through context or props
  const openQRModal = () => {
    // In a real implementation, this would open the QR modal
    // For now, we'll redirect to the homepage tickets section
    window.location.href = "/#tickets";
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Handle iframe dimensions calculation and window resize
  useEffect(() => {
    const calculateDimensions = () => {
      const width = Math.min(window.innerWidth - 80, 800);
      setIframeWidth(width);
      // Maintain aspect ratio (roughly 4:3)
      setIframeHeight(width * 0.75);
    };
    
    // Calculate initial dimensions
    calculateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', calculateDimensions);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', calculateDimensions);
    };
  }, []);

  // Get the full URL for the PDF
  const getPdfUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/service-animals_2025.pdf`;
    }
    return '/service-animals_2025.pdf';
  };

  // Get Google Docs viewer URL
  const getGoogleViewerUrl = () => {
    const pdfUrl = getPdfUrl();
    return `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
  };

  // Toggle between native PDF viewer and Google Docs viewer
  const toggleViewer = () => {
    setUseGoogleViewer(!useGoogleViewer);
  };

  return (
    <>
      <Header openQRModal={openQRModal} />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
            >
              Festival Policies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Please see the 2025 Summerfest Grounds policies for carry ins, prohibited items, permitted items, and service animals.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-xl border border-orange-100"
            >
              <p className="text-gray-700 font-medium">
                Milwaukee World Festival, Inc. d/b/a Summerfest reserves the right to alter carry-in item policies at any time. MWF will not offer accommodations for prohibited items and are not responsible for items left behind in the screening process
              </p>
            </motion.div>
            
            {/* Bag Policy Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-xl border border-gray-100">
                <img 
                  src="/policies.png" 
                  alt="Henry Maier Festival Park Bag Policy" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <ShieldAlert className="w-10 h-10 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Screening</h3>
                    <p className="text-gray-700 mb-4">
                      In line with all other major venues and stadiums, all visitors and employees will enter Henry Maier Festival Park (the "Park") through metal detection and should be prepared to comply with other security screening requirements.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li>All bags are subject to inspection prior to entering the Summerfest grounds. No backpacks at all or bags larger than 9x10x12 will be allowed on the grounds. All bags larger than 9X10X12 will need to be returned to a vehicle or home before entering the Park.</li>
                      <li>Please leave any unnecessary articles secured within your vehicle or at home to expedite your entry into the park. Items NOT ALLOWED CANNOT be checked in (see list below).</li>
                      <li>Any prohibited items will be confiscated by security and will not be returned.</li>
                      <li>Milwaukee World Festival, INC (MWF) is not responsible for fire, theft, damage or loss of vehicle including articles left within.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  <span className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">ALLOWED</span>
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Umbrellas (Note: Umbrellas are not allowed inside the American Family Insurance Amphitheater or at the BMO Pavilion</li>
                  <li>Strollers (Note: Strollers are not allowed inside the American Family Insurance Amphitheater, BMO Pavilion, or the Miller Level Up Deck)</li>
                  <li>Disposable Camera</li>
                  <li>Small Camera (No Professional Grade Cameras and Video Equipment)</li>
                  <li>Small Bag, Cinch bag, or Purse (See graphic above)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  <span className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">NOT ALLOWED</span>
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  <li>Backpacks (special consideration will be given for parents with infants and those with medical needs)</li>
                  <li>Large Bags over 9X10X12 inches</li>
                  <li>Camelback style hydration packs</li>
                  <li>Picnic Baskets</li>
                  <li>Outside food and beverages (unless needed for infants, medical or dietary needs)</li>
                  <li>Cans and Glass/Plastic or Metal Containers (including Yeti type bottles, tumblers, thermos, and disposable plastic bottles)</li>
                  <li>Coolers or other hard side containers</li>
                  <li>Stainless steel reusable drinking straws</li>
                  <li>Self-defense sprays (such as OC, pepper spray or mace)</li>
                  <li>Aerosol cans (except for spray sunscreens 6oz or less, 1 per patron)</li>
                  <li>UAV-Drones</li>
                  <li>Alcohol</li>
                  <li>Illegal drugs or substances</li>
                  <li>Firearms (no open or concealed weapons/firearms)</li>
                  <li>Knives</li>
                  <li>Weapons or objects that could be used as weapons</li>
                  <li>Fireworks, sparklers, or explosives</li>
                  <li>Professional cameras (cameras with a detachable lens or lens that extends further than 3 inches) or video equipment</li>
                  <li>Recording devices</li>
                  <li>Brooms/broomsticks, selfie sticks, poles, trekking sticks, and tripods</li>
                  <li>Pets (except service animals, or during special events or promotions)</li>
                  <li>Banners or flags on poles</li>
                  <li>Laser pointers</li>
                  <li>Skateboards, roller skates, inline skates or hoverboards</li>
                  <li>Foot powered or electric scooters</li>
                  <li>Bicycles, tricycles or unicycles</li>
                  <li>Wagons</li>
                  <li>Kites</li>
                  <li>Hula-hoops, Frisbees, and beach balls</li>
                  <li>Stadium seats, Sit-Upon, seat cushions, and lawn chairs</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 italic">*This list is not exhaustive. Items not appearing on the list may still be prohibited at the discretion of MWF Security if the items pose a potential threat to safety of our guests or due to event restrictions</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Medical Items & Personal Care</h3>
              <p className="text-gray-700 mb-4">
                If you need to bring medication, medical equipment, diapers, or other personal care items to Summerfest, how should you pack those items?
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>If you have privacy concerns, put those items in a smaller bag that you cannot see through and then place that bag in a clear bag.</li>
                <li>Please note, the small cosmetic or privacy bag is still subject to inspection.</li>
                <li>Nursing mothers may bring in needed items in a similar manner or separate bag.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">American Family Insurance Amphitheater - Additional Restrictions</h3>
              <p className="text-gray-700 mb-4">
                The following additional items are NOT PERMITTED in the American Family Insurance Amphitheater:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Strollers</li>
                <li>Umbrellas</li>
                <li>Professional grade cameras, GO Pro style cameras, Ipads/tablets, video, or video recording equipment, unless authorized by the performer. Standard point and shoot cameras may or may not be prohibited depending on event restrictions</li>
                <li>Stadium seats, Sit-Upon, seat cushions, and lawn chairs</li>
                <li>Other items as determined by the performer</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Animals Policy</h3>
              <p className="text-gray-700 mb-6">
                Milwaukee World Festival, Inc. welcomes guests with disabilities and their service animals. Please review our complete service animals policy document below.
              </p>
              
              {/* PDF Viewer */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-orange-500" />
                    Service Animals Policy Document
                  </h4>
                  <button
                    onClick={toggleViewer}
                    className="text-blue-600 hover:text-blue-800 underline flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {useGoogleViewer ? "Use native viewer" : "Use Google viewer"}
                  </button>
                </div>
                
                <div className="pdf-container">
                  {/* PDF Document with multiple viewing options */}
                  <div className="pdf-document-container w-full overflow-hidden rounded-lg border border-gray-300 bg-white">
                    {useGoogleViewer ? (
                      <iframe
                        src={getGoogleViewerUrl()}
                        width={iframeWidth}
                        height={iframeHeight}
                        title="Service Animals Policy PDF - Google Viewer"
                        className="mx-auto"
                        style={{ border: 'none' }}
                      ></iframe>
                    ) : (
                      <object
                        data="/service-animals_2025.pdf"
                        type="application/pdf"
                        width={iframeWidth}
                        height={iframeHeight}
                        className="mx-auto"
                      >
                        <iframe 
                          src="/service-animals_2025.pdf" 
                          width={iframeWidth} 
                          height={iframeHeight}
                          title="Service Animals Policy PDF"
                          className="mx-auto"
                          style={{ border: 'none' }}
                        >
                          <p className="text-center p-4">
                            Your browser doesn't support PDF viewing. 
                                                          <a 
                                href="/service-animals_2025.pdf" 
                                download="Incredible_India_Festival_Service_Animals_Policy_2025.pdf"
                                className="text-orange-500 hover:text-orange-700 underline ml-1"
                                onClick={(e) => {
                                  // Force download in case the download attribute isn't supported
                                  const link = document.createElement('a');
                                  link.href = '/service-animals_2025.pdf';
                                  link.download = 'Incredible_India_Festival_Service_Animals_Policy_2025.pdf';
                                  document.body.appendChild(link);
                                  link.click();
                                  document.body.removeChild(link);
                                  e.preventDefault();
                                }}
                              >
                                Download the PDF
                              </a> instead.
                          </p>
                        </iframe>
                      </object>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-center mt-6">
                  <a 
                    href="/service-animals_2025.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center mx-2"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Open PDF in new tab
                  </a>
                                      <a 
                      href="/service-animals_2025.pdf" 
                      download="Incredible_India_Festival_Service_Animals_Policy_2025.pdf"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center mx-2"
                      onClick={(e) => {
                        // Force download in case the download attribute isn't supported
                        const link = document.createElement('a');
                        link.href = '/service-animals_2025.pdf';
                        link.download = 'Incredible_India_Festival_Service_Animals_Policy_2025.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        e.preventDefault();
                      }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF
                    </a>
                </div>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  If you have trouble viewing the document, please use one of the options above.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PoliciesPage; 