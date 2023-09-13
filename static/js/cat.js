
    function F_Open_dialog() {
        // 触发文件选择对话框
        document.getElementById("btn_file").click();
    }

    // 用于获取用户选择的文件名，并显示在页面上
    function showSelectedFileName() {
        const fileInput = document.getElementById("btn_file");
        const fileNameDisplay = document.getElementById("selected_file_name");
        const selectedFile = fileInput.files[0]; // 获取用户选择的第一个文件

        if (selectedFile) {
            fileNameDisplay.textContent = selectedFile.name; // 显示文件名
        } else {
            fileNameDisplay.textContent = "未选择任何文件";
        }
    }
