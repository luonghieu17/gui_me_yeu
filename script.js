
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);

        // Thêm sự kiện nhấp chuột vào toàn bộ màn hình
        document.addEventListener('click', () => {
            // Chuyển hướng đến trang mới chứa lời chúc
            window.location.href = "greeting.html";
        }, { once: true }); // Chỉ cho phép nhấp một lần
    }, 1000);
};