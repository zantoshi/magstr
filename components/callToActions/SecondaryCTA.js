import Link from "next/link";
import Image from "next/image";

const SecondaryCTA = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-purple-800 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <Image
              alt="ZBD App"
              className="rounded-lg"
              height={500}
              src="https://zbd.gg/img/home-banner-one.webp"
              style={{
                // aspectRatio: "800/500",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Download the ZBD App
            </h2>
            <p className="text-gray-300 mb-6">
              Experience the future of decentralized social networking with the
              ZBD App. Connect with like-minded individuals, share your
              thoughts, and explore a world of possibilities.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-indigo-900 shadow-lg transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Download for iOS
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-lg transition-colors hover:bg-gray-100 hover:text-indigo-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Download for Android
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTA;
