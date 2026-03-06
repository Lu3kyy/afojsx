import { AskingQuestionsChallenge } from "@/app/components/AskingQuestionsChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function AskingQuestionsPage() {
  return (
    <ChallengePageLayout
      title="Asking Questions"
      endpoint="/api/AskingQuestions"
      method="GET"
    >
      <AskingQuestionsChallenge />
    </ChallengePageLayout>
  );
}

