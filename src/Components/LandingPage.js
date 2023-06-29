import React, { useState } from 'react'
import Scrap from './Scrap'
const LandingPage = () => {
    const [url, setUrl] = useState('');
    const [tag, setTag] = useState('');
    const [tag2, setTag2] = useState('')
    const Urlhandle = (e) => {
        setUrl(e.target.value)
    }
    const TagHandle = (e) => {
        setTag(e.target.value)
    }
    const SecondaryTagHandle = (e) => {
        setTag2(e.target.value)
    }
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Web Scraper</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Url</label>
                <input type="email" value={url} onChange={Urlhandle} class="form-control" id="exampleFormControlInput1" placeholder="https://www.example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter tag</label>
                <input type="email" value={tag} onChange={TagHandle} class="form-control" id="exampleFormControlInput1" placeholder="Enter the tag that you want to scrap" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter tag</label>
                <input type="email" value={tag2} onChange={SecondaryTagHandle} class="form-control" id="exampleFormControlInput1" placeholder="Enter the tag that you want to scrap" />
            </div>
            <div style={{ marginTop: '30px' }}>
                <Scrap tagProp={tag} tag2Prop={tag2} urlProp={url} />
            </div>
        </div>
    )
}

export default LandingPage
