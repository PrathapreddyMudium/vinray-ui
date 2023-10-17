import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Full Stack Developer',
    price: '3500000',
    features: ['Springboot', 'Java', 'SQL', 'Docker', 'Micro Services'],
    link: 'https://www.google.com'
  },
  {
    id: 2,
    plan: 'DevOps Engineer',
    price: '4000000',
    features: ['Docker', 'Git', 'Kubernetes', 'Jenkins', 'Ansible'],
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    plan: 'Test Automation Engineer',
    price: '2500000',
    features: ['Selenium', 'Java', 'ALM', 'Jenkins', 'Git'],
    link: 'https://www.twitter.com'
  }
]
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
function AppPricing() {
  return (
    <section id="careers" className="block careers-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Careers</h2>
          <div className="subtitle">check out current job openings</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>CTC: {formatter.format(pricing.price/100000)} lakhs</span>
                  </div>
                  <div className='content'>
                    <b>Skills Required:</b>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>Order Now</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;