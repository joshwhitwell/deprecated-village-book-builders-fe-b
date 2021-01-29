import React from 'react';
import { Card } from 'antd';
import '../Headmaster/HeadmasterDashboard.css';

const { Meta } = Card;

const MenteeResources = () => {
  return (
    <div className="mentee_Resources">
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.khanacademy.org/math/k-8-grades"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Khan Academy"
                src="https://cdn.kastatic.org/images/khan-logo-dark-background-2.png" //This looks weird... might be due to it being a landscape photo.. or rather the other ones looks weird
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="Khan Academy"
            description="Click here to practice math!"
          />
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.youtube.com/user/crashcourse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Crash Course"
                src="https://d43fweuh3sg51.cloudfront.net/media/collections/Crash-Course-collection-feature-image-500x500.jpg"
                style={{ width: 240, height: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="Crash Course"
            description="Find fun videos to learn from!"
          />
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.ixl.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="IXL"
                src="https://www.ixl.com/dv3/jYg5YEjxG5lJfNjwW0r4Kw8lo5g/yui3/opengraph/assets/square_og_ixl.png"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta title="IXL" description="Learning platform" />
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Khan Academy"
                src="https://cdn.kastatic.org/images/khan-logo-dark-background-2.png"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta title="Khan Academy" description="Learning platform" />
        </Card>
      </div>
    </div>
  );
};

export default MenteeResources;
