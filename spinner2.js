const spinnerCharacters = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "]
let timeOut = 100

for (const character of spinnerCharacters) {
  setTimeout(() => process.stdout.write(character), timeOut)
  timeOut += 200
}