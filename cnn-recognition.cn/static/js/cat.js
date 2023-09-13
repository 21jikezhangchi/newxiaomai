
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



    // 获取选择图片按钮和识别按钮的元素
    const selectBtn = document.getElementById('selectBtn');
    const recognizeBtn = document.getElementById('recognizeBtn');

    // 当点击 "选择图片" 按钮时触发事件
    selectBtn.addEventListener('click', function() {
        // 创建一个input元素来处理文件选择
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*'; // 限制只选择图像文件
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0) {
                const selectedImage = fileInput.files[0];
                const selectedImageUrl = URL.createObjectURL(selectedImage);
                // 在页面上显示选择的图片
                const img = document.createElement('img');
                img.src = selectedImageUrl;
                img.width = 200; // 设置图片宽度，你可以根据需要调整
                document.body.appendChild(img);

                // TODO: 根据已选择的图片显示对应的识别图片
                // 这里需要你添加逻辑来显示对应的识别图片，可以根据某种规则将选中图片转换为对应的识别图片
            }
        });

        // 触发文件选择
        fileInput.click();
    });

    // 当点击 "进行识别" 按钮时触发事件
    recognizeBtn.addEventListener('click', function() {
        // TODO: 在页面右边显示与已选择图片对应的另一张图片
        // 这里需要你添加逻辑来显示对应的识别图片，可以根据已选择图片的内容或其他规则来显示对应的图片
    });



