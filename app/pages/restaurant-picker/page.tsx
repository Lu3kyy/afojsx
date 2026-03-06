import { RestaurantPickerChallenge } from "@/app/components/RestaurantPickerChallenge";
import { ChallengePageLayout } from "@/app/components/ChallengePageLayout";

export default function RestaurantPickerPage() {
  return (
    <ChallengePageLayout
      title="Restaurant Picker"
      endpoint="/api/RestaurantPicker"
      method="GET"
    >
      <RestaurantPickerChallenge />
    </ChallengePageLayout>
  );
}

