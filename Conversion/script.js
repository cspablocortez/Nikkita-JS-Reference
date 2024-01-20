function convert(e) {
    const elementID = e.id;                                                      // this gives us only the ID
    const degrees = document.getElementById(elementID).value;                    // this is giving us the number currently typed in
    console.log(`${degrees} input from ${elementID}.`);                          // string interpolation 
}