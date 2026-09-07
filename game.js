const VER="v23";
const SAVE="jewels-cafe-save";
const OLD_SAVES=["jewels-cafe-save","jewels-v16","jewels-v15","jewels-v10","jewels-v5"];
const ASSET="https://jewels-cafe.netlify.app/";
const ARTS=[ASSET+"cust1.png",ASSET+"cust2.png",ASSET+"cust3.png",ASSET+"cust4.png"];
const NAMES=["Mia","Gus","Pip","Shel"];
const JOBS=["front counter","bowtie regular","night baker","slow sipper"];
const HEROES=[
  {id:ASSET+"chef.png",label:"Chef Jewel"},
  {id:ASSET+"cust1.png",label:"Mia"},
  {id:ASSET+"cust3.png",label:"Pip"},
  {id:ASSET+"cust2.png",label:"Gus"},
  {id:ASSET+"cust4.png",label:"Shel"}
];
const DIFFS=[{id:"easy",label:"Easy"},{id:"normal",label:"Normal"},{id:"challenge",label:"Challenge"}];
function O(type,section,p,w,why,trap){return {type,section,p,w,why,trap}}
