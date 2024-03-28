
 function SkillComponent({skills}){
    // console.log(skills);
    return(
        <>
        <h3>Skills</h3>
        <hr />
        <ul>
            {skills.map((skill,index) => <li key={index}>{skill}</li>)}
        </ul>
        
        </>
    )
   
}

 function EducationComponent({education}){
    // console.log(education)
    
    return(
        <>
        <hr />
            <h3>Education</h3>
            <hr />
            <ul>
                {education.map((education,index) => <li key={index}>{education.graduation} - {education.passingYear} - {education.result}</li>)}
            </ul>
           
        </>
    )
}

function ExperienceComponent({experience}){
    // console.log(experience)
    
    return(
        <>
        <hr />
            <h3>Experience</h3>
            <hr />
            <ul>
                {experience.map((exp,index) => <li key={index}>{exp.year} - {exp.company} - {exp.role}</li>)}
            </ul>
        </>
    )
}
export function ResumeBuilder({resume}) {
//    console.log(resume);
    const {experience, education, skills} = resume//object destructuring
    // console.log(experience)
    return(
        <>
        <h1>Resume</h1>
        <h2>Abhishek Ram</h2>
        <hr />

        <SkillComponent skills = {skills}/>
        <EducationComponent education = {education}/>
        <ExperienceComponent experience = {experience}/>
        </>
    )
}


