import React from 'react'
import '../assets/styles/components/categories.scss'

const Categories = ({children,name}) => {
    return(

        <div>
            <h3 className="categories__title">{name}</h3>
        </div>
    )

}

export default Categories;