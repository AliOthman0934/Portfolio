import React, {useRef , useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Projects from '../src/components/Projects/Projects';
import gsap from 'gsap';

function App() {
  let cursor = useRef(null);
  let posX1 = useRef(0);
  let posY1 = useRef(0);
  let mouseX1 = useRef(0);
  let mouseY1 = useRef(0);

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();

  useEffect(() => {
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor.current, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      }
    });
    document.addEventListener("mousemove", function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    tl2.from(cursor.current, {
      duration: 1.5,
      delay: 2,
      opacity: 0
    }, "-=1");
  }, [tl, tl2]);

  const load = gsap.timeline({
    paused: true,
  });
  let loader = useRef(null);
  let progress = useRef(null);
  let percent = useRef(null);
  let bar = useRef(null);
  let barc = useRef(null);

  useEffect(() => {
    load.to([percent.current, bar.current], {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });
    load.to(progress.current, {
      duration: 0.8,
      width: "0%",
    });
    load.to(loader.current, {
      visibility: 'hidden',
      zIndex: -1
    });
  });

  var id;
  var width1 = 1;

  function loading() {
    id = setInterval(frame, 20);
  }
  function frame() {
    if (width1 >= 100) {
      clearInterval(id);
      load.play();
    } else {
      width1++;
      document.getElementById("barc").style.width = width1 + "%";
      document.getElementById("percent").innerHTML = width1 + "%";
    }
  }
  window.addEventListener("load", (e) => {
    loading();
  });

  return (
    <div>
      <Router>
        <div className="noise"></div>
        <div className="App">
          <div className="loader" ref={loader}>
            <div className="progress" ref={progress}>
              <div id="percent" ref={percent}>1%</div>
              <div id="bar" ref={bar}>
                <div id="barc" ref={barc}></div>
              </div>
            </div>
          </div>

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />

          <div className="cursor-follower" ref={cursor}></div>
        </div>
      </Router>
    </div>
  );
}

export default App;

