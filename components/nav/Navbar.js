import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center">
              <PyramidIcon className="h-8 w-8 mr-2 text-yellow-400 animate-pulse" />
              <h1 className="text-2xl font-bold">Magstr</h1>
            </div>
          </Link>

          <nav className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="md:hidden" size="icon" variant="ghost">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                className="md:hidden bg-gradient-to-b from-indigo-900 to-purple-800"
                side="right"
              >
                <div className="grid gap-2 py-6">
                  <Link className="hover:underline" href="#">
                    News
                  </Link>
                  <Link className="hover:underline" href="#">
                    Adoption
                  </Link>
                  <Link className="hover:underline" href="#">
                    Scene
                  </Link>
                  <Link className="hover:underline" href="#">
                    Education
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <div className="hidden md:flex items-center space-x-6">
              <Link className="hover:underline" href="#">
                News
              </Link>
              <Link className="hover:underline" href="#">
                Adoption
              </Link>
              <Link className="hover:underline" href="#">
                Scene
              </Link>
              <Link className="hover:underline" href="#">
                Education
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
function PyramidIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
      <path d="M12 2v20" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
