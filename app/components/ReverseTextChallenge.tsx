"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function ReverseTextChallenge() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const qs = new URLSearchParams({ input }).toString();
      const text = await callChallengeApi(`/api/challenge/Reverse?${qs}`);
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
        <Label htmlFor="reverse-input">Text To Reverse</Label>
        <TextInput
          id="reverse-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="hello"
        />
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Reverse Text
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


