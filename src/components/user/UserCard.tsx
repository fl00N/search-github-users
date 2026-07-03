import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type UserCardProps = {
  avatarUrl: string;
  login: string;
  name: string | null;
  bio: string | null;
  url: string;
};

const UserCard = ({ avatarUrl, login, name, bio, url }: UserCardProps) => {
  return (
    <Card className="overflow-hidden border-border/60 bg-card/80 shadow-lg shadow-primary/5 backdrop-blur">
      <div className="h-28 bg-linear-to-r from-primary/25 via-primary/10 to-accent/40 sm:h-36" />

      <CardContent className="relative px-5 pb-6 sm:px-8 sm:pb-8">
        <img
          src={avatarUrl}
          alt={`${login}'s GitHub avatar`}
          className="-mt-16 size-32 rounded-full border-4 border-background bg-background object-cover shadow-xl sm:-mt-20 sm:size-40"
        />

        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <CardHeader className="min-w-0 space-y-3 p-0">
            <div className="space-y-1">
              <CardTitle className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
                {name || login}
              </CardTitle>

              <p className="text-sm font-medium text-primary">{login}</p>
            </div>

            <CardDescription className="max-w-2xl text-sm leading-6 sm:text-base">
              {bio || "Passionate about coding and technology."}
            </CardDescription>
          </CardHeader>

          <Button
            asChild
            className="w-full rounded-xl px-6 shadow-sm md:w-auto"
          >
            <a href={url} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
