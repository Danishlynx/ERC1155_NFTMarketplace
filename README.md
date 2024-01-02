# Build ERC1155 token with a Frontend

Marketplace: [https://erc-1155-nft-marketplace.vercel.app/](https://erc-1155-nft-marketplace.vercel.app/)

Forging Contract: [Link](https://mumbai.polygonscan.com/address/0xc7c34897F9Ae55e364F90Cb06E09a4c3778e0533#writeContract)

ERC1155 Contract: [Link](https://mumbai.polygonscan.com/address/0xACa1b65cc7713DF5c1Fc96d4eC018DA8f6c8988c#code)

## Setup Backend

{
.env- Provide the following values:

 ALCHEMY_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

 PRIVATE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

 POLYGON_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxx
}

1. npx hardhat compile
2. npx hardhat run scripts/deploy.js --network polygon_mumbai
3. npx hardhat run scripts/verify.js --network mumbai( Verify the Game Collection contract first using the verify script by providing 4. the game collection address, later verify the Forger contract: Place the forger contract address and update the constructor argument with the game collection address.

## Setup Frontend
1. cd client
2. npm install
3. add a .env file with "POLYGONSCAN_API_KEY"
4. run "npm run dev"
5. Go to your browser at http://localhost:3000

## ERC1155 Concept - Game Items
Based on the Deliverables, this ERC1155 contract will be implemented in the form of game items as it will be easier to visualize in this manner.
- Token 0-2 will be raw materials.
- Token 3-6 will be equipments.

Sample Images of the Output:


![Screenshot 2023-12-08 200935](https://github.com/Danishlynx/metana_bootcamp/assets/69537135/a3bba700-caac-4d9a-a2ca-09e8b4cd748c)
![Screenshot 2023-12-08 200929](https://github.com/Danishlynx/metana_bootcamp/assets/69537135/d8090e4c-83a6-4430-9823-c0c3effa7618)
![Screenshot 2023-12-08 200916](https://github.com/Danishlynx/metana_bootcamp/assets/69537135/8e65b20c-8996-499d-b16e-17a73364cd57)
![Screenshot 2023-12-08 200810](https://github.com/Danishlynx/metana_bootcamp/assets/69537135/81111765-1ecb-4965-b9a5-8780b4edeb37)
![Screenshot 2023-12-08 200531](https://github.com/Danishlynx/metana_bootcamp/assets/69537135/8fc37ee3-ba9e-4148-9084-bae508b22fed)
![Screenshot 2023-12-08 200406](https://github.com/Danishlynx/metana_bootcamp/assets/69537135/db94461d-d5f9-4e18-a508-ab29b712b646)



## Deliverables
Integrating with metamask is fairly simple, much of the work this week will be on the front-end design. Here is what needs to be accomplished by the end:

There are three new concepts you must master:

1. Creating that transactions that return instantly (such as from a view or pure function)
2. Creating transactions that change the state of the blockchain and thus must be asynchronous. Dealing with an pending transactions is not trivial!
3. Changing the network of metamask to the appropriate one

You will build an ERC1155 token with a front-end. Here are the requirements:
- You must have a total of 7 tokens within the collection id [0-6]
- There is no supply limit for each token
- Anyone can mint tokens [0-2], but there is a 1-minute cooldown between mints. These are free to mint except for the gas cost.
- Token 3 can be minted by burning token 0 and 1.
- Token 4 can be minted by burning token 1 and 2
- Token 5 can be minted by burning 0 and 2
- Token 6 can be minted by burning 0, 1, and 2
- Tokens [3-6] cannot be forged into other tokens
- Tokens [3-6] can be burned but you get nothing back
- You can trade any token for [0-2] by hitting the trade this button.
- The process of burning and minting is called forging in this context.
- The webapp must tell the user how much matic they have (we will use the polygon network for cost savings)
- The webapp must tell the user how much of each token they have
- Provide a link to the OpenSea page somewhere
- <b>Important</b> if the website detects someone is not on the polygon network, it must prompt them to change and autofill the feeds for changing the network (lesson on this later)
- <b>Important</b> please use some styling on this website to make it look nice (bootstrap, tailwind CSS, etc). This is something you can show to future employers or business partners.
- You must use 2 separate contracts. One for the ERC1155 token, and one for the forging logic. The forging logic will need mint privileges.
