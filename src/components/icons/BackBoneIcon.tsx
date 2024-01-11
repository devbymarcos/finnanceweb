"use client";
import { useStore } from "@/hooks/useStore";

const BackBoneIcon = () => {
  const dark = useStore((state) => state.dark);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color={dark ? "#f8f8f8" : "#1c1d21"}
      >
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    </>
  );
};

export default BackBoneIcon;
