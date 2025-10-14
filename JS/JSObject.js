//console.log("HELLO");
const student={
   name:"ram",
   age:20,
   branch:"CSE-A",
   language:[{
    lang1:"java",
    lang2:"python"

   },
   {
    database1:"mysql",
    database2:"Oracle",
    database:"Mongodb"
   },
   {
    fm1:"Hibernate",
    fm2:"Spring"
   }
]
}

//console.log(student);
//console.log(student.language.lang1);
//console.log(student.language[1]);
//console.log(student["language"][1]);

student.college="ABES Engineering College";
console.log(student);
delete student.name;
console.log(student);