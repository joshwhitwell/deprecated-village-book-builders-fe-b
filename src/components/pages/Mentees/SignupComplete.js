//dependencies
import React from 'react';
import { Button, Result } from 'antd';

//components
import { useHistory } from 'react-router-dom';

const SignupComplete = () => {
  const history = useHistory();
  return (
    <Result
      status="success"
      title="Thank you! Your form has been submitted."
      subTitle="You will be notified when your account has been approved."
      extra={[
        <Button
          type="primary"
          key="homeButton"
          onClick={() => history.push('/')}
        >
          Home
        </Button>,
      ]}
    />
  );
};

export default SignupComplete;
