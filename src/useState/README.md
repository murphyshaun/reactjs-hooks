# useState hook

### Dùng khi nào?
khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật
(render lại theo dữ liệu)

### Cách dùng

```jsx
import { useState } from 'react'

function Component(){
    const [state, setState] = useState(initState)

    ...
}
```

### Lưu ý
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback? `setCounter(preState => preState + 1)`
- Initial state với callback? `lấy giá trị return làm initial state`
- Set state là thay thế state bằng giá trị mới