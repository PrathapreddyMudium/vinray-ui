import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Lonely Path",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/images/img3.jpg"),
    title: "Photographer Girl",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/images/img4.jpg"),
    title: "The Difference",
    subtitle: "Web Design",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../assets/images/img5.jpg"),
    title: "Nature Patterns",
    subtitle: "Branding",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../assets/images/img6.jpg"),
    title: "The Difference",
    subtitle: "Photography",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../assets/images/img7.jpg"),
    title: "Winter Sonata",
    subtitle: "Web Design",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: require("../assets/images/img8.jpg"),
    title: "Lonely Path",
    subtitle: "Branding",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: require("../assets/images/img9.jpg"),
    title: "Appreciation",
    subtitle: "Photography",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Happy Days",
    subtitle: "Web Design",
  },
];
function AppWorks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [works, setWorks] = useState(worksData);
  const [activePage, setActivePage] = useState(1);
  let active = activePage;
  let PageSize = 3;
  let numberOfPages = Math.ceil(worksData.length / PageSize);
  let items = [];
  const handleOnclick = (e) => {
    //window.onclick = e => {
    const data = e.target.innerText;
    const pageNumber = data.split("\n")[0];
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
    //}
  };
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={handleOnclick}
      >
        {number}
      </Pagination.Item>
    );
  }

  // var listItems = document.querySelectorAll("ul li"); // this returns an array of each li
  // listItems.forEach(function(item) {
  //   item.onclick = function(e) {
  //     const currentPage = this.innerText
  //      //console.log(currentPage);
  //     const firstPageIndex = (currentPage - 1) * PageSize;
  //     const lastPageIndex = firstPageIndex + PageSize;
  //      const worksData1 = worksData.slice(firstPageIndex,lastPageIndex);
  //      setWorks(worksData1)
  //       // this returns clicked li's value
  //   }
  // });

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const worksData1 = worksData.slice(firstPageIndex, lastPageIndex);
    setWorks(worksData1);
  }, [currentPage, PageSize]);

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {works.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <div className="portfolio-wrapper">
                  <a href={works.link}>
                    <Image src={works.image} />
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
}

export default AppWorks;
