/*[ 
] 
{ name: "Alice", team: "A" }, 
{ name: "Bob", team: "B" }, 
{ name: "Charlie", team: "A" } 
// Output: 
{ 
} 
A: [{ name: "Alice"}, { name: "Charlie"}], 
B: [{ name: "Bob" }]*/


function formatData(data) {
    let formatteddata=data.reduce((acc,curr)=>{
   if(!acc[curr["team"]]){
    acc[curr["team"]]=[];
   }
   let {team,...rest} = curr;
   acc[curr["team"]].push(rest);
   return acc;
},{});
   return formatteddata;    
}

console.log("formattedData>>>", formatData([
    { name: "Alice", team: "A" },
    { name: "Bob", team: "B" },
    { name: "Charlie", team: "A" }
])); // { A: ["Alice", "Charlie"], B: ["Bob"] } 