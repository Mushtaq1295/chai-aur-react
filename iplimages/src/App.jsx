import { useState } from 'react';

function App() {
  const [img, setImg] = useState("https://www.iplt20.com/assets/images/dont-just-watch-new.png");

  return (
    <>
      <div className="w-full h-screen duration-1000">
        <div
          className="w-full h-full flex justify-center items-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "contain",  // Adjust the size of the image
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Button group */}
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 cursor-pointer border-2 border-black">
              <button
                onClick={() =>
                  setImg(
                    "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
                  )
                }
                className="bg-sky-500/100 px-3 py-1 rounded"
              >
                MI
              </button>

              <button
                onClick={() =>
                  setImg(
                    "https://pbs.twimg.com/media/GJCsUKsWQAAjTBF.jpg"
                  )
                }
                className="bg-red-500/100 px-3 py-1 rounded"
              >
                RCB
              </button>

              <button
                onClick={() =>
                  setImg(
                    "https://mir-s3-cdn-cf.behance.net/projects/404/b8cade148673609.Y3JvcCwxMjAwLDkzOCwwLDI5.png"
                  )
                }
                className="bg-green-500/100 px-3 py-1 rounded"
              >
                LSG
              </button>

              <button
                onClick={() =>
                  setImg(
                    "https://i.pinimg.com/originals/39/0f/c7/390fc716070ce65f3cc496d84b909812.jpg"
                  )
                }
                className="bg-yellow-500/100 px-3 py-1 rounded"
              >
                CSK
              </button>

              <button
                onClick={() =>
                  setImg(
                    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/800px-Punjab_Kings_Logo.svg.png"
                  )
                }
                className="bg-rose-500/100 px-3 py-1 rounded"
              >
                PBKS
              </button>

              <button
                onClick={() =>
                  setImg(
                    "https://media.crictracker.com/media/featureimage/Delhi-Capitals-logo-1.jpg"
                  )
                }
                className="bg-violet-500/100 px-3 py-1 rounded"
              >
                DC
              </button>

              <button
                onClick={() =>
                  setImg(
                    "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/640px-Kolkata_Knight_Riders_Logo.svg.png"            )
                }
                className="bg-indigo-500/100 px-3 py-1 rounded"
              >
                KKR
              </button>

              <button
                onClick={() =>
                  setImg(
                    "https://pbs.twimg.com/media/Fru5mz6XgAIdP3X.jpg"
                  )
                }
                className="bg-orange-500/100 px-3 py-1 rounded"
              >
                SRH
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
