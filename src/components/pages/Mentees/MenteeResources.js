import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const MenteeResources = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <a href="https://www.w3schools.com" target="_blank">
            <img
              alt="Khan Academy"
              src="https://cdn.kastatic.org/images/khan-logo-dark-background-2.png"
              style={{ width: 240 }}
            />
          </a>
        }
      >
        <Meta
          title="Khan Academy"
          description="Learning platform"
          href="https://www.w3schools.com"
          target="_blank"
        />
      </Card>
      <h2>Hi</h2>
    </div>
  );
};

export default MenteeResources;
