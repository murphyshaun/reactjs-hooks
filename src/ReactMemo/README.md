# React memo
- ghi nhớ props của component để quyết định có re-render component đấy hay ko
    - nghĩa là: props của component con không thay đổi thì memo sẽ chặn việc re-render component con
=> đảm bảo hiệu năng

1. memo() => Higher Order Component (HOC)
2. useCallback()


### NOTE
- momo không phải Hook
- react có các khái niệm
    - Hooks
    - HOC
    - Render props