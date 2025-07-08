function isLucky(num) {
  return num % 7 === 0;
}

function printSeparator(i) {
  if (i % 5 === 0) console.log('---');
}

function printRandomNumber(i) {
  const rand = Math.floor(Math.random() * 100) + 1;
  let line = `${i}: ${rand}`;
  if (isLucky(rand)) line += ' - Lucky number!';
  console.log(line);
}

export function run() {
  for (let i = 1; i <= 100; i++) {
    printRandomNumber(i);
    printSeparator(i);
  }
}

run();