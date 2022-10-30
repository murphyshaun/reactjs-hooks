# useCallback Hook
useCallback()
- Reference types
- React memo()

### NOTE
- useCallback trả về tham chiếu cũ, memo sẽ hoạt động được sau mỗi lần App re-render
- nếu không dùng useCallback, hàm increase sẽ có tham chiếu mới sau mỗi lần App re-render 
    => memo không hoạt động do memo đang giữ tham chiếu cũ
- dùng useCallback phải dùng memo