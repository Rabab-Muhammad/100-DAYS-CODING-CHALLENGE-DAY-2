//       100 DAYS OF CODING CHALLENGE
//             "Day 2 challenge:start coding"
//Q1)Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//    Your output should look something like the following, including the quotation marks:
//     "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
console.log("Nelson Mandale once said,", '"It always seems impossible until its done."');
//Q2) Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
//    Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Nelson Mandela";
var message = "Once said, 'It always seems impossible until its done.'";
console.log(famous_person, message);
//Q3)Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//   Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed.
//   Then print the name after stripping the white spaces.
var whiteSpace = "\n\tRabab Muhammad\n\t";
console.log(whiteSpace);
var without_white_space = whiteSpace.trim();
console.log(without_white_space);
