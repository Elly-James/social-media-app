import React, {useState } from 'react';




function Comments() {
    const [userName, setUserName] = useState("Elly");
    const [comment, setComment] = useState("wow beautiful");
    const [submittedData, setSubmittedData] = useState([]);

    
    function handleUserNameChange(event) {
      setUserName(event.target.value);
    }
  
    function handleCommentChange(event) {
      setComment(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const formData = { userName: userName, comment: comment};
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setUserName("");
      setComment("");
    }
  
    const Submissions = submittedData.map((data, index) => {
      return (
        <div key={index} className='comments'>
          <p>{data.userName} : {data.comment}</p>
        </div>
      );
    });
  
    return (
      <div>
        <form  className='form'    onSubmit={handleSubmit}>
         <legend>Add Comment</legend>
         
          <input type="text" onChange={handleUserNameChange} value={userName} name='UserName' placeholder='User Name'/>
          <textarea id="comments" name="commenta" rows="4" cols="50" onChange={handleCommentChange} value={comment} placeholder='Comment'></textarea>
          <button type="submit">Submit</button>
        </form>
        <h2 className='my-profile'>Comments</h2>
          {Submissions}
        
      </div>
    );
  }

export default Comments




