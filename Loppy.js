for (let i = 100; i <= 200; i++) {
  let output = '';

  if (i % 3 === 0) {
    console.log("Loppy");
  }
  if (i % 4 === 0) {
    console.log("Lighthouse");
  }
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("Loppy Lighthouse");
  }
} 