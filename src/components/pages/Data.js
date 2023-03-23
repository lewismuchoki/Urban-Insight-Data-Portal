import React, { useState } from 'react';
import { Container, Form, FormControl, Button, Row, Col, Card, Pagination } from 'react-bootstrap';

const DatasetListing = () => {
  const [datasets, setDatasets] = useState([]); 

  return (
    <Container>
      {/* Search bar with filters */}
      <Form className="mb-5">
        <FormControl type="text" placeholder="Search for datasets..." className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>

      {/* Filter options */}
      <Row>
        <Col xs={12} md={3}>
          <h4>Filters</h4>
        </Col>

        {/* Dataset list */}
        <Col xs={12} md={9}>
          <Row>
            {datasets.map((dataset) => (
              <Col xs={12} md={6} lg={4} key={dataset.id}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{dataset.title}</Card.Title>
                    <Card.Text>{dataset.description}</Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated {dataset.dateUpdated}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Pagination */}
      <Pagination className="justify-content-center">
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
};

export default DatasetListing;
