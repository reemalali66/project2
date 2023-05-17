import GoldenBeeh from "./images/firstM.jpg"
import Star from "./images/start.avif"
import Gage from "./images/g.jpg"
import Line from "./images/2.jpg"
function Section2(){
    return(
        <div id="div1">
            <br/>
            <br/>
        <img id="Line" src={Line} alt=""/>
        <div id="space">
        <h3 id="m1Header"> DETECTIVE CHIRP & THE GOLDEN BEEHIVEG </h3>
        
<button type="button" id="btn1" data-bs-toggle="modal" data-bs-target="#exampleModal">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg> Write a Review
</button>


<div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Review</h1>
        <img  src={Star} alt="Clogo" id="star"/>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p> We're glad you have chosen to leave a comment. Please keep in mind that all comments are moderated according to our privacy policy, and all links are nofollow. Do NOT use keywords in the name field. </p>
      <input name="UserName" id="username" type="text" minlength="3" required placeholder="Name "  /><br />
     <textarea id="UserReview" placeholder="Enter review" required ></textarea>
    <br />
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
        
        </div>
        <img id="Gpicture" src={Gage} alt=""/>
        <br/>
        <br/>
        <div id="picVed">
        <img id="m1picture" src={GoldenBeeh} alt=""/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J06RCXgKFiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br/>
        <br/>
        <br/>
        <hr/>
        </div>
        </div>



     )
}
export default Section2;