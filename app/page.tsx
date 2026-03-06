import { Badge, Card } from "flowbite-react";
import Link from "next/link";

type ChallengeLink = {
  slug: string;
  title: string;
  endpoint: string;
  method: "GET" | "POST";
  description: string;
};

const challengeLinks: ChallengeLink[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    endpoint: "/api/HelloWorld",
    method: "GET",
    description: "Return a friendly greeting from the API.",
  },
  {
    slug: "adding-two-numbers",
    title: "Adding Two Numbers",
    endpoint: "/api/AddingTwoNumbers",
    method: "GET",
    description: "Add two numbers with query parameters.",
  },
  {
    slug: "compare-numbers",
    title: "Compare Numbers",
    endpoint: "/api/AddingTwoNumbers/compare",
    method: "GET",
    description: "Compare two numbers and return a message.",
  },
  {
    slug: "asking-questions",
    title: "Asking Questions",
    endpoint: "/api/AskingQuestions",
    method: "GET",
    description: "Build a response from wake-up time and favorite food.",
  },
  {
    slug: "guess-it",
    title: "Guess It",
    endpoint: "/api/GuessIt",
    method: "GET",
    description: "Submit a number and receive guessing feedback.",
  },
  {
    slug: "mad-lib",
    title: "Mad Lib",
    endpoint: "/api/MadLib",
    method: "POST",
    description: "Send story words and receive a generated Mad Lib.",
  },
  {
    slug: "magic-8-ball",
    title: "Magic 8 Ball",
    endpoint: "/api/Magic8Ball",
    method: "GET",
    description: "Ask a question and get a random fortune answer.",
  },
  {
    slug: "odd-or-even",
    title: "Odd Or Even",
    endpoint: "/api/OddOrEven/{number}",
    method: "GET",
    description: "Check if a number is odd or even.",
  },
  {
    slug: "restaurant-picker",
    title: "Restaurant Picker",
    endpoint: "/api/RestaurantPicker",
    method: "GET",
    description: "Pick a random restaurant suggestion.",
  },
  {
    slug: "reverse-text",
    title: "Reverse Text",
    endpoint: "/api/Reverse",
    method: "GET",
    description: "Reverse text from a query input.",
  },
  {
    slug: "reverse-numbers",
    title: "Reverse Numbers",
    endpoint: "/api/ReverseNumbers/{number}",
    method: "GET",
    description: "Reverse the digits in a number.",
  },
];

export default function Home() {
  return (
    <main className="afo-shell min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <Card className="afo-panel">
          <h1 className="afo-title text-3xl font-bold">All For One Mini Challenges</h1>
          <p className="afo-muted">
            Pick any challenge below to test an endpoint with a simple interactive form.
          </p>
          <p className="afo-muted text-sm">
            Make your choice!
          </p>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {challengeLinks.map((challenge) => (
            <Card key={challenge.slug} className="afo-panel">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h2 className="afo-title text-lg font-semibold">{challenge.title}</h2>
                <Badge color={challenge.method === "POST" ? "success" : "info"}>
                  {challenge.method}
                </Badge>
              </div>
              <p className="afo-muted text-sm">{challenge.description}</p>
              <p className="afo-muted text-xs font-mono">{challenge.endpoint}</p>
              <Link
                href={`/pages/${challenge.slug}`}
                className="afo-link-btn mt-2 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium"
              >
                Open Challenge
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
