import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
		<Container>
			<Row>
				<Col md={12}>
					<h1 className="text-center">Test!</h1>
				</Col>
			</Row>
		</Container>
  );
}

export default App;