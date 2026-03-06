import { Magic8BallChallenge } from "@/app/components/Magic8BallChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function Magic8BallPage() {
  return (
    <ChallengePageLayout title="Magic 8 Ball" endpoint="/api/Magic8Ball" method="GET">
      <Magic8BallChallenge />
    </ChallengePageLayout>
  );
}

