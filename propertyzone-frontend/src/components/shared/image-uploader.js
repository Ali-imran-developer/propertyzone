import { useRef, useState } from "react";
import axios from "axios";
// import { Button, Input, Loader } from "rizzui";
import { BsUpload, BsX } from "react-icons/bs";
import { LoaderIcon } from "react-hot-toast";

const BASE_URL = "http://localhost:5000";
function ProductImageUpload({
  formik,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    const existingImages = formik.values.images || [];

    if (files.length + existingImages.length > 10) {
      setUploadError("You can upload a maximum of 10 images.");
      return;
    }

    setImageLoadingState(true);
    setUploadError(null);

    try {
      const uploadPromises = files.map((file) => {
        const formData = new FormData();
        formData.append("my_files", file);
        return axios.post(`${BASE_URL}/api/property/upload-image`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      });

      const responses = await Promise.all(uploadPromises);
      const newUrls = responses
        .filter(res => res.data?.success)
        .map(res => res.data.result.url);

      const updatedImages = [...existingImages, ...newUrls];
      formik.setFieldValue("images", updatedImages);
    } catch (err) {
      console.error("Upload error:", err);
      setUploadError("Image upload failed. Please try again.");
    } finally {
      setImageLoadingState(false);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className={`w-full mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}>
      <label className="text-lg font-semibold mb-2 block">Upload Images (Max 10)</label>
      <div className="border-2 border-dashed rounded-lg p-4">
        <input
          id="image-upload"
          type="file"
          ref={inputRef}
          multiple
          accept="image/*"
          className="btn theme-btn-3 mb-10"
          onChange={handleImageChange}
        />
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center h-32 cursor-pointer"
        >
          <BsUpload className="w-10 h-10 text-muted-foreground mb-2" />
          <span>Click or drag to upload up to 10 images</span>
        </label>
      </div>

      {imageLoadingState && (
        <div className="mt-2 text-sm text-blue-500 flex items-center gap-2">
          <LoaderIcon className="h-4" /> Uploading images...
        </div>
      )}

      {uploadError && (
        <div className="mt-2 text-sm text-red-600">Error: {uploadError}</div>
      )}

      {formik.values.images?.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {formik.values.images.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-28 object-cover rounded shadow"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow group-hover:opacity-100 opacity-0 transition"
                onClick={() => handleRemoveImage(index)}
              >
                <BsX className="w-4 h-4 text-gray-800" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductImageUpload;