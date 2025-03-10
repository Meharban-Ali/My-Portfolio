import React from 'react'

export const Skills = ({category, title, description}) => {
    return (
        <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-gray-800 text-white text-xs font-medium tracking-widest">
                {category} 
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
               {title}
            </h2>
            <p className="leading-relaxed mb-8 bg-gray-700 text-white p-5 rounded-lg hover:bg-purple-900 hover:shadow-lg transition-all duration-300">
            {description}
            </p>

        </div>
    )
}
