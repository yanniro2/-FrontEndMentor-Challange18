import "./index.css"
import data from "./Data"
import user1 from "./img/user-1.jpg"
function App()
{
  const Notification = data.map((datas) =>
  (
    <div key={datas.id} className={datas.read ? "p-2 rounded-md mb-2 flex gap-2 items-start" : " bg-Very-light-grayish-blue p-2 rounded-md mb-1 flex gap-2 items-center"} >
      < img src={datas.img} alt="user img" className="w-[2rem] h-[2rem] object-cover rounded-full m-1" />
      <div className="details relative w-full">
        <div className="inline-block text-[13px] group mr-1">
          <h3 className="font-lg font-Jakarta inline mr-1 hover:text-Blue transition-all cursor-pointer">{datas.name}</h3>
          {datas.action && <span className="text-Dark-grayish-blue mr-1">{datas.action}</span>}
          {datas.section && <span className=" text-Dark-grayish-blue font-lg mr-1 hover:text-Blue transition-all cursor-pointer">{datas.section}</span>}
          {datas.group && <span className="text-Blue font-lg mr-1">{datas.group}</span>}
          {!datas.read && <div className="bg-Red w-2 h-2 rounded-full mr-1 inline-block"></div>}
        </div>
        <div className="text-[12px] text-Dark-grayish-blue mr-1  ">{datas.time}</div>
        {datas.message && <p className="text-[12px] p-3 border-[1px] rounded-sm border-Light-grayish-blue-1 m-1 text-Dark-grayish-blue hover:bg-Light-grayish-blue-2 transition-all cursor-pointer">{datas.message}</p>}
        {datas.comment && <img src={datas.comment} alt="comment img" className="absolute w-10 h-10 object-cover right-0 top-0 z-20 cursor-pointer hover:drop-shadow-md hover:-top-[1px]" />}
      </div>


    </div >
  ));
  return (
    <div className="App w-screen h-screen flex justify-center items-center bg-Very-light-grayish-blue font-Jakarta text-ms">
      <div className="w-1/2 h-10/12 bg-White drop-shadow-md rounded-md flex flex-col p-5 gap-3 Mobile:w-full Mobile:p-3" >
        <div className="heading h-[20%]  flex items-center justify-between">
          <h2 className="font-lg text-Very-dark-blue text-1] ">Notifications <span className=" bg-Blue px-2 py-0 text-White rounded-md ml-3">3</span></h2>
          <div className="text-[12px] text-Dark-grayish-blue hover:text-Blue transition-all cursor-pointer">
            Mark all as read
          </div>
        </div>

        <div className="main w-full max-h-[80%]">
          {Notification}
        </div>
      </div>

    </div>
  );
}

export default App;
