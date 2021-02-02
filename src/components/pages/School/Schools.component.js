import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSchools } from '../../../state/actions/index';
import { StyledSchools } from './School.styles';
import School from './School.component';
import { ComponentTitle } from '../../common';

const Schools = props => {
  const { fetchSchools } = props;
  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);
  return (
    <StyledSchools>
      <ComponentTitle titleText="Schools" />
      {props.schools.map((s, i) => (
        <School school={s} key={i} />
      ))}
    </StyledSchools>
  );
};

const mapStateToProps = state => {
  return {
    schools: state.headmasterReducer.schoolData,
  };
};

export default connect(mapStateToProps, { fetchSchools })(Schools);
