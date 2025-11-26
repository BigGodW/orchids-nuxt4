export const compressImage = (
  file: File,
  options: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
  } = {}
): Promise<File> => {
  return new Promise((resolve) => {
    const {
      maxWidth = 1200,
      maxHeight = 1200,
      quality = 0.8,
    } = options;

    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        let width = img.width;
        let height = img.height;

        // 按比例缩放图片，确保不超过 maxWidth 和 maxHeight
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
        // 创建 canvas 进行压缩
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          // 如果获取不到 CanvasRenderingContext2D，直接返回原文件
          resolve(file);
          return;
        }
        canvas.width = width;
        canvas.height = height;
        // 绘制缩放后的图像
        ctx.drawImage(img, 0, 0, width, height);
        // 转换为 Blob，然后转为 File
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              // 如果压缩失败，返回原始文件
              resolve(file);
              return;
            }
            // 使用原文件的文件名，但修改扩展名或添加 compressed 标识（可选）
            const compressedFile = new File([blob], file.name, {
              type: file.type, // 默认转 JPEG，你也可以根据原类型判断
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          file.type, // 你可以根据需求改为 'image/png'，但 PNG 压缩效果不如 JPG 明显
          quality
        );
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};