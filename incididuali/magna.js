function createProjection(scale, offsetX, offsetY) {
  // Return a projection function
  return function(lambda, phi) {
    // Convert degrees to radians
    let lambdaRad = lambda * Math.PI / 180;
    let phiRad = phi * Math.PI / 180;

    // Apply some transformation (this is just an example)
    let x = scale * lambdaRad + offsetX;
    let y = scale * phiRad + offsetY;

    return [x, y];
  };
}

// Usage
let projection = createProjection(100, 500, 300);

// Project a point with longitude and latitude
let coords = projection(-74.0060, 40.7128); // NYC coordinates

console.log(coords); // Output will be the transformed coordinates
