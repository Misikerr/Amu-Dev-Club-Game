# Amu-Dev-Club Game Project✌️ 12

This project is built to engage our community in a fun and interactive way. It is a web-based game that uses Node.js to store and manage game data on a server. Initially, the game relied on local storage for saving card data, but now it uses a backend for better persistence.

## Features

- Interactive game interface
- Card storage on a server using Node.js
- Open-source for contributions and improvements

## Hosting and Deployment

The project is hosted on **Render**: 

- The **frontend** is deployed as a **static site**.
- The **backend** (Node.js) is deployed as a **web service**.

## How It Works

Admin Panel Security:

- The admin panel is secure to ensure only authorized users can manage the game.
- The admin password is set on the user side using JavaScript for local validation.
- Future improvements will include shifting the password validation to the server side for better security and control.
- Password: "@Card"
  
Player Panel:

- Players can guess the given card from anywhere at any time.
- Before making a guess, the player must choose a provider.
- If the player guesses the card correctly, the card is automatically redeemed and will be redirected to the player’s phone log.
- If the correct provider was selected and the guess was accurate, the redemption is successful.
  
Provider Mismatch:

- If a player guesses the card correctly but selects a different provider, the card will not be redeemed and the redemption will fail.
However, if another player chooses the correct provider and guesses the card correctly (even if after the first player), they will receive the card and be able to redeem it, provided the provider is the same.

## Limitations

- Since Render has limitations on free-tier services, the stored card data does not persist indefinitely. It may reset when the service restarts.
- The backend does not currently use a database. Future improvements could include database integration for better data persistence.

## Contribution

This project is **open-source**, meaning anyone can:

- Improve the game mechanics
- Fix bugs and optimize the backend
- Use it for their own purposes

## Installation (For Local Development)

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/AmuDevClubGame.git
   cd AmuDevClubGame
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the server:
   ```sh
   node server.js
   ```
4. Open the `index.html` file in a browser.

## Future Improvements

- Use a database (e.g., MongoDB, Firebase) to store card data persistently.
- Add authentication for user-specific cards.
- Improve UI/UX for better engagement.

## Special Note

> The main goal of this project is to encourage our community to engage with technology and innovation. It is not about technical perfection but about the **idea and creativity** behind it. Everyone is welcome to contribute and make it better!

---

Built with ❤️ for the community by Misiker Genene(Rio✌)!

