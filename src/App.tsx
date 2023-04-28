import './App.scss'
import {FormEvent, useState} from "react";
import {BackendService} from "./service/backend.service.ts";
import MainStreamMessage from "./SSEMainStream.tsx";


function App() {

    const [file, setFile] = useState<File | null | undefined>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        BackendService.upload(file).catch(e => alert(e));
    }

  return (
    <div className={'app'}>
      <h1>SSE Playground - last Message: <MainStreamMessage/></h1>
      <div className='card'>
          <form onSubmit={onSubmit} className={'form-vertical'}>
              <input type={'file'} onChange={event => {
                  setFile(event.target.files?.item(0));
              }}/>
              <button type={'submit'} className={'btn'}>Upload</button>
          </form>
      </div>
    </div>
  )
}

export default App
