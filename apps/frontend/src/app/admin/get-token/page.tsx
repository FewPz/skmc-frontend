"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const handleGenerateKey = async () => {
    try {
      const response = await axios.post("http://localhost:3001/v1/api/keygen", {
        count: count,
      });
      setData(response.data.keys);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen">
      <Container>
        <div className="w-full max-w-md mx-auto mt-10">
          <div className="bg-white rounded-xl shadow-md p-10 border">
            <div className="flex flex-col items-center gap-y-6">
              <h1 className="text-5xl font-mc text-customBlack">
                Key Generator
              </h1>
              <Input
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
                type="number"
                placeholder="Enter a number of key."
                className="text-customBlack"
              />
              <Button
                onClick={handleGenerateKey}
                variant="default"
                className="font-mc w-full"
              >
                Generate Key
              </Button>
              <Table />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
