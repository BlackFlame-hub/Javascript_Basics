document.addEventListener("DOMContentLoaded", () => {
  const userName = prompt("What is yo name?");
  alert(`Hello, ${userName}!`);

  const currentYear = 2025;
  const birthYear = prompt("What is your birth year?");
  const age = currentYear - birthYear;
  alert(`You are ${age} years old!`);

  const squareSide = prompt(
    "Enter the length of the side of a square (a number)."
  );
  const squarePerimeter = squareSide * 4;
  alert(`Your square perimeter is ${squarePerimeter}.`);

  const circleRadius = prompt("Enter the radius of the circle");
  circleArea = Math.PI * Math.pow(circleRadius, 2);
  alert(`The are of the circle is ${circleArea.toFixed(3)} square units.`);

  const distance = prompt(
    "What is the distance in Km between your departure and destination?"
  );
  const time = prompt(
    "How many hours do you have available to cover this distance?"
  );
  const speed = distance / time;
  alert(`You need to travel at a speed of ${speed.toFixed(2)} km/h.`);

  const userName2 = prompt("What was your name again?");
  const userAge = prompt("What did you say your age is?");
  const userCountry = prompt("What is your country of origin?");
  console.log(
    `%cName: %c${userName2}`,
    "color: blue",
    "color: red; background-color: rgba(43, 21, 21, 0.13); border: 3px solid rgba(0, 0, 0, 0.25); border-radius: 3px"
  );
  console.log(
    `%cAge: %c${userAge}`,
    "color: lightblue",
    "color: red; background-color: rgba(43, 21, 21, 0.13); border: 3px solid rgba(0, 0, 0, 0.25); border-radius: 3px"
  );
  console.log(
    `%cCountry: %c${userCountry}`,
    "color: rgba(206, 128, 128, 0.58)",
    "color: brown; background-color: rgba(43, 21, 21, 0.13); border: 3px solid rgba(0, 0, 0, 0.25); border-radius: 3px"
  );

  const question = [
    "What's your favorite color?",
    "What's your favorite food?",
    "What's your favorite hobby?",
    "What's your favorite sport?",
    "What's your favorite book?",
    "What's your favorite movie?",
    "What's your favorite animal?",
    "What's your favorite vacation final destination?",
    "What's your favorite season?",
    "What's your favorite music genre?",
  ];
  const answer = question.map((question) => prompt(question));
  alert(`Your answers: \n${answer.join("\n")}`);

  const futureAge = [2025, 2029, 2050].map((year) => year - birthYear);
  console.log(`Your age in 2025: ${futureAge[0]}`);
  console.log(`Your age in 2029: ${futureAge[1]}`);
  console.log(`Your age in 2050: ${futureAge[2]}`);
});
