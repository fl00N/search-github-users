import StatsCard from "./StatsCard";

type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

const StatsContainer = ({
  totalRepos,
  followers,
  following,
  gists,
}: StatsContainerProps) => {
  const stats = [
    {
      title: "Repositories",
      count: totalRepos,
      description: "Public projects",
    },
    {
      title: "Followers",
      count: followers,
      description: "GitHub followers",
    },
    {
      title: "Following",
      count: following,
      description: "Accounts followed",
    },
    {
      title: "Gists",
      count: gists,
      description: "Public code snippets",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          count={stat.count}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default StatsContainer;
