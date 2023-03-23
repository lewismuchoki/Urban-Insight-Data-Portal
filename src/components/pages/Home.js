import React from "react";
import { Container, Button, Form, FormControl } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      {/* Landing section */}
      <div className='mt-4 text-black rounded'>
      <Container>
          <h1>Welcome to Urban Insight Open Data Platform</h1>
          <p>A platform to explore, share, reuse, download and contribute to open datasets, publishers, and events.</p>
        </Container>
      </div>

      {/* Search bar */}
      <Container>
        <Form className="mb-5">
          <FormControl type="text" placeholder="Search for datasets..." className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Container>

      {/* Featured content */}
      <Container>
        <h2>Featured Datasets</h2>
        <h2>Featured Publishers</h2>
        <h2>Featured Events</h2>
      </Container>

    </div>
  );
}
