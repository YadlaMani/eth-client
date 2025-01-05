import React from "react";
import { useReadContract } from "wagmi";
import { ABI } from "./abi";

const Contract = () => {
  const { data, isLoading, error } = useReadContract({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    abi: ABI,
    functionName: "totalSupply",
  });
  return (
    <div>
      <h1>Total supply-{data?.toString()}</h1>
    </div>
  );
};

export default Contract;
