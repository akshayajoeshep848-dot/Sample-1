let i = 0;
console.log(i);
while (i <= 10) {
  console.log(i);
  if (i % 2 == 0) {
    i++;
    continue;
  } else {
    console.log(`printing: ${i}`);
  }
  i++;
}
