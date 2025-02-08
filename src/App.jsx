import Second from "./Second";
import img1 from './img1.png'; // adjust the path as needed
import img2 from './img2.png'; // adjust the path as needed
import img3 from './img3.png'; // adjust the path as needed
import img4 from './img3(1).png'; // adjust the path as needed
import img5 from './img4.png'; // adjust the path as needed

function App() {
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold underline">
        First Layour
      </h1>

      <div className="container flex flex-row">


        <div class="grid grid-cols-1 gap-30 p-4">
          <div className="border-0 h-dvh w-2xl bg-blue-200 overflow-hidden rounded-lg">
            <img src={img1} alt="Description of the image"/>
          </div>
        </div>


        <div class="grid grid-cols-1 gap-3 p-4">

          <div className="border-0 h-56 w-3xl  ml-40 bg-blue-300 overflow-hidden rounded-lg">
          <img src={img2} alt="Description of the image" className="object-contain w-3xl"/>
          </div>


          <div className="flex flex-row  w-190 gap-4  ml-40">
            <div className="border-0 h-56 w-96 bg-blue-500  overflow-hidden rounded-lg  ">
            <img src={img3} alt="Description of the image"/>
            </div>
            <div className="border-0 h-56 w-96 bg-blue-500 overflow-hidden rounded-lg  ">
            <img src={img4} alt="Description of the image"/>
            </div>
          </div>


          <div className="border-0 h-56 w-3xl  ml-40 bg-blue-800 overflow-hidden rounded-lg  ">
          <img src={img5} alt="Description of the image" className="object-contain "/>
          </div>
        </div>

      </div>

      <Second/>
    </>
  );
}

export default App;
