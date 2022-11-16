import './App.css';

function App() {

    return (
        <div className="App">
            <div className="main-box">
                <div className="box-title"><h3>5 birthdays today</h3></div>

                <div className="person-box">
                    <div className="left-side">
                        <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" alt="Sean's Picture"/>
                    </div>
                    <div className="right-side">
                        <div className="name">Sean Walsh</div>
                        <div className="year">34 years</div>
                    </div>
                </div>


                <div className="button-box">
                    <button>Clear All</button>
                </div>

            </div>
        </div>
    );
}

export default App;
