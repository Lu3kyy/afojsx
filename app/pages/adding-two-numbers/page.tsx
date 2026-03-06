import { AddingTwoNumbersChallenge } from "@/app/components/AddingTwoNumbersChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function AddingTwoNumbersPage() {
  return (
    <ChallengePageLayout
      title="Adding Two Numbers"
      endpoint="/api/AddingTwoNumbers"
      method="GET"
    >
      <AddingTwoNumbersChallenge />
    </ChallengePageLayout>
  );
}

