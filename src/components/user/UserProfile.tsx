import { useQuery } from "@apollo/client/react";
import { GET_USER } from "@/queries";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import PopularRepos from "../charts/PopularRepos";
import UsedLanguages from "../charts/UsedLanguages";
import ForkedRepos from "../charts/ForkedRepos";
import UserProfileSkeleton from "./UserProfileSkeleton";

const UserProfile = ({ userName }: { userName: string }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { login: userName },
  });

  if (loading) {
    return <UserProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-center">
        <h2 className="font-semibold text-destructive">Something went wrong</h2>

        <p className="mt-1 text-sm text-muted-foreground">{error.message}</p>
      </div>
    );
  }

  if (!data?.user) {
    return (
      <div className="rounded-2xl border border-dashed bg-muted/40 p-10 text-center">
        <h2 className="text-xl font-semibold">User not found</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Check the username and try again.
        </p>
      </div>
    );
  }

  const {
    login,
    name,
    avatarUrl,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <section className="mx-auto w-full max-w-6xl space-y-6">
      <UserCard
        avatarUrl={avatarUrl}
        login={login}
        name={name}
        bio={bio}
        url={url}
      />

      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <UsedLanguages repositories={repositories.nodes} />
          <PopularRepos repositories={repositories.nodes} />

          <div className="xl:col-span-2">
            <ForkedRepos repositories={repositories.nodes} />
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
