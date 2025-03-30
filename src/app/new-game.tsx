import { StyleSheet, View } from "react-native";
import { startGame } from "../scripts";
import Card, { CardProps } from "../components/card";
import { useEffect, useState } from "react";
import GameOver from "../components/gamer-over";

export default function Game({ initialGameComplete = false }) {
  const [cards, setCards] = useState(startGame());
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [gameComplete, setGameComplete] = useState(initialGameComplete);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleCardPress = (index: number) => {
    // Não faz nada se:
    // - Já tem 2 cartas viradas
    // - Carta já está virada
    // - Jogo está desabilitado (durante animação)
    if (flippedIndices.length === 2 || cards[index].flipped || disabled) return;

    // Virar a carta
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    // Quando virar a segunda carta
    if (newFlippedIndices.length === 2) {
      setMoves(moves + 1);
      checkForMatch(newFlippedIndices);
    }
  };

  const checkForMatch = (indices: number[]) => {
    setDisabled(true);
    const [firstIndex, secondIndex] = indices;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    if (firstCard.icon === secondCard.icon) {
      // Cartas combinam - marca como matched
      setTimeout(() => {
        const matchedCards = [...cards];
        matchedCards[firstIndex].matched = true;
        matchedCards[secondIndex].matched = true;
        setCards(matchedCards);
        setFlippedIndices([]);
        setDisabled(false);
      }, 1000);
    } else {
      // Cartas não combinam - vira de volta
      setTimeout(() => {
        const resetCards = [...cards];
        resetCards[firstIndex].flipped = false;
        resetCards[secondIndex].flipped = false;
        setCards(resetCards);
        setFlippedIndices([]);
        setDisabled(false);
      }, 1000);
    }
  };

  // Verificação de vitória
  useEffect(() => {
    const unmatchedCards = cards.filter((card) => !card.matched);
    if (unmatchedCards.length === 0 && cards.length > 0) {
      setGameComplete(true);
    }
  }, [cards]);

  return (
    <View style={styles.container}>
      <View style={styles.gameBoard}>
        {cards.map((card, index) => {
          return (
            <Card
              onPress={() => handleCardPress(index)}
              key={card.id}
              id={card.id}
              icon={card.icon}
              flipped={card.flipped}
              matched={card.flipped}
            />
          );
        })}
        {gameComplete && <GameOver />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#c7cdd3",
    color: "#ddd",
  },

  gameBoard: {
    maxWidth: 600,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    gap: 20,
  },

  newGameButton: {
    width: 352,
    height: 52,
    backgroundColor: "#F7DD43",
    alignItems: "center",
    justifyContent: "center",
  },

  newGameText: {
    color: "#09090A",
    fontSize: 16,
    fontWeight: "bold",
  },
});
