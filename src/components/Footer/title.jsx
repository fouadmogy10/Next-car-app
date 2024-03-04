import React from 'react'

const Title = ({head,desc}) => {
  return (
    <>
     <h2 className=" text-3xl font-semibold pb-4 border-b-8 border-primary  ">
              {head}
            </h2>
            {
                desc && <p className="my-5">
              {desc}
            </p>
            }
           
    </>
  )
}

export default Title