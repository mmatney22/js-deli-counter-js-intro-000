var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line) {
  return line[0];
  if (katzDeliLine > 0) {
    katzDeliLine.slice(1)
  } else {
   return "There is nobody waiting to be served!";
 }
}

function currentLine(line) {
  while
}
