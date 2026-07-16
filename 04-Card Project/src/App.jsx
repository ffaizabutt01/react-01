import React from 'react'
import Card from "./components/Card";
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wz08Df6nAUKSTeIfwYS4SI9QIOgRI7AsEMKuWYP-zR5qSGhv5dRMrxhy&s=10",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$62/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrRUjtu-Eq85yZmbVWSBrZ6HcOxOcJ6f9ayMD_dXNg1KyN1U7wXBGrYlu&s=10",
    company: "Apple",
    datePosted: "5 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQ2C7aWuSkI5ROuHwYY9jRrGPvM9zrmrvHTNnbBmrhnQkugbP0r_cSume&s=10",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YQ9jGHlcCzsr903MD0k_3NjDU9XjKUpiwwUdoAi8Kg&s",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$66/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodNTPQrBw6frG0BPXUrOee81xMdSiz4NN2PnUrEsjcg&s=10",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
    company: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IDSAeUMv8rLQ9XlzIjofu0Ytkzly500Ycm01SzuKVg&s",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$84/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEifGC0ccN8OIrNieADdKrYbPk0N91HQb2N8jx5eyWQ&s=10",
    company: "OpenAI",
    datePosted: "5 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  }
];

  return (
    <div className='Parent'>
      {jobOpenings.map(function(elem,idx){

      return  <div key={idx}>
        <Card company={elem.company} brandLogo={elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      </div>

      })}
    </div>

  )
}

export default App
