import type React from "react";
import { useState, type SubmitEvent } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast.warning("Please enter a valid username");
      return;
    }

    setUserName(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        id="search"
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Github User..."
        className="grow"
      />
      <Button type="submit" className="cursor-pointer">
        Submit
      </Button>
    </form>
  );
};

export default SearchForm;
