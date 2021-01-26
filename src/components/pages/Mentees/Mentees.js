//dependencies
import React, { useEffect, useState } from 'react';
import { Button, Divider, Input, List, Avatar, Tag } from 'antd';
import { connect } from 'react-redux';

//actions
import { checkToken, fetchMentees } from '../../../state/actions/index';

//components
import MenteeModal from './MenteeModal';

const Mentees = props => {
  //deconstructs mentee list from redux
  let menteesSelection = [...props.mentees].filter(
    mentee => mentee.account_status === 'Inactive'
  );
  //deconstructs fetchMentees from redux
  const { fetchMentees } = props;

  //initializes state
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentMentee, setCurrentMentee] = useState({});

  //opens and closes MenteeForm in MenteeModal
  const editingHandler = () => setEditing(!editing);

  //updates search state value
  const searchHandler = e => setSearch(e.target.value);

  //opens and closes MenteeModal
  const moreInfoHandler = (e, menteeData) => {
    if (showModal) {
      setShowModal(false);
      setCurrentMentee({});
      setEditing(false);
    } else {
      setShowModal(true);
      setCurrentMentee(menteeData);
    }
  };

  //handles search bar filtering logic
  if (Array.isArray(menteesSelection)) {
    menteesSelection = menteesSelection.filter(
      item =>
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  //fetches mentee list on initial render
  useEffect(() => {
    fetchMentees();
  }, [fetchMentees]);

  return (
    <div className="menteeContainer">
      <h1 id="menteeTitle">Mentee Sign Up</h1>
      <div className="exploreWrapper">
        <Button
          style={{ width: '80%', marginBottom: '10pt', alignSelf: 'center' }}
          align="center"
        >
          Create Account
        </Button>
        <Input.Search
          value={search}
          placeholder="Search by Name"
          style={{ width: '80%', alignSelf: 'center' }}
          onChange={searchHandler}
        />
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={menteesSelection}
          renderItem={item => (
            <List.Item>
              <div className="listItemWrapper">
                <div className="listItemMeta">
                  <List.Item.Meta
                    avatar={<Avatar src={item.mentee_picture} />}
                    title={
                      <span
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        {item.first_name + ' ' + item.last_name}{' '}
                        <Tag
                          color={
                            item.account_status === 'Inactive'
                              ? 'error'
                              : 'success'
                          }
                        >
                          {item.account_status}
                        </Tag>
                      </span>
                    }
                    description={item.academic_description}
                  />
                  <span></span>
                </div>
                <div className="listItemButtonWrapper">
                  <Button
                    onClick={e => moreInfoHandler(e, item)}
                    className="listItemButton"
                    size="middle"
                    type="default"
                  >
                    More Info
                  </Button>
                  <Button
                    onClick={e => {
                      moreInfoHandler(e, item);
                      editingHandler();
                    }}
                    className="listItemButton"
                    size="middle"
                    type="default"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </List.Item>
          )}
        />
        ,
      </div>
      <MenteeModal
        showModal={showModal}
        editing={editing}
        editingHandler={editingHandler}
        moreInfoHandler={moreInfoHandler}
        currentMentee={currentMentee}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mentees: state.menteeReducer.mentees,
    userId: state.authReducer.userId,
    role: state.authReducer.role,
  };
};

export default connect(mapStateToProps, { checkToken, fetchMentees })(Mentees);
