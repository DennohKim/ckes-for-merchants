

# MerchantPay

## cKES Mento Hackathon 2024

MerchantPay is a decentralized payment system built on the Celo blockchain, designed to empower merchants in Kenya with efficient, transparent, and accessible financial tools.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Smart Contracts](#smart-contracts)
- [Frontend](#frontend)
- [Testing](#testing)
- [Deployment](#deployment)

## Features

- Create and manage product listings
- Accept payments in cKES (Celo Kenyan Shilling)
- Real-time transaction status updates
- Automatic fee deduction for the platform
- User-friendly interface for merchants and customers

## Technologies Used

- Solidity (Smart Contracts)
- Hardhat (Ethereum development environment)
- React (Frontend)
- Next.js (React framework)
- TypeScript
- Wagmi (React Hooks for Ethereum)
- Ethers.js (Ethereum library)
- Prisma (ORM)
- RainbowKit (Web3 integration)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MetaMask or another Web3 wallet

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/DennohKim/ckes-for-merchants
   cd merchantpay
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both the root and `frontend` directories
   - Fill in the required values in both `.env` files

4. Compile smart contracts:
   ```
   npx hardhat compile
   ```

5. Start the development server:
   ```
   cd frontend
   npm run dev
   ```

## Project Structure

- `/hardhat`: Smart contract development, tests, and deployment scripts
- `/frontend`: Next.js frontend application
- `/frontend/src/actions`: Server-side actions for listing management
- `/frontend/src/helpers`: Utility functions
- `/frontend/src/icons`: Custom icon components

## Smart Contracts

The main smart contract for this project is `MerchantPay.sol`. It handles the creation of listings, payments, and status management.

To deploy the smart contracts:

```
npx hardhat run scripts/deploy.js --network alfajores
```

Replace `<your-network>` with the desired network (e.g., alfajores, celo-mainnet).

## Frontend

The frontend is built with Next.js and can be found in the `frontend` directory. To run the development server:

```
cd frontend
npm run dev
```

## Testing

Run the test suite for smart contracts:

```
npx hardhat test
```

For frontend tests:

```
cd frontend
npm run test
```

## Deployment

1. Deploy smart contracts to the Celo network (see Smart Contracts section)
2. Build the frontend:
   ```
   cd frontend
   npm run build
   ```
3. Deploy the frontend to your preferred hosting service (e.g., Vercel, Netlify)



