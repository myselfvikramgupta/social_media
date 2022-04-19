import React from 'react'
import  Sidebar from './../Sidebar'
import  Post from './Post'
const HomePage = () => {
    return (
        <div className='container'>
            <div className="main d_flex_space_between">
                <div className='row'>
                    <div className='col-3'>
                        <Sidebar />
                    </div>
                    <div className='col-6'>
                        <Post />
                    </div>
                    <div className='col-3'>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage