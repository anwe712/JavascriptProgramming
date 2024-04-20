// Program Question: Secret Santa Randomizer

// You are tasked with creating a Secret Santa randomizer program to assign gift-givers to recipients. The program should take an array of names as input and randomly pair each person with another, ensuring that no one is assigned to give a gift to themselves. Additionally, no person should be assigned to give a gift to the same recipient as the previous year (if applicable). Finally, the program should output the pairings in a readable format.

// Requirements:

// Create a function called assignSecretSanta that takes an array of names as input.
// Implement a random pairing algorithm to assign each person in the array as a gift-giver to another person in the array.
// Ensure that no person is assigned to give a gift to themselves.
// If possible, ensure that no person is assigned to give a gift to the same recipient as the previous year (you can simulate this by storing and checking previous pairings in a separate data structure).
// Output the pairings in a readable format, such as "Person A gives a gift to Person B".
// Example Input:
// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Example Output:

// Alice gives a gift to Charlie
// Bob gives a gift to David
// Charlie gives a gift to Alice
// David gives a gift to Eve
// Eve gives a gift to Bob

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

