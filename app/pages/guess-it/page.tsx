import { GuessItChallenge } from "@/app/components/GuessItChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function GuessItPage() {
  return (
    <ChallengePageLayout title="Guess It" endpoint="/api/GuessIt" method="GET">
      <GuessItChallenge />
    </ChallengePageLayout>
  );
}

