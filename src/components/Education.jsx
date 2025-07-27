import { useState } from 'react'

export default function Education({canEdit}){

    const [ schoolInfo, setSchoolInfo ] = useState({
        school: '',
        major: '',
        dates: ''
    }) 

    const [isEditing, setIsEditing ] = useState(true)

    function handleClick(){
        setIsEditing(true)
    }

    function handleSubmit(){
        setIsEditing(false)
    }

    return (
        <>
        {
            isEditing 
        ? <form onSubmit={handleSubmit}>
            <div className='education-group'>
                <label htmlFor="school">School Name</label>
                <input type="text" name='school' id='school' required
                value={schoolInfo.school}
                onChange={e => setSchoolInfo({...schoolInfo, school: e.target.value})}
                />
            </div>
            <div className="education-group">
                <label htmlFor="major">Major</label>
                <input type="text" name='major' id='school' required
                value={schoolInfo.major}
                onChange={e => setSchoolInfo({...schoolInfo, major: e.target.value})} />
            </div>
            <div className="education-group">
                <label htmlFor="dates">Graduation Year</label>
                <input type="number" name='dates' id='dates' min='1900' max='2050' required
                value={schoolInfo.dates}
                onChange={e => setSchoolInfo({...schoolInfo, dates: e.target.value})} />
            </div>
            <button type="submit">Submit</button>
        </form>
    
    :    <div>
            <p>{schoolInfo.school}</p>
            <p>{schoolInfo.major}</p>
            <p>Gradutation Year: {schoolInfo.dates}</p>
            {canEdit && <button type="submit" onClick={handleClick}>Edit</button>}
        </div>
        
     
        }
        </>
    )

}