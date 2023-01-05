import React from "react";
import { useSelector } from "react-redux";
import User from "../../User";

const PostUser = () => {
  const { user } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);

  console.log(user);
  return (
    <div>
      <User />
      <div>
        {user.user.postIds.map((item) => {
          return (
            <div className="constainer-comment-one">
              <p className="comment">{item.post}</p>
              <p>
                {posts.map((element, idx) => (
                  <div key={idx}>
                    <div>
                      {element.comment.map((item, idc) => (
                        <div key={idc}>
                          <p className="comment">{item.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}{" "}
                comentario en el post
              </p>
              {console.log(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostUser;
