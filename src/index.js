import React from 'react';
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zkSync,
  hardhat,
  bsc,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';

import Table from './components/Table';
import Cards from './components/Cards';
import Layout from './components/layout';

const { chains, publicClient } = configureChains(
  [bsc, mainnet, optimism, arbitrum],
  [
    // alchemyProvider({ apiKey: 'ZbcJUctTzRg0qySTHx0jmolpmxP-5V3g' }),
    publicProvider(),
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        https: `https://bsc-dataseed.binance.org/`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'youbuidlAdmin',
  projectId: 'f8cdf9510d5c0964ea87d2919b02da10',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
      
//       {
//         path: '/',
//         element: <Table />,
//       },
//       {
//         path: '/cards',
//         element: <Cards />,
//       }
     
//     ],
//   },
// ]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
createRoot(document.getElementById('root')).render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      {/* <RouterProvider router={router} /> */}
      <App/>
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ();
