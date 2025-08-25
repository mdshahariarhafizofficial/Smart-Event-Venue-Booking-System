import React from "react";
import { Button } from "./components/ui/button"; // relative path ঠিক করো
import "./index.css";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Button>Test Shadcn Button</Button>
    </div>
  );
}
