import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const Badges = () => {
  const [badges, setBadges] = useState([]);
  const userId = "kassim-yahya";
  useEffect(() => {
    const fetchFromCredly = async () => {
      try {
        const url = encodeURIComponent(
          `https://www.credly.com/users/${userId}/badges.json`
        );
        const proxy = `https://api.allorigins.win/get?url=${url}`;

        const response = await fetch(proxy);
        const result = await response.json();
        const badgeData = JSON.parse(result.contents).data;

        setBadges(badgeData);
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    };
    fetchFromCredly();
  }, []);

  // Duplicate cards to create infinite effect
  const LOOP_COUNT = 10;

  const repeatedBadges = Array.from(
    { length: LOOP_COUNT * badges.length },
    (_, i) => {
      const badge = badges[i % badges.length];
      return {
        ...badge,
        _instanceId: i, // for unique key
      };
    }
  );

  return (
    <>
      <section className="gradientBg text-tertiary  py-10 max-w-screen-2xl mx-auto">
        <h2 className="flex justify-center text-2xl text-tertiary font-semibold pb-8">
          Awards & Badges
        </h2>
        <div className="overflow-hidden w-full ">
          <div className="flex w-max animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {[...Array(2)].flatMap(
              (_, loopIndex) =>
                repeatedBadges.map((badge) => (
                  <div
                    key={`${badge.id}-${loopIndex}-${badge._instanceId}`}
                    className="grid [grid-template-rows:auto_1fr_auto] w-64 m-4 p-4 rounded-lg group text-white text-center bg-purple-900/70 shadow-md hover:border border-pink/50"
                  >
                    <div className="max-h-1/4 px-12 py-4 overflow-hidden ">
                      <img
                        src={badge.badge_template.image_url}
                        alt={badge.badge_template.name}
                        className="w-full h-full"
                      />
                    </div>
                    <h4 className="font-semibold text-sm text-wrap mb-2 ">
                      {badge.badge_template.name}
                    </h4>
                    {/* <p className="text-xs font-normal">
                  {badge.badge_template.issuer.name}
                </p> */}
                    <p className="text-xs font-thin mt-4 mb-6 ">
                      Issued:{" "}
                      {new Date(badge.issued_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <Link
                      to={`https://www.credly.com/badges/${badge.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-300 bg-zinc-900/20 p-2 rounded-lg font-normal text-sm opacity-0 group-hover:opacity-100  hover:underline"
                    >
                      Verify Credential{" "}
                      <FiExternalLink className="w-4 h-4 inline relative -top-[3px] " />
                    </Link>
                  </div>
                )) // end of map
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Badges;
