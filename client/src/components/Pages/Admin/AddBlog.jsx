import React from 'react';
import { assets } from '../../../assets/assets';

const AddBlog = () => {
  const [image, setImage] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [subTitle, setSubTitle] = React.useState("");
  const [category, setCategory] = React.useState("startup");
  const [isPublished, setIsPublished] = React.useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // your submit logic here
  };   // <-- YOU FORGOT THIS CLOSING BRACE

  return (
    <form onSubmit={onSubmitHandler} className="flex bg-blue-300 text-amber-500 h-full overflow-scroll">

      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded-lg">
        <p>
          Upload thumbnail
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="upload"
              className="mt-2 h-16 rounded cursor-pointer"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </p>
      </div>

    </form>
  );
};

export default AddBlog;
