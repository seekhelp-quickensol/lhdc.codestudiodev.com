const multer = require("multer");
const path = require("path");
const fs = require("fs");
const generateFilename = require("../utils/generate_file_name");

const getUploader = (targetPath = null) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let subfolder;

      if (targetPath) {
        subfolder = targetPath;
      } else {
        const mime = file.mimetype;

        if (mime.startsWith("image/")) {
          subfolder = "uploads/images";
        } else if (
          mime === "application/pdf" ||
          mime === "application/msword" ||
          mime === "application/vnd.ms-excel" ||
          mime === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          mime === "text/csv" ||
          mime ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          subfolder = "uploads/docs";
        } else if (
          mime === "video/mp4" ||
          mime === "video/quicktime" ||
          mime === "video/x-msvideo"
        ) {
          subfolder = "uploads/videos";
        }
      }

      const uploadPath = path.join(__dirname, "..", subfolder);

      try {
        fs.mkdirSync(uploadPath, { recursive: true });
      } catch (err) {
        console.error("Error creating directory:", err);
      }

      cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
      const userId = req.user?.id || "guest";
      const uniqueName = generateFilename(file.originalname, userId);
      cb(null, uniqueName);
    },
  });

  const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/webp",
      "image/png",
      "image/jpg",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "video/mp4",
      "video/quicktime",
      "video/x-msvideo",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",

    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type: " + file.mimetype));
    }
  };

  return multer({
    storage,
    fileFilter,
    limits: {
      fileSize: 100 * 1024 * 1024,
    },
  });
};

module.exports = getUploader;
