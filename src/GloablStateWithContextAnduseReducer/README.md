# Redux vs React context

## Redux advantage
1. Debugging capabilities
2. Middleware
3. Addons and extensibility
4. Cross-platform and cross-framework usage
5. Depending on your app's setup, much better performance than working with just Context

## Note
- context thường dùng ở project nhỏ, trường hợp set lại state ko nhiều vì nó re-render toàn bộ component (provider đặt ở root)
    - ví dụ: thay đổi theme, ngôn ngữ vì ít sử dụng
