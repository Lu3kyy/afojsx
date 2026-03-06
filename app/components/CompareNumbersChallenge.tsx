"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function CompareNumbersChallenge() {
  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("0");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const qs = new URLSearchParams({ number1, number2 }).toString();
      const text = await callChallengeApi(
        `/api/challenge/AddingTwoNumbers/compare?${qs}`,
      );
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
        <Label htmlFor="compare-number1">First Number</Label>
        <TextInput
          id="compare-number1"
          type="number"
          value={number1}
          onChange={(event) => setNumber1(event.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="compare-number2">Second Number</Label>
        <TextInput
          id="compare-number2"
          type="number"
          value={number2}
          onChange={(event) => setNumber2(event.target.value)}
        />
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Compare
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


