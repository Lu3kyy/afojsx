"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function Magic8BallChallenge() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const qs = new URLSearchParams({ question }).toString();
      const text = await callChallengeApi(`/api/challenge/Magic8Ball?${qs}`);
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
        <Label htmlFor="question">Ask A Question</Label>
        <TextInput
          id="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Will I ace this project?"
        />
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Shake 8 Ball
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


