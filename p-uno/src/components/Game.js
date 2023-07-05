import React, { useState, useEffect } from "react";
import createDeck from "../functions/createDeck";

function Game() {
  const [players, setPlayers] = useState([{ name: "Player 1", hand: [] }]);
  const [deck, setDeck] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [initialDeck, setInitialDeck] = useState([]);


  useEffect(() => {
    const newDeck = createDeck();
    setInitialDeck(newDeck);
    setDeck(newDeck);
    setDiscardPile([]);
  }, []);

  
  function nextPlayer() {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
  }
  function firstDraw() {
    setPlayers((prevPlayers) => {
      const newPlayers = prevPlayers.map((player) => {
        const newHand = [];
        for (let i = 0; i < 7; i++) {
          newHand.push(deck.pop());
        }
        return { ...player, hand: newHand };
      });
      return newPlayers;
    });
  }

  function drawCards(playerIndex, amount) {}
  
  function startGame() {
    shuffleCards();
    setTimeout(() => {
      firstDraw();
      console.log(players[0].hand);
    }, 0);
  }
  

  function shuffleCards() {
    const shuffledArray = [...initialDeck];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setDeck(shuffledArray);
  }



  return (
    <div>
      <button onClick={startGame}>test</button>
    </div>
  );
}

export default Game;
