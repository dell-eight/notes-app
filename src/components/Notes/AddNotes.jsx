import React, {useState} from 'react'


const AddNotes = ({addNewNote}) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 200;

    const handleChange = (e) => {
        if (charLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }

    const handleOnClick = () => {
        if (noteText.trim().length > 0) {
            addNewNote(noteText);
            setNoteText('')
        } else alert('Note is empty!');
    }

    return (
        <div className='bg-blue-300 rounded h-80 px-8 py-5 flex flex-col justify-between divide-y divide-blue-400 dark:bg-blue-500'>
            <textarea className='md:text-xl sm:text-lg resize-none outline-none container-snap h-full bg-transparent' onChange={handleChange} value={noteText} placeholder='Add a note here!'/>
        <div className='flex items-center justify-between '>
                <h3 className='text-base mt-4'>{charLimit - noteText.length} remaining</h3>
            <button className='text-base mt-4 py-1 md:px-7 sm:px-5 bg-yellow-300 rounded-full hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-400' onClick={handleOnClick}>Save</button>
        </div>
    </div>
    )
}

export default AddNotes