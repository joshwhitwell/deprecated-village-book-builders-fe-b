import React from 'react';
import { Card } from 'antd';
import './MenteeResources.css';

const { Meta } = Card;

const MenteeResources = () => {
  return (
    <div>
      <div className="menteeResourcesTitle">
        <h1>Available Online Resources</h1>
      </div>
      <div className="menteeResources">
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.khanacademy.org/math/k-8-grades"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Khan Academy"
                  src="https://pbs.twimg.com/profile_images/1122934185570852865/leT97MR8.png" //This looks weird... might be due to it being a landscape photo.. or rather the other ones looks weird
                />
              </a>
            }
          >
            <Meta
              style={{ height: 100 }}
              title="Khan Academy"
              description="Math videos and exercises for K-8"
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.youtube.com/user/crashcourse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Crash Course"
                  src="https://d43fweuh3sg51.cloudfront.net/media/collections/Crash-Course-collection-feature-image-500x500.jpg"
                  style={{
                    width: 300,
                    height: 300,
                  }}
                />
              </a>
            }
          >
            <Meta
              style={{ height: 100 }}
              title="Crash Course"
              description="Video channel covering a variety of subjects.  Find fun and educational videos to learn from!"
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.ixl.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="IXL"
                  src="https://www.ixl.com/dv3/jYg5YEjxG5lJfNjwW0r4Kw8lo5g/yui3/opengraph/assets/square_og_ixl.png"
                />
              </a>
            }
          >
            <Meta
              title="IXL"
              description="Math and language arts help for all age groups, the website is categorized by grade."
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.notion.so/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Notion"
                  src="https://i.pinimg.com/474x/5f/5c/91/5f5c916b12b4957e957f368ca2e983fe.jpg"
                />
              </a>
            }
          >
            <Meta
              title="Notion"
              description="Mentees and mentors are encouraged to journal (self-authoring), set/review goals. They log in with their google accounts."
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.k5learning.com/free-worksheets-for-kids"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="K-5 Learning"
                  src="https://d3mw6k1m1fi1qr.cloudfront.net/S1W-8r_8fZe173x-3S-p1Nn_O6_6ML-zwKr46LSH9ypHMLGxL1_400.jpg"
                />
              </a>
            }
          >
            <Meta
              title="K-5 Learning"
              description="Worksheets for math, language arts, reading comprehension, spelling, and grammar."
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.math-drills.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Math drills"
                  src="https://maji-production-store-assets.imgix.net/548acdd828289218f8cbc45e8caa1db4d346ebac88b6d5f0011b61eb4a16?ixlib=rails-4.1.0&auto=format&fit=crop&dpr=2.0&h=170&w=170"
                />
              </a>
            }
          >
            <Meta
              title="Math Drills"
              description="Provides math worksheets for addition, subtraction, multiplication, division, geometry, integers, real numbers, and more."
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.splashlearn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Splash Math"
                  src="https://edsurge.imgix.net/uploads/product/image/851/SplashLearn_Square_logo_lockup-1603481543.jpg?auto=compress%2Cformat&w=480&h=480&fit=crop"
                />
              </a>
            }
          >
            <Meta
              title="Splash Math"
              description="Fun Math Activities for Kids!"
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://englishforeveryone.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="English For Everyone"
                  src="https://edsurge.imgix.net/uploads/product/image/1506/FBRT-1456779904.png?auto=compress%2Cformat&w=480&h=480&fit=crop"
                />
              </a>
            }
          >
            <Meta
              title="English for Everyone"
              description="Worksheets for nouns, verbs, grammatical prepositions, punctuation, sentence construction.
              "
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://idroo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="idroo"
                  src="https://learntoteachonlineormakevideotutorials.files.wordpress.com/2015/09/idroo.png"
                />
              </a>
            }
          >
            <Meta
              title="IDroo"
              description="Online Whiteboard tool.  Must sign up to use."
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://drive.google.com/drive/folders/1AXJpdiK8olp6XmailMvD0eazY9UKTFUs?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="VBB Resources"
                  src="https://res.cloudinary.com/dktp1ybbx/image/upload/f_auto,fl_lossy,q_auto/v1589577839/organization/prod/1182363/gr5NA9a3ux.png"
                />
              </a>
            }
          >
            <Meta
              title="Additional Resources"
              description="Various Resources compiled by VBB"
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Google"
                  src="https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
                />
              </a>
            }
          >
            <Meta
              title="Google Search"
              description="Many questions can be answered on Google.  Try searching for answers!"
              style={{ height: 100 }}
            />
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <a
                href="http://oer2go.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="OfflineResourcesToGo"
                  src="https://media-exp1.licdn.com/dms/image/C560BAQFmxAff3nBvUQ/company-logo_200_200/0/1538150443024?e=2159024400&v=beta&t=6qq9ehThzt6_3-trwmin5HhXp20alPcE4UwagGDFWrM"
                />
              </a>
            }
          >
            <Meta
              title="Offline Resources"
              description="A collection of tools and apps for offline, digital education on the local server"
              style={{ height: 100 }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MenteeResources;
