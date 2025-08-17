import React from "react";

const posts = [
  {
    id: 1,
    image: "images/whyalgo1.webp",
    title: "Copy Trading With Enrichmoney",
    tags: ["Broker Connection", "Copy Trading"],
    description:
      "Introduction: To connect Enrich money in AlgoDelta’s Copy Trading software, follow these steps: Generate Access Token...",
    date: "June 21, 2025",
    author: "AlgoDelta Support",
  },
  {
    id: 2,
    image: "images/whyalgo1.webp",
    title: "Copy trading with Definedge",
    tags: ["Broker Connection", "Copy Trading"],
    description:
      "Follow these simple steps to connect Definedge with AlgoDelta’s Copy Trading Software: 1. First, enable TOTP...",
    date: "April 19, 2025",
    author: "AlgoDelta Support",
  },
  {
    id: 3,
    image: "images/whyalgo1.webp",
    title: "India Remains Fastest-Growing Economy in 2025",
    tags: ["Information"],
    description:
      "India is once again making headlines for its strong economic growth 📈. According to the latest reports...",
    date: "March 10, 2025",
    author: "AlgoDelta Team",
  },
];

const recentPosts = [
  "Copy Trading With Enrichmoney",
  "Copy trading with Definedge",
  "India Remains Fastest-Growing Economy in 2025",
  "Rise of Tier 2 & 3 Cities in India’s Real Estate",
  "Fake Aadhaar Cards Go Viral: GPT-4o Misuse",
];

const recentComments = [
  "NTPC Green Energy: India’s Renewable Shift - Algodelta Blogs on SEBI New Rule on algotrading and API",
  "situs togel online on Copy Trading with AngelOne",
  "togel online on Copy Trading with FYERS",
  "Parag Raut on Copy Trading with Shoonya(Finvasia)",
];

export default function BlogSection() {
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="md:w-1/3 lg:mb-0 md:mb-4 sm:mb-4 mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
              />
            </div>

            <div className="p-5 flex-1 lg:mb-0 md:mb-4 sm:mb-4 mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/20 text-purple-400 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-orange-400 hover:underline cursor-pointer">
                {post.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                {post.description}
              </p>
              <div className="text-xs text-gray-400 flex items-center justify-between mt-4">
                <span>🧑 {post.author}</span>
                <span>📅 {post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="space-y-8">
        <div className="bg-[#1e1e1e] p-5 rounded-xl">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-l-md text-white focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-[#1A1A1A] px-4 rounded-r-md text-white font-semibold">
              Search
            </button>
          </div>
        </div>

        <div className="bg-[#1e1e1e] p-5 rounded-xl">
          <h4 className="font-semibold text-white mb-3">Recent Posts</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {recentPosts.map((post, idx) => (
              <li
                key={idx}
                className="border-b border-gray-700 pb-2 hover:text-orange-400 cursor-pointer"
              >
                {post}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#1e1e1e] p-5 rounded-xl">
          <h4 className="font-semibold text-white mb-3">Recent Comments</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {recentComments.map((comment, idx) => (
              <li key={idx} className="hover:text-orange-400 cursor-pointer">
                {comment}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
