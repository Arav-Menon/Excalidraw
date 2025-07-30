import { Github, Heart, Link, PenTool, Twitter } from "lucide-react";

export default function Footer() {
  const icons = [{ Github, Twitter }];
  const siteLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Changelog", "Roadmap"],
    },
    {
      title: "Community",
      links: ["GitHub", "Discord", "Twitter", "Blog"],
    },
  ];

  return (
    <>
      <footer className="bg-gradient-to-t from-black via-gray-900 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex gap-3 ">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative h-16 w-16 bg-black rounded-3xl flex items-center justify-center">
                    <PenTool className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Excalidraw
                  </span>
                  <div className="text-sm text-gray-400 font-bold">
                    NEXT-GEN CREATIVITY PLATFORM
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Redefining the boundaries of digital creativity. Where
                imagination meets innovation, and every idea becomes a
                masterpiece.
              </p>
              <div className="flex space-x-6">
                {icons.map((Icon, index) => (
                  <Link key={index} href="#" className="group">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                      <div className="relative bg-gray-800 p-3 rounded-xl group-hover:bg-gray-700 transition-colors">
                        {/* <Icon className="h-6 w-6 text-gray-400 group-hover:text-white" /> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* {siteLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-black text-xl text-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                      >
                        <span className="relative">
                          {link}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity -z-10 scale-110"></div>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; {new Date().getFullYear()} Excalidraw. Crafted with{" "}
              <Heart className="inline h-5 w-5 text-red-500 animate-pulse mx-1" />
              by visionaries for visionaries.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
