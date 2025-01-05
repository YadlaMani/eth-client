import { useState } from "react";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletOptions from "./WalletOptions";
import Account from "./Account";
import Contract from "./Contract";
import AllowUSDT from "./AllowUSDT";

function App() {
  const [count, setCount] = useState(0);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={new QueryClient()}>
        <div className="flex items-center justify-center h-screen">
          <AppContent />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
function AppContent() {
  const { address, isConnected } = useAccount();
  return isConnected ? (
    <div>
      <Account />
      <Contract />
      <AllowUSDT />
    </div>
  ) : (
    <WalletOptions />
  );
}
export default App;
