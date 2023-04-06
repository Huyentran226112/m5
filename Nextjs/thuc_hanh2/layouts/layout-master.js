import React from 'react';

function LayoutMaster({ children }) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'> <h1>Header</h1> </div>
                </div>
                <div className='row'>
                    <div className='col-4'> <h1>SideBar</h1> </div>
                    <div className='col-8'> 
                        {children}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'> <h1>Footer</h1> </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutMaster;