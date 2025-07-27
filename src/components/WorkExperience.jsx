import {useState} from 'react'

export default function WorkExperience({canEdit}){

    const [experience, setExperience ] = useState({
        companyName: '',
        positionTitle: '',
        responsibilities: [],
        startDate: '',
        endDate: ''
    })

    const [responsibility, setResponsibility ] = useState('')

    const [isEditing, setIsEditing ] = useState(true)

    function handleResponsibility(e){
        e.preventDefault();
        if (responsibility.trim() === '') return;

        setExperience(prev => ({
            ...prev,
            responsibilities: [...prev.responsibilities, responsibility]
        }))

        setResponsibility('')
    }

    function handleClick(){
        setIsEditing(true)
    }

    function handleSubmit(){
        setIsEditing(false)
    }


    return (
        <>
            {isEditing ? 
            <form onSubmit={handleSubmit}>
                <div className="experience-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" name='companyName' id='companyName' required
                    value={experience.companyName}
                    onChange={e => setExperience({...experience, companyName: e.target.value})} />
                </div>
                <div className="experience-group">
                    <label htmlFor="positionTitle">Position Title</label>
                    <input type="text" name='positionTitle' id='positionTitle' required
                    value={experience.positionTitle}
                    onChange={e => setExperience({...experience, positionTitle: e.target.value})} />
                </div>
                <div className="experience-group">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input type="text" name='responsibilities' id='responsibilities' 
                    value={responsibility}
                    onChange={e => setResponsibility(e.target.value)} />
                    <button onClick={handleResponsibility}>Add Responsibility</button>
                </div>
                <div className='experience-group'>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="number" name='startDate' id='startDate' required
                    value={experience.startDate}
                    onChange={e => setExperience({...experience, startDate: e.target.value})} />
                </div>
                <div className="experience-group">
                    <label htmlFor="endDate">End Date</label>
                    <input type="number" name='endDate' id='endDate' required
                    value={experience.endDate}
                    onChange={e => setExperience({...experience, endDate: e.target.value})} />
                </div>
                <button type='submit'>Submit</button>
            </form>

           : <div>
                <h3>Company Name: {experience.companyName}</h3>
                <p>{experience.startDate}-{experience.endDate}</p>
                <p><b>Role: </b> {experience.positionTitle}</p>
                <h3>Responsibilities</h3>
                <ul>
                    {experience.responsibilities.map(item => <li>{item}</li>)}
                </ul>

                {canEdit && <button onClick={handleClick}>Edit</button>}
            </div>}

        
        </>
       
    //   <h1>practical experience(company name, position title, main responsibilities, date start/finish)</h1>
        
    )
}