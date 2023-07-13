import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import { removeUser } from '../redux/slices/userSlice'


const DisplayUser = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.users)
    console.log(data)

    const deleteSingleUser = (idx) => {

        dispatch(removeUser({ idx }))
    }


    return (
        <>
            <div style={{ margin: '10px 10%' }}>
                <ul  >
                    {
                        data.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '20px',
                            }}>
                                {item}
                                <button
                                    onClick={() => { deleteSingleUser(idx) }}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <MdDeleteForever fontSize={'30px'} color='red' />
                                </button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}


export default DisplayUser