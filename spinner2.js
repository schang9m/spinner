
// ... fill in the rest yourself ...

let angle = 0
const spinner = () => {
  if (angle === 0) {
    process.stdout.write('\r|   ');
    angle++;
    setTimeout(spinner, 100);
  } else if (angle === 1) {
    process.stdout.write('\r/   ');
    angle++;
    setTimeout(spinner, 200);
  } else if (angle === 2) {
    process.stdout.write('\r-   ');
    angle++;
    setTimeout(spinner, 200);
  } else if (angle === 3) {
    process.stdout.write('\r\\   ');
    angle++;
    setTimeout(spinner, 200);
  } else {
    process.stdout.write('\r|   ');
    angle++;;
    clearInterval(spinner);
  }
}
spinner();
