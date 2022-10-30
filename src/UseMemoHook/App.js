import { useMemo, useRef, useState } from 'react'


function App() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        const newProduct = {
            name,
            price: +price
        }

        setProducts([...products, newProduct])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(() => {
        return products.reduce((result, product) => {
            //mỗi lần nhập tên sản phẩm hay nhập giá App bị re-render 
            //=> total luôn luôn được tính toán lại
            //=> useMemo
            console.log('tính toán lại');
            return result + product.price
            }, 0)
    }, [products])
    return (
        <div style={{padding: 20}}>
            <input
                ref={nameRef} 
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />

            <br />
            <input 
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />

            <br />
            
            <button onClick={handleSubmit}>Add</button>

            <br />

            Total: {total}$
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price}$ 
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default App;

