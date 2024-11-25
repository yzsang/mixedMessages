const messageComponents = {
    destinations: ['the snowy peaks of the Alps', 'a hidden beach in Bali', 'the ancient ruins of Machu Picchu', 'the vibrant streets of Tokyo', 'a serene forest in Canada'],
    activities: ['hiking to breathtaking views', 'savoring local cuisine', 'exploring cultural landmarks', 'immersing in the nightlife', 'relaxing and unwinding'],
    tips: ['pack light and smart', 'bring a good camera', 'learn a few local phrases', 'stay open to unexpected adventures', 'keep a travel journal']
}

const generateMessage = () => {
  const{destinations, activities, tips} = messageComponents;
  const destination = destinations[Math.floor(Math.random()*destinations.length)];
  const activity = activities[Math.floor(Math.random()*activities.length)];
  const tip = tips[Math.floor(Math.random()*tips.length)];

  return `Your next adventure is at ${destination}, where you can enjoy ${activity}. Remember to ${tip}!`;
}

const displayMessage = () => {
    const asciiArt = `
      ╭━━━━━━━╮
      ┃  🗺️   LET'S   ┃
      ┃  ✈️  EXPLORE! ┃
      ╰━━━━━━━╯
     🌟  🌍   🏕️   🌟
    `;
    
    console.log(asciiArt); // Display ASCII art
    console.log(generateMessage()); // Display the message
}
displayMessage()

