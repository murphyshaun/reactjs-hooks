import { useState } from "react";

const gifts = [
    'Macbook pro',
    'Macbook air',
    'Macbook mini',
]
function Gift() {
    const [gift, setGift] = useState()

    const getGift = () => {
        const index = Math.floor(Math.random() * gifts.length)

        setGift(gifts[index])
    }
    return (
        <div style={{ padding: 20 }}>
        <h1>{gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={getGift}>Get Gift</button>
        </div>
    );
}

export default Gift;