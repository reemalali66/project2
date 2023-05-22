import FMovie from "./images/firstM.jpg"
import SMovie from "./images/SecMovie.jpg"
import TMovie from "./images/ThirdMovie.jpg"
import FoMovie from "./images/ForMovie.jpg"
import { Link } from "react-router-dom";

function MovieList(){
    return(
        <div id='MoviesList'>
            <div className="child" id="child1">
            <div>
              <img  src={FMovie} alt=""/>
              </div>
              <div>
              <h3 class="Title">DETECTIVE CHIRP & THE GOLDEN BEEHIVE</h3>
              <p>Residents of Honey Valley are preparing for their favourite holiday - City Day, when all citizens have the opportunity to admire a unique artifact - the Golden Beehive. According to legend, it was found by the founders of Honey Valley, and legend has it that thousands of misfortunes will befall the town if the Hive disappears. On the eve of the holiday, the Hive was stolen. Blame it on the squirrel Chink, assistant owl detective Sofi. Chink and his friends will have to unravel the case, find a real crook and return not only the Golden Hive, but also peace to the Valley.</p>
              <Link to ='/Movie1'><button>More Details</button></Link>
              </div>
          </div>
          <div  className="child" id="child2">
            <div>
              <img  src={SMovie} alt=""/>
              </div>
              <div>
              <h3 class="Title">JOHN WICK: CHAPTER 4</h3>
              <p>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes</p>
              <button>More Details</button>
              </div>
          </div>
          <div  className="child" id="child3">
            <div>
              <img  src={TMovie} alt=""/>
              </div>
              <div>
              <h3 class="Title">THE SUPER MARIO BROS. MOVIE</h3>
              <p>A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess..</p>
              <button>More Details</button>
              </div>
          </div>
          <div  className="child" id="child4">
            <div>
            <img  src={FoMovie} alt=""/>
            </div>
            <div>
             <h3 class="Title">GUARDIANS OF THE GALAXY VOL.3</h3>
            <p>In Marvel Studios’ “Guardians of the Galaxy Vol. 3” our beloved band of misfits are settling into life on Knowhere. But it isn’t long before their lives are upended by the echoes of Rocket’s turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a dangerous mission to save Rocket’s life—a mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.</p>
            <button>More Details</button>
            </div>
        </div>
        
    </div>
    )
}
export default MovieList;