import './Services.scss';
import {FaCocktail} from 'react-icons/fa';
import {FaHiking} from 'react-icons/fa';
import {FaShuttleVan} from 'react-icons/fa';


export const Services = () => {
    const data=[
        {
           icon: <FaCocktail/>,
           title: "free cocktails",
           p: "lorem ipsump doctor sit amet consectetcher adipsicing eit alias euis fdreretrtr"
        },
        {
            icon: <FaHiking/>,
            title: "endless hiking",
            p: "lorem ipsump doctor sit amet consectetcher adipsicing eit alias euis fdreretrtr"
        },
        {
            icon: <FaShuttleVan/>,
            title: "free shuttle",
            p: "lorem ipsump doctor sit amet consectetcher adipsicing eit alias euis fdreretrtr"
        },
        {
            icon: <FaShuttleVan/>,
            title: "free cocktails",
            p: "lorem ipsump doctor sit amet consectetcher adipsicing eit alias euis fdreretrtr"
        }
    ]

  return (
    <>
<div className="Services text-center container">
<div className="info row d-flex">
<h1>Services</h1>

{
    data.map((item,index)=>{
        return(
          <div key={index} className="serv col-xl-3 col-md-6 col-sm-12 mt-5 gap-5">
           <h2> {item.icon}</h2>
           <h3>{item.title}</h3>
           <p>{item.p}</p>
          </div>
        )
      })
}
</div>
</div>
    </>
  )
}