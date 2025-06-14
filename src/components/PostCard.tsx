
import { User } from "lucide-react";

type PostCardProps = {
  name: string;
  username: string;
  content: string;
  avatar?: string;
  time?: string;
};

export default function PostCard({
  name,
  username,
  content,
  avatar,
  time,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6 mb-4 flex items-start gap-5 hover:shadow-md transition-shadow animate-fade-in">
      <div>
        {avatar ? (
          <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <span className="bg-blue-100 rounded-full flex items-center justify-center w-12 h-12">
            <User className="text-blue-600" size={28} />
          </span>
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{name}</span>
          <span className="text-gray-400">@{username}</span>
          {time && (
            <span className="ml-2 text-xs text-gray-400">{time}</span>
          )}
        </div>
        <p className="mt-1 text-gray-800">{content}</p>
      </div>
    </div>
  );
}
