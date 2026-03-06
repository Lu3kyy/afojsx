"use client";

import { Alert, Button, Card } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function RestaurantPickerChallenge() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const text = await callChallengeApi("/api/challenge/RestaurantPicker");
      setResult(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <p className="afo-muted text-sm">Need a quick food idea? Let the API choose.</p>
      <Button onClick={runChallenge} disabled={loading}>
        Pick Restaurant
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


