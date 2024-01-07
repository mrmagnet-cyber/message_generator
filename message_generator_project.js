let messages = ["Believe in your potential, for within you lies the power to achieve greatness.", 
"Embrace challenges as stepping stones toward your success story.", 
"Your resilience defines you more than your setbacks ever will.",
"In every setback, find a lesson. In every success, find gratitude.",
"Small steps forward every day lead to significant progress over time.",
"Dare to dream big, and then work tirelessly to turn those dreams into reality.",
"Your attitude determines your direction; choose positivity and perseverance.",
"Cherish every moment, for each holds the possibility of transformation.",
"Be the light in someone's darkness; kindness has the power to change lives.",
"Your journey is unique—embrace it, learn from it, and let it inspire others."];


const messageGenerator = () => {
    let random = Math.floor(Math.random() * 10);

    switch (random){
        case 0:
            console.log(messages[0]);
            break;

        case 1:
            console.log(messages[1]);
            break;
            
        case 2:
            console.log(messages[2]);
            break;  
                
        case 3:
            console.log(messages[3]);
            break;

        case 4:
            console.log(messages[4]);
            break;

        case 5:
            console.log(messages[5]);
            break;

        case 6:
            console.log(messages[6]);
            break;
        
        case 7:
            console.log(messages[7]);
            break;

        case 8:
            console.log(messages[8]);
            break;

        case 9:
            console.log(messages[9]);
            break;
    }
}

messageGenerator();

