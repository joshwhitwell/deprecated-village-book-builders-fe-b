import React from 'react';
import { Card } from 'antd';
import '../Headmaster/HeadmasterDashboard.css';

const { Meta } = Card;

const MenteeResources = () => {
  return (
    <div className="mentee_Resources">
      <div className="card_Container">
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
      <div className="card_Container">
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
      <div className="card_Container">
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
          <Meta title="IXL" description="Search topics and practice skills" />
        </Card>
      </div>
      <div className="card_Container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.notion.so/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Notion"
                src="https://i.pcmag.com/imagery/reviews/05FBstbqla0pEWrlFLTw4ML-5..1569474012.jpg"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="Notion"
            description="Track/Journal your progress.  Sign up with your google account"
          />
        </Card>
      </div>
      <div className="card_Container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.k5learning.com/free-worksheets-for-kids"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="K-5 Learning"
                src="https://d3mw6k1m1fi1qr.cloudfront.net/S1W-8r_8fZe173x-3S-p1Nn_O6_6ML-zwKr46LSH9ypHMLGxL1_400.jpg"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="K-5 Learning"
            description="Practice worksheets for grades K-5"
          />
        </Card>
      </div>
      <div className="card_Container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.math-drills.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Math drills"
                src="https://www.math-drills.com/images/pinterest/index.png"
                style={{ width: 240, height: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="Math Drills"
            description="Math worksheets for extra practice"
          />
        </Card>
      </div>
      <div className="card_Container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://www.splashlearn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Splash Math"
                src="https://cdn.splashmath.com/logo/splashlearn_logo_withbrandmark.jpg"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="Splash Math"
            description="Learning platform with reports and analytics on your progress"
          />
        </Card>
      </div>
      <div className="card_Container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://englishforeveryone.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="English For Everyone"
                src="https://www.dkefe.com/images/logo.png"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="English for Everyone"
            description="Various exercises to practice your english skills"
          />
        </Card>
      </div>
      <div className="card_Container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://idroo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="idroo"
                src="https://lh3.googleusercontent.com/proxy/goag__0iRmasqXbyIoD-wvDRFKKQRhi74q2ridqe3xL2-EAYBmtbdQZ5Ah0hElE2YmTIqK4IcBQ-ube9nDPmMBIvB3bey1tljNtS75OKY9ZydX9sfwD_Rfx4b8uihA"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="IDroo"
            description="Online Whiteboard tool.  Must sign up to use."
          />
        </Card>
      </div>
      <div className="card_Container">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <a
              href="https://drive.google.com/drive/folders/1AXJpdiK8olp6XmailMvD0eazY9UKTFUs?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="VBB Resources"
                src="https://res.cloudinary.com/dktp1ybbx/image/upload/f_auto,fl_lossy,q_auto/v1589577839/organization/prod/1182363/gr5NA9a3ux.png"
                style={{ width: 240 }}
              />
            </a>
          }
        >
          <Meta
            title="Additional Resources"
            description="Various Resources compiled by VBB"
          />
        </Card>
      </div>
      <div className="card_Container">
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
      <div className="card_Container">
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
