import React from "react";
import { useConnect, useAccount } from "wagmi";

const WalletOptions = () => {
  const { connectors, connect } = useConnect();
  const account = useAccount();

  return (
    <>
      {connectors.map((connector) => (
        <button key={connector.id} onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
    </>
  );
};

export default WalletOptions;
