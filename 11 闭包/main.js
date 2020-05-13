function user(name){    //先定义一个参数name
  var age,sex;     //还有age sex参数
  return {
    getName: function(){
      return name;
    },
    setName: function(newName){
      name=newName;
    },
    getAge: function(){
      return age;
    },
    setAge: function(newAge){
      age=newAge;
    },
    getSex: function(){
      return sex;
    },
    setSex: function(newSex){
      sex=newSex;
    }
  }
}


var hjj = user('何娟娟');
var name = hjj.getName();
console.log('name:',name);
