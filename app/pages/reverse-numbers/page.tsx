import { ReverseNumbersChallenge } from "@/app/components/ReverseNumbersChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function ReverseNumbersPage() {
  return (
    <ChallengePageLayout
      title="Reverse Numbers"
      endpoint="/api/ReverseNumbers/{number}"
      method="GET"
    >
      <ReverseNumbersChallenge />
    </ChallengePageLayout>
  );
}

