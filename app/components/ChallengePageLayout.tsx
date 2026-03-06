import Link from "next/link";

type ChallengePageLayoutProps = {
  title: string;
  endpoint: string;
  method: "GET" | "POST";
  children: React.ReactNode;
};

export function ChallengePageLayout({
  title,
  endpoint,
  method,
  children,
}: ChallengePageLayoutProps) {
  return (
    <main className="afo-shell min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl space-y-4">
        <Link className="text-sm font-medium text-cyan-300 hover:underline" href="/">
          Back To Landing Page
        </Link>
        <div className="afo-panel rounded-lg p-5">
          <h1 className="afo-title text-2xl font-bold">{title}</h1>
          <p className="afo-muted mt-2 text-sm">
            Endpoint: <span className="font-mono">{method} {endpoint}</span>
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}
