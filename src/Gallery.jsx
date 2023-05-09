import React from 'react'
import "./App.css"
const Gallery = ({ data }) => {
    return (
        <div className='results' >
            {data.map((image) =>
                <div key={image.id}>
                    <div className='result-item'>
                        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                            height='200' width='250' alt='' />
                    </div>
                </div>)}
        </div>

    )
}

export default Gallery