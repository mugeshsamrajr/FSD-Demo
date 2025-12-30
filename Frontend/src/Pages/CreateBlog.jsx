import React from 'react'

function CreateBlog() {
  return (
    <div>
      <form>
        <label>Title</label>
        <br />
        <input type="text" placeholder="Title" />
        <br />
        <label>Content</label>
        <br />
        <input type="text" placeholder="Content" />
        <br />
        <button type="submit" className="p-10 bg-amber-700 ">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateBlog