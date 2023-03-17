import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  const ICON_SIZE = 24;
  const styleClassName = "cursor-pointer mx-4 text-2xl bg-grey-50";
  return (
    <div className="flex justify-center dark:text-gray-50">
      <FaFacebook
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_FACEBOOK_PROFILE_URL, "_blank")}
        className={styleClassName}
      />
      <FaYoutube
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL, "_blank")}
        className={styleClassName}
      />

      <FaTwitter
        size={ICON_SIZE}
        onClick={() => window.open(process.env.NEXT_PUBLIC_TWITTER_CHANNEL_URL, "_blank")}
        className={styleClassName}
      />

    </div>
  );
};

export default SocialLinks;
