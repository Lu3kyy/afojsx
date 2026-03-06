import { HelloWorldChallenge } from "@/app/components/HelloWorldChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function HelloWorldPage() {
  return (
    <ChallengePageLayout title="Hello World" endpoint="/api/HelloWorld" method="GET">
      <HelloWorldChallenge />
    </ChallengePageLayout>
  );
}

