import logo from './logo.svg';
import './App.css';

function App() {
    function addEvent() {
        alert('hello');
    }
    return (
    <div className = "App" >
        <header className = "App-header" >
            <h1> EVENTS On Events </h1>
        </header>

        <div class = "events">

            <div class = "event-1">

                <div class = "date" >
                    <h2> 11 TH <small> <br/> </small> NOV </h2>
                </div>

                <div class = "event">
                    <h3> Sunday Supper Club </h3>
                    <div class = "horizontal-line-1"> </div>
                    <p class="eventDescription"> A culinary event with foods from all over the world.This is a weekly club you can join for a small fee.Learn cooking methods from top chef... < /p>


                </div>

                <div class = "time-location" >
                    <h3 > 16:00-19:00 </h3>
                    <div class = "horizontal-line-2" > </div>
                    <p> 144 WElm St, Chicago, IL 60610, <small> <br/> </small> USA</p>
                </div>
            </div>
            <div class = "eventDetails" >
                <p class = "eventDetails"> +EventDetails </p>
            </div>


            <div class = "horizontal-line-3"> </div>

            <div class = "event-1">
                <div class = "date">
                    <h2> 13 TH <small> <br/> </small> NOV </h2>
                </div>

                <div class = "event" >
                    <h3> Evenings in the Park </h3>
                    <div class = "horizontal-line-1" > </div>
                    <p class="eventDescription"> We invite you to listen to live bands play beautiful music in the park.Enjoy the sounds of LaureenDevis and the kings and enjoy wine taste... </p>

                </div>

                <div class = "time-location" >
                    <h3 > 06:30-08:30 </h3>
                    <div class = "horizontal-line-2" > </div>
                    <p> Estuary Park </p>
                </div>
            </div>
            <div class = "eventDetails" >
                <p class = "eventDetails"> +EventDetails </p>
            </div>

            <div class = "horizontal-line-3" > </div>

            <div class = "event-1">

                <div class = "date">
                    <h2> 15 TH <small> <br/> </small> NOV </h2>
                </div>


                <div class = "event" >
                    <h3> Morning Brews & Views </h3>
                    <div class = "horizontal-line-1" ></div>
                    <p class="eventDescription"> Enjoy the free samples of our latest brews while overlooking the beautiful sites of oour city.Plenty of ice and hot teas, plus gourment coffee d < span id = "dots-1" > ... </span></p>
                </div>


                <div class = "time-location" >
                    <h3 > 08:00-13:00 </h3>
                    <div class = "horizontal-line-2" > </div>
                    <p> The Teapot and Brew Club </p>
                </div>
            </div>

            <div class = "eventDetails" >
                <p class = "eventDetails"> +EventDetails </p>
            </div>

             <div class = "horizontal-line-3" > </div>

            <div class = "event-1" >

                <div class = "date" >
                    <h2> 17 TH <small> <br/> </small> NOV </h2>
                </div>


                <div class = "event" >
                    <h3> Supper Saturday Sale </h3>
                    <div class = "horizontal-line-1" > </div>
                    <p class="eventDescription"> A culinary event with foods from all over the world.This is a weekly club you can join for a small fee.Learn cooking methods from top chef... </p>

                </div>


                <div class = "time-location" >
                    <h3 > 15:00-16:00 </h3>
                    <div class = "horizontal-line-2" > </div>
                        <p> 144 WElm St, Chicago, IL 60610, <small> <br/> </small> USA</p>
                    </div>
                </div>
                <div class = "eventDetails" >
                    <p class = "eventDetails"> +EventDetails </p>
                </div>

                <button>Add</button>
            </div>
        </div>
    );
}


export default App;