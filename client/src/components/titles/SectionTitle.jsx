import React from 'react'

function SectionTitle({
    title=" How We Build Intelligent Solutions",
    description="Every successful product begins with a clear vision. Our process is designed to understand your goals, refine your ideas, and deliver intelligent, scalable outcomes that align with your business objectives."
}
) {
    return (
        <div className="flex flex-col justify-start items-center gap-5  mb-10">
            <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight">
               {title}
            </h3>
            <div className="flex items-center">
                <p className="text-base md:text-lg text-gray-500 leading-relaxed text-center">
                   {description}
                </p>
            </div>
        </div>
    )
}

export default SectionTitle