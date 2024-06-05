document.addEventListener("DOMContentLoaded", function () {
    const addressLi = document.getElementById("address-form");
    const addressForm = document.querySelector(".address-form");
    const closeFormBtn = document.getElementById("close-form");

    addressLi.addEventListener("click", function (event) {
        // Ngăn chặn hành động mặc định của thẻ <a>
        event.preventDefault();

        // Hiển thị form
        addressForm.style.display = "flex";
    });

    closeFormBtn.addEventListener("click", function (event) {
        // Ẩn form khi nhấn vào nút đóng
        event.stopPropagation();
        addressForm.style.display = "none";
    });
});

