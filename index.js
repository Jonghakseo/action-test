console.log("hello world");

const a = "123"

const [one, two, three] = a.split("")

if(one < two){
  throw Error("wtf")
}
