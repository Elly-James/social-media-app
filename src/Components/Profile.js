import React, {useState } from 'react';




function Profile() {
    const [userName, setUserName] = useState("Jacob");
    const [imgUrl, setImgUrl] = useState("https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg");
    const [submittedData, setSubmittedData] = useState([]);

    
    function handleUserNameChange(event) {
      setUserName(event.target.value);
    }
  
    function handleImgUrlChange(event) {
      setImgUrl(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const formData = { userName: userName, imgUrl: imgUrl };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setUserName("");
      setImgUrl("");
    }
  
    const Submissions = submittedData.map((data, index) => {
      return (
        <div key={index}>
            <h2>   {data.userName} </h2>
            <img src={data.imgUrl}/>
        </div>
      );
    });
  
    return (
      <div>
        <form  className='form'    onSubmit={handleSubmit}>
          <legend>Add UserName and Image</legend>
          <input type="text" onChange={handleUserNameChange} value={userName}  name='Username' placeholder='User Name'/>
          <input type="text" onChange={handleImgUrlChange} value={imgUrl}  name='image url' placeholder='image url'/>
          <button type="submit">Submit</button>
        </form>
        <h2 className='my-profile'>My Profile</h2>
         {Submissions}
       
        <p className='location'>From Nairobi, Kenya</p>
      </div>
    );
  }

export default Profile




