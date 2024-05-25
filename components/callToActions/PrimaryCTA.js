import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PrimaryCTA = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-orange-400 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">
              Attend TABconf
            </h2>
            <p className="text-indigo-700 mb-6">
              Join the premier gathering of Nostr enthusiasts, developers, and
              thought leaders. Immerse yourself in a world of innovation,
              networking, and cutting-edge discussions.
            </p>
            <Link
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800 text-white px-6 py-3 rounded-md hover:bg-gradient-to-r hover:from-indigo-800 hover:to-purple-700 transition-colors"
              href="#"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div>
            <img
              alt="TABconf"
              className="rounded-lg object-cover"
              height={500}
              src="https://6.tabconf.com/assets/img/nogood/512x512/homepagelogo.png"
              style={{
                // aspectRatio: "800/500",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryCTA;
