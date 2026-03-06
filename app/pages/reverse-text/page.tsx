import { ReverseTextChallenge } from "@/app/components/ReverseTextChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function ReverseTextPage() {
  return (
    <ChallengePageLayout title="Reverse Text" endpoint="/api/Reverse" method="GET">
      <ReverseTextChallenge />
    </ChallengePageLayout>
  );
}

