import { useState } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletOptions from "./WalletOptions";
import Account from "./Account";
function App() {
  const [count, setCount] = useState(0);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={new QueryClient()}>
        <WalletOptions />
        <Account />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
