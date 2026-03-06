"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function GuessItChallenge() {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const qs = new URLSearchParams({ number }).toString();
      const text = await callChallengeApi(`/api/challenge/GuessIt?${qs}`);
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
        <Label htmlFor="guess-number">Your Guess</Label>
        <TextInput
          id="guess-number"
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Submit Guess
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


