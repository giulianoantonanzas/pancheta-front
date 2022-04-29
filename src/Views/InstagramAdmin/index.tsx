import TableAdmin from "Components/TableAdmin";
import useInstagramPost from "./useInstagramPost";
import useRemoveInstagramPostModal from "./useRemoveInstagramPostModal";
import { InstagramPostType } from "types/InstagramPost";
import { Link } from "react-router-dom";
import addIcon from "assets/images/plus-circle.svg";

const InstagramAdmin = () => {
  const { instagramPosts, removeInstagramPost } = useInstagramPost();
  const { openRemoveInstagramPostModal } = useRemoveInstagramPostModal();

  return (
    <div className='w-100 border rounded p-4'>
      <h1>Instagram post</h1>
      {instagramPosts && instagramPosts?.length > 0 && (
        <TableAdmin
          entities={instagramPosts}
          onRemove={(instagramPost: InstagramPostType) => {
            if (instagramPost) {
              openRemoveInstagramPostModal(instagramPost, () =>
                removeInstagramPost(instagramPost.id)
              );
            }
          }}
        />
      )}

      <Link to='/admin/instagram/new'>
        <button type='button' className='btn btn-primary text-white'>
          <img
            style={{ filter: "invert(1)" }}
            src={addIcon}
            alt='Agregar Instagram Post'
          />{" "}
          Agregar Instagram Post
        </button>
      </Link>
    </div>
  );
};

export default InstagramAdmin;
