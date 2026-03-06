"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function ReverseNumbersChallenge() {
  const [number, setNumber] = useState("12345");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const text = await callChallengeApi(`/api/challenge/ReverseNumbers/${number}`);
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
        <Label htmlFor="reverse-number">Number</Label>
        <TextInput
          id="reverse-number"
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Reverse Number
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


