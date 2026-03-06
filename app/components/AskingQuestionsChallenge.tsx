"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function AskingQuestionsChallenge() {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [food, setFood] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const qs = new URLSearchParams({ wakeUpTime, food }).toString();
      const text = await callChallengeApi(`/api/challenge/AskingQuestions?${qs}`);
      setResult(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <div>
        <Label htmlFor="wakeUpTime">Wake Up Time</Label>
        <TextInput
          id="wakeUpTime"
          value={wakeUpTime}
          onChange={(event) => setWakeUpTime(event.target.value)}
          placeholder="7:00 AM"
        />
      </div>
      <div>
        <Label htmlFor="food">Favorite Food</Label>
        <TextInput
          id="food"
          value={food}
          onChange={(event) => setFood(event.target.value)}
          placeholder="Tacos"
        />
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Submit Answers
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


