import { memo } from 'react'

function Content({count}) {
    console.log('re-render');
    return (
        <div>
            <h2>Hello everyone! {count}</h2>
        </div>
    )
}

export default memo(Content)