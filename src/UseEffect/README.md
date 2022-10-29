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
- callback luôn được gọi sau khi component mounted

1. useEffect(callback) (ít dùng)
    - gọi gọi callback mỗi khi component `re-render`
    - gọi gọi callback sau khi component `thêm element vào DOM`

2. useEffect(callback, [])
    - chỉ gọi callback 1 lần sau khi `component mounted`
    
3. useEffect(callback, [dependencies])
    - chỉ gọi callback sau khi `dependencies` thay đổi
```
