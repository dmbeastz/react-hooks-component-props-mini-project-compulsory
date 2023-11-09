function About ({about,image}) {
    const placeholder = "https://via.placeholder.com/215";
<aside>
  <div>
    <img src= {{image} || {placeholder}} alt="logo"></img>
    <p>{about}</p>
  </div>
</aside>
  
}

export default About;