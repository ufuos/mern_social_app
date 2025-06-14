
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

const DUMMY_POSTS = [
  {
    name: "Alice Wang",
    username: "alicew",
    content: "Welcome to SocialConnect! 👋 Excited to share my first post.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    time: "5 min ago",
  },
  {
    name: "George Smith",
    username: "georgesmith",
    content: "Just finished a big project at work. Proud of my team! 🚀",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    time: "20 min ago",
  },
  {
    name: "Taylor Kim",
    username: "taylork",
    content: "Exploring the new features on SocialConnect. Anyone up for a chat?",
    time: "1 hr ago",
  },
];

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="container max-w-3xl mx-auto pt-9 px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-blue-700 animate-fade-in">
          Welcome to SocialConnect!
        </h2>
        {DUMMY_POSTS.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </main>
    </>
  );
}
