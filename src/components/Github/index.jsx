import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Row from 'react-bootstrap/Row';

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar 
            username="tarikbulbul"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
        />
    </Row>
  )
}

export default Github;