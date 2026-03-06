"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function OddOrEvenChallenge() {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const text = await callChallengeApi(`/api/challenge/OddOrEven/${number}`);
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
        <Label htmlFor="odd-even-number">Number</Label>
        <TextInput
          id="odd-even-number"
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Check Number
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


