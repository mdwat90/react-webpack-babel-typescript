import { Button, Typography } from '@material-ui/core';
import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { connect } from 'react-redux';
import EditRecentStyles from './EditRecentStyles';
import { setLeftNavStepValue } from '../../../../actions/main_actions';
import { getSteps } from '../../components/CustomDrawer/components/LeftDrawer/components/NewDocLeftNav';
import { Announcements, Content, PrintDownload, Template } from './components';

interface RecentDocumentsProps extends RouteComponentProps {
  leftNavStepValue: number;
  setLeftNavStepValue: (step: number) => void;
}

const EditRecent = ({
  leftNavStepValue,
  setLeftNavStepValue,
}: RecentDocumentsProps) => {
  const classes = EditRecentStyles();
  const steps = getSteps();

  const handleSubmit = () => {
    navigate('recents', { replace: true });
  };

  const handleNext = (navStep: any) => {
    console.log('save-document');
    if (navStep === steps.length - 1) {
      handleSubmit();
    }
    setLeftNavStepValue(leftNavStepValue + 1);
  };

  const handleBack = () => {
    setLeftNavStepValue(leftNavStepValue - 1);
  };

  const returnComponent = (step: any): any => {
    switch (step) {
      case 0:
        return <Template />;
      case 1:
        return <Content />;
      case 2:
        return <Announcements />;
      case 3:
        return <PrintDownload />;
      default:
        <div />;
    }
  };
  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <div>{returnComponent(leftNavStepValue)}</div>
        {leftNavStepValue < 4 && (
          <div>
            <Button disabled={leftNavStepValue === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNext(leftNavStepValue)}
            >
              {leftNavStepValue === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { leftNavStepValue } = state.mainReducer;
  return {
    leftNavStepValue: leftNavStepValue,
  };
};

const actionCreators = {
  setLeftNavStepValue,
};

export default connect(mapStateToProps, actionCreators)(EditRecent);
