import { useEffect, useState } from 'react'

function Content() {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        //cleanup function
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview) //remove image old
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        //file is object => add property
        //ảnh load lên được lưu vào bộ nhớ trình duyệt => memory leak => cần clean nếu không dùng 
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <div>
            <input 
                type='file'
                onChange={handlePreviewAvatar}    
            />

            {
                avatar && (
                    <img src={avatar.preview} alt={avatar.name} width='80%'/>
                )
            }
        </div>
    )
}

export default Content