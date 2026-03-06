import { CompareNumbersChallenge } from "@/app/components/CompareNumbersChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function CompareNumbersPage() {
  return (
    <ChallengePageLayout
      title="Compare Numbers"
      endpoint="/api/AddingTwoNumbers/compare"
      method="GET"
    >
      <CompareNumbersChallenge />
    </ChallengePageLayout>
  );
}

