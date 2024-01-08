let inspiration = [
    "Believe in your potential, for within you lies the power to achieve greatness.", 
    "Embrace challenges as stepping stones toward your success story.", 
    "Your resilience defines you more than your setbacks ever will.",
    "In every setback, find a lesson. In every success, find gratitude.",
    "Small steps forward every day lead to significant progress over time.",
    "Dare to dream big, and then work tirelessly to turn those dreams into reality.",
    "Your attitude determines your direction; choose positivity and perseverance.",
    "Cherish every moment, for each holds the possibility of transformation.",
    "Be the light in someone's darkness; kindness has the power to change lives.",
    "Your journey is unique—embrace it, learn from it, and let it inspire others."];

let starSign = ["The Ram", 
    "The Bull",
    "The Twins",
    "The Crab",
    "The Lion",
    "The Virgin",
    "The Scales",
    "The Scorpion",
    "The Archer",
    "The Sea-Goat",
    "The Water Bearer",
    "The Fish"];

let joke = [
    "Why don't we ever see elephants hiding in trees? Because they're so good at it!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How do you organize a space party? You planet!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How does a penguin build its house? Igloos it together!",
    "What did one hat say to the other hat? You stay here, I’ll go on ahead!",
    "Why don't skeletons fight each other? They don't have the guts!"
    ];

    let random = Math.floor(Math.random() * 10);


  const messageGenerator = () => {
    console.log(`Ahhh, Welcome "${starSign[random]}", to the Guru Maraji, I know what brings you here and here is my solution for you: ${inspiration[random]} and here is a joke to gladen thy heart: ${joke[random]}`);
  } 

  messageGenerator();
