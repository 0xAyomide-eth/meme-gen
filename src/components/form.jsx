export default function Form() {
    //fetch data from the meme api
    const GetMemes = async () => {
        try {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            console.log(data)
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
        </>
    )


}