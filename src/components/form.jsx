import { useState } from "react"

export default function Form() {

    const [meme, Getmeme] = useState(" ")
    //fetch data from the meme api
    const GetMemes = async () => {
        try {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()

            let memeArray = data.data.memes
            const random = Math.floor(Math.random() * memeArray.length)
            Getmeme(memeArray[random].url)




        } catch (err) {
            console.log(`Error Occured:${err.message}`)
        }
    }


    return (
        <>
            <div className="form">

                <input
                    type="text"
                    className="form-input"
                    placeholder="Top Text"
                />
                <input
                    type="text"
                    className="form-input"
                    placeholder="Bottom Text"
                />
                <button className="FormBtn" onClick={GetMemes}>Generate new meme</button>
            

            </div>

            <div className="memeImageContainer">
                 <img src={meme} alt="meme-pic" />
            </div>
        </>
    )


}