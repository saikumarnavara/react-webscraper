import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import { saveAs } from 'file-saver'
const Scrap = (props) => {
    const [scrapedData, setScrapedData] = useState('')
    const [show, setShow] = useState(false)
    const handleScrap = async () => {
        try {
            const response = await axios.get(`${props.urlProp}`)
            const html = response.data;
            const $ = cheerio.load(html)
            const title = $('title').text();
            const paragraph = $(`${props.tagProp}`).map((index, element) => $(element).text()).get().join('\n');
            const h1Tags = $(`${props.tag2Prop}`);
            const h1Texts = h1Tags.map((index, element) => $(element).text()).get();
            setScrapedData(`title: ${title}\n\n${props.tagProp}:\n${paragraph} \n\n${props.tag2Prop}:\n${h1Texts}`)
            setShow(true)
        } catch (error) {
            console.log(error)
        }
    }

    const Download = () => {
        const csvData = scrapedData;
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' })
        saveAs(blob, 'scarped_data.csv')
    }



    return (
        <div>
            <button className='btn btn-primary ' onClick={handleScrap} >scrap data</button>
            {show ?
                <div>
                    <div className='card shadow mt-5 pd-3'>
                        <div className='card-body'>
                            <pre>{scrapedData}</pre>
                        </div>
                    </div>
                    <button className='btn btn-primary mr-2 ' onClick={Download}>Download as file</button></div>
                : ''}
        </div>
    )
}

export default Scrap
