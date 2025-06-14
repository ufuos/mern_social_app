
type ProfileHeaderProps = {
  name: string;
  username: string;
  avatar?: string;
  banner?: string;
  bio?: string;
};

export default function ProfileHeader({
  name,
  username,
  avatar,
  banner,
  bio,
}: ProfileHeaderProps) {
  return (
    <div className="mb-8">
      <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-blue-50">
        {banner ? (
          <img src={banner} alt="banner" className="absolute w-full h-full object-cover" />
        ) : (
          <div className="absolute w-full h-full bg-gradient-to-r from-blue-400 to-blue-200" />
        )}
        <div className="absolute -bottom-10 left-8">
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-white object-cover bg-white"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center">
              <span className="font-bold text-blue-600 text-3xl">{name[0]}</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 flex flex-col items-start px-8">
        <span className="text-2xl font-bold text-gray-800">{name}</span>
        <span className="text-gray-500">@{username}</span>
        {bio && <p className="mt-1 text-gray-600">{bio}</p>}
      </div>
    </div>
  );
}
