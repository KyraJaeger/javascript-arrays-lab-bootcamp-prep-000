var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

 function appendKitten(name) {
    return kittens.concat(name);
 }
 
 function prependKitten(name) {
   const cat = [name]
   return cat.concat(kittens);
 }


function removeLastKitten(name) {
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}

// Add your functions and code here
