import { OddOrEvenChallenge } from "@/app/components/OddOrEvenChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function OddOrEvenPage() {
  return (
    <ChallengePageLayout
      title="Odd Or Even"
      endpoint="/api/OddOrEven/{number}"
      method="GET"
    >
      <OddOrEvenChallenge />
    </ChallengePageLayout>
  );
}

