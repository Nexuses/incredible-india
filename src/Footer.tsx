import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Cloud, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6 mb-8 md:mb-0">
            <Link to="/">
              <img
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/incredible_india_logo-removebg-preview.png"
                alt="Incredible India Festival"
                className="h-20 w-auto"
              />
            </Link>
            <div>
              <h3 className="font-bold text-2xl">
                Incredible India Festival
              </h3>
              <p className="text-gray-400 text-lg">Presented by Sanskriti</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-lg">
              © 2025 Sanskriti, Inc. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2">
              Incredible India Festival - Milwaukee, Wisconsin
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://instagram.com/incredibleindiafestivalmke"
            aria-label="Instagram"
            className="hover:text-orange-400 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577139086824#"
            aria-label="Facebook"
            className="hover:text-orange-400 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://twitter.com/incredindiamke"
            aria-label="Twitter"
            className="hover:text-orange-400 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://incredibleindiamke.bsky.social"
            aria-label="Bluesky"
            className="hover:text-orange-400 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cloud className="w-6 h-6" />
            <span className="sr-only">Bluesky</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 