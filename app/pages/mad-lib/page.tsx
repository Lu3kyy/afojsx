import { MadLibChallenge } from "@/app/components/MadLibChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function MadLibPage() {
  return (
    <ChallengePageLayout title="Mad Lib" endpoint="/api/MadLib" method="POST">
      <MadLibChallenge />
    </ChallengePageLayout>
  );
}

