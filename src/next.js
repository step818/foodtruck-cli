export async function next(args) {
  console.log("args: " + args);
  let table = args;
  table = takeTen(table);
  function takeTen(table) {
    console.log(table.slice(11,21).toString());
  }
}