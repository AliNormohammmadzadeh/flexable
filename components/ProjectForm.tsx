"use client"

import { SessionInterface } from "@/common.types"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import FormField from "./FormField"

type Props = {
  type: string,
  session: SessionInterface
}

const ProjectForm = ({type , session} : Props) => {
  const handleFormSubmit = (e : React.FormEvent) =>{} 
  const handleChangeImage = (e:ChangeEvent<HTMLInputElement>) => {}
  const handelStateChange = (filedName : string , value : string) => {}

  const [form , setForm] = useState({
    title: '',
    description: '',
    image: '',
    liveSiteUrl: '',
    github: '',
    category: ''
  })
  
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flexStart form"
    >
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && 'Choose a Poster for your porject'}
        </label>
        <input id="image" type="file" accept="image/*" required={type === 'create' ? true : false} className="form_image-input" onChange={handleChangeImage}/>
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project Poster"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Felxibble"
        setState={(value) => handelStateChange('title',value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Felxibble"
        setState={(value) => handelStateChange('title',value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Felxibble"
        setState={(value) => handelStateChange('title',value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Felxibble"
        setState={(value) => handelStateChange('title',value)}
      />
      <FormField
        title="Title"
        state={form.title}
        placeholder="Felxibble"
        setState={(value) => handelStateChange('title',value)}
      />
    </form>
  )
}

export default ProjectForm