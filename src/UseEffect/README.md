# useEffect Hooks

# Side effect
# Event: add /remove event listener
# Observer pattern: subscribe / unsubscribe
# Closure
# Timers: setInterval, setTimeout, clearInterval, clearTimeout
# Mounted / Unmounted
# Call api

```
1. Update DOM

2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / unsubscribe
    - Clear timer
```
# Trường hợp sử dụng

`useEffect(callback, [deps])`

```
1. useEffect(callback) (ít dùng)
    - gọi gọi callback mỗi khi component `re-render`
    - gọi gọi callback sau khi component `thêm element vào DOM`

2. useEffect(callback, [])
    - chỉ gọi callback 1 lần sau khi `component mounted`
    
3. useEffect(callback, [dependencies])
    - chỉ gọi callback sau khi `dependencies` thay đổi
```

### Note
```
- callback luôn được gọi sau khi component mounted
- cleanup function luôn được gọi trước khi component unmounted
    - dùng cho trường hợp trong useEffect có hàm của window cần clean tránh rò rỉ bộ nhớ
- cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted): 
    - nghĩa là trước khi chạy hàm callback lần thứ n cleanup sẽ chạy để dọn dẹp callback chạy lần thứ n - 1
```
