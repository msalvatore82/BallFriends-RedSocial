import { Form, Input } from 'antd'
import React from 'react'
import "./CreatePost.scss"

const CreatePost = () => {
  return (
    <div className='form-create-post'>
        <Form>
        <Input placeholder="Titulo de post" className='input'/>
        <Input placeholder="Contenido" className='input'/>
        <button>Enviar</button>
        </Form>
    </div>
  )
}

export default CreatePost