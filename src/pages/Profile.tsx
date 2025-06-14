
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import PostCard from "@/components/PostCard";

const mockProfile = {
  name: "Taylor Kim",
  username: "taylork",
  bio: "Building products and connecting with people on SocialConnect.",
  avatar: "https://randomuser.me/api/portraits/men/24.jpg",
  banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
};

const userPosts = [
  {
    name: "Taylor Kim",
    username: "taylork",
    content: "So thrilled to start sharing updates on SocialConnect!",
    avatar: mockProfile.avatar,
    time: "2 hours ago",
  },
  {
    name: "Taylor Kim",
    username: "taylork",
    content: "First post here! Drop a comment 👋",
    avatar: mockProfile.avatar,
    time: "3 hours ago",
  },
];

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="container max-w-3xl mx-auto pt-8 px-6">
        <ProfileHeader 
          name={mockProfile.name}
          username={mockProfile.username}
          avatar={mockProfile.avatar}
          banner={mockProfile.banner}
          bio={mockProfile.bio}
        />
        <h3 className="font-bold text-gray-700 mb-4 text-lg">Posts</h3>
        {userPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </main>
    </>
  );
}
