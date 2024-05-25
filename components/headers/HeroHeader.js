import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroHeader = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <Image
              alt="Bitcoin News"
              className="rounded-lg object-cover shadow-lg"
              height={500}
              src="https://files.oaiusercontent.com/file-ivHv47IAL8k9bzx3rfNXICSJ?se=2024-05-25T19%3A30%3A25Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D490a9cf4-f885-4444-b299-80e581db0f09.webp&sig=J3ozee%2B4szNEGyovODQMzDFoZPzzt2g9pvdW7KPfUtE%3D"
              style={{
                aspectRatio: "800/500",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-indigo-900">
                Latest News
              </h2>
              {/* <Link className="text-indigo-900 hover:underline" href="#">
                See All
              </Link> */}
            </div>
            <p className="text-indigo-700 mb-6">
              Stay up-to-date with the latest developments in the world of
              Nostr. Our team of experts brings you in-depth analysis and
              insights on the latest news and trends.
            </p>
            <Link
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800 text-white px-6 py-3 rounded-md hover:bg-gradient-to-r hover:from-indigo-800 hover:to-purple-700 transition-colors"
              href="#"
            >
              Read More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
