const spinParts = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let counter = 100;
for (let ch of spinParts) {
  setTimeout(() => {
    let temp = '\r' + ch + "    ";
    process.stdout.write(temp);
  }, counter);
  counter += 200;
}