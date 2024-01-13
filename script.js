/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let f=function(ele){
        if(ele["profession"]=="developer"){
            console.log(ele["name"]);
        }
        
    }
    arr.map(f);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let f=function(ele){
        if(ele["profession"]=="developer"){
            console.log(ele["name"]);
        }
        
    }
    arr.forEach(f);
  }
  
  function addData() {
    //Write your code here, just console.log
    let employee={
        id:"4",
        name:"kartik",
        age: "22",
        profession: "delveloper"
    };
    arr.push(employee);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log

        let f=function(ele,id){
            if(ele["profession"]=="admin"){
                delete arr[id];
            }
            
        }
      arr.forEach(f);
      }

  
  function concatenateArray() {
    //Write your code here, just console.log
  let arr2=[
    {id:5,name:"saumya,", age: "22", profession:"malkin"},
    {id:6,name:"nikhil,", age: "32", profession:"business"},
    {id:7, name:"shalu", age: "22", profession:"makeup-artist"}
  ];
  console.log(arr.concat(arr2));
  
  }