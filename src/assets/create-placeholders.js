const fs = require('fs');
const path = require('path');

// List of image files we need to create
const imageFiles = [
  'profile.png',
  'doctor.png',
  'breakfast.png',
  'lunch.png',
  'dinner.png',
  'snack.png',
  'water.png',
  'diet-plan.png',
];

// Create a 1x1 transparent PNG file (minimal placeholder)
// This is just a base64 encoded 1x1 transparent PNG
const transparentPixel = require('buffer').Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  'base64'
);

// Create each placeholder image
imageFiles.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, transparentPixel);
  console.log(`Created placeholder: ${filename}`);
});

console.log('All placeholder images created successfully!');
