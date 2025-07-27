import { useState } from 'react'

export default function PersonalInfo({canEdit}){

    const [personalData, setPersonalData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    })

    const [isEditing, setIsEditing] = useState(true)

   

    function handleClick(){
        setIsEditing(true)
    }

    function handleSubmit(){
        setIsEditing(false)
    }

    return (
        <>
        { isEditing ?
             <form title='Personal Information' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' id='name' required
                    value={personalData.name}
                    onChange={e => setPersonalData({...personalData, name: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' id='email' required
                    value={personalData.email}
                    onChange={e => setPersonalData({...personalData, email: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type="tel" name='phoneNumber' id='phoneNumber' required
                    value={personalData.phoneNumber}
                    onChange={e => setPersonalData({...personalData, phoneNumber: e.target.value})} />
                </div>
                <div className="form-group">
                    <button type='submit'>Submit</button>
                </div>

            </form>
       

        : 
            <div>
                <div>
                    <h1>{personalData.name}</h1>
                    <p>Contact Info</p>
                    <h2>{personalData.phoneNumber}</h2>
                    <h3>{personalData.email}</h3>

                </div>
                {canEdit && <button onClick={handleClick}>Edit</button>}
            </div>
            
            }


        </>
    )
}