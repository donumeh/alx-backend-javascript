/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Teacher.ts" />


namespace Subjects {

    const cpp = new Subjects.Cpp();
    const java = new Subjects.Java();
    const react = new Subjects.React();
    
    
    const cTeacher: Teacher = {
        firstName: "David",
        lastName: 'Adeleke',
        experienceTeachingC: 10
    }
    
    cpp.setTeacher = cTeacher;
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    
    console.log('Java');
    java.setTeacher = cTeacher;
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    
    console.log('React');
    react.setTeacher = cTeacher;
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}
