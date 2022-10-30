# useLayoutEffect Hook

## useEffect 
1. Cập nhật lại state
2. Cập nhật lại DOM (mutated - cập nhật 1 property trong object)
`3. Render lại UI`
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback

## useLayoutEffect
1. Cập nhật lại state
2. Cập nhật lại DOM (Mutated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
`5. Render lại UI`


## NOTE
```
- Side effect thường dùng useEffect, chỉ có 1 vài trường hợp đặc biệt mới dùng useLayoutEffect
 - trường hợp setState trong hàm xử lý, và check điều kiện setState trong useEffect => nên chuyển sang dùng useLayoutEffect vì render UI ở bước cuối cùng
```