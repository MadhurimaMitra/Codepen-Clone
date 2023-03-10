import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

export default function Editor(props) {
  const {
    icon,
    displayName,
    language,
    value,
    onChange
  } = props

  const [open, setOpen] = useState(true)

  function handleChange( editor, data, value) {
    onChange( value );
  }

  return (
    <div className= {`editor-container ${open ? '' : 'collapsed'}`} >
        <div className='editor-title'>
            <div className='title'>
              {icon}
              {displayName}
            </div>
            <button 
              type='button'
              className='collapse-btn'
              onClick={ () => setOpen( prevOpen => !prevOpen ) }
            > 
              <i className= { `fa-solid ${open ? 'fa-down-left-and-up-right-to-center' : 'fa-solid fa-up-right-and-down-left-from-center'}` }/> 
            </button>
        </div>
        <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper'
            options={{
              lineWrapping: true,
              lint: true,
              mode: language,
              lineNumbers: true,
              theme: 'material'
            }}
        />
    </div>
  )
}
