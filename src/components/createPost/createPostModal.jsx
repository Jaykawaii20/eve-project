import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@headlessui/react";
import { createPost } from "@/store/PostSlice";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "@/config/baseUrl";
import { ApiUrls } from "@/apis/ApiUrls";
import { setPosts } from "../post/homePagePostSlice";
import { setPostModal } from "@/store/PostSlice";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Modal() {
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);
  const open = useSelector((state) => state.post.postModal);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUserPosts = async () => {
    let token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      baseUrl + ApiUrls.posts.getAllPosts,
      header
    );

    console.log(response);
    dispatch(setPosts(response.data.posts));
    // setPosts(response.data.posts);
  };

  const handleSubmitPost = async () => {
    if (!image) {
      toast.error("Please select image");
      return;
    }
    if (!description) {
      toast.error("Please enter description");
      return;
    }
    if (!category) {
      toast.error("Please enter category");
      return;
    }
    if (!tags) {
      toast.error("Please enter tags");
      return;
    }
    const payload = {
      image,
      description,
      category,
      tags,
      isPublic,
    };
    setLoading(true);
    dispatch(
      createPost({
        payload,
        callback: () => {
          setCategory("");
          setDescription("");
          setTags("");
          setImage("");
          setIsPublic(false);
          getUserPosts();
          // setOpen(false);
          dispatch(setPostModal(false));
          setLoading(false);
        },
      })
    );
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(setPostModal(false))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className=" font-medium leading-6 text-gray-900 text-[20px] font-Poppins "
                    >
                      Create a Post
                    </Dialog.Title>
                    <div className="mt-2">
                      <label className="flex items-center justify-center gap-[4px] p-[2px] border-2 border-[#589CFF] rounded-[12px] shadow-md w-[152px]">
                        <img src="/post.png" alt="picture" />
                        <p
                          className={`font-${poppins} text-[12px] font-semibold text-[#589CFF]`}
                        >
                          Add photo/video
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*,video/*"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </label>
                      <div className="flex w-[449px] border mt-5 max-md:w-[90%] p-[8px] items-center self-stretch gap-8 border-1 border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3]">
                        <textarea
                          className={`font-${poppins} text-[16px] h-[202px] px-2 font-semibold text-[#A8A8A8] bg-[#E3E3E3] outline-none w-full`}
                          type="text"
                          placeholder="Enter post description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div className="flex mt-5 border  w-[449px] max-md:w-[90%] p-[2px] items-center self-stretch gap-8 border-1 border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3]">
                        <input
                          className={`font-${poppins} text-[16px] h-[40px] px-2 font-semibold text-[#A8A8A8] bg-[#E3E3E3] outline-none w-full`}
                          type="text"
                          placeholder="Enter Category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </div>
                      <div className="flex w-[449px] mt-5 border  max-md:w-[90%] p-[2px] items-center self-stretch gap-8 border-1 border-[#C0C1C3] rounded-[12px] bg-[#E3E3E3]">
                        <input
                          className={`font-${poppins} text-[16px] h-[40px] px-2 font-semibold text-[#A8A8A8] bg-[#E3E3E3] outline-none w-full`}
                          type="text"
                          placeholder="Enter Tags"
                          value={tags}
                          onChange={(e) => setTags(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row items-center justify-between">
                  <div>
                    <img
                      src={`/ProfilePictures/${user?.avatar}`}
                      alt="picture"
                      className="h-[50px] w-[50px] rounded-lg"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <Switch
                      checked={isPublic}
                      onChange={setIsPublic}
                      className={classNames(
                        isPublic ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          isPublic ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                    <p
                      className={`font-medium text-[#A8A8A8] font-${poppins} text- text-[12px] color-grey`}
                    >
                      Make post public
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#589CFF] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto self-end"
                    onClick={handleSubmitPost}
                    disabled={loading}
                  >
                    {loading ? "Uploading..." : "Upload"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
