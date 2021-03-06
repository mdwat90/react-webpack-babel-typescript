import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  toggleLeftDrawer,
  toggleRightDrawer,
  setLeftNavStepValue,
} from '../../../actions/main_actions';
import RecentsCardStyles from './RecentsCardStyles';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import mainReducer from '../../../reducers/main_reducer';

// import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

interface SimpleCardProps {
  title: any;
  path: any;
  icon: any;
  toggleRightDrawer: (bool: boolean) => any;
  toggleLeftDrawer: (bool: boolean) => any;
  setLeftNavStepValue: (step: number) => any;
}

const SimpleCard = ({
  title,
  path,
  icon,
  toggleRightDrawer,
  toggleLeftDrawer,
  setLeftNavStepValue,
}: SimpleCardProps) => {
  const classes = RecentsCardStyles();

  const navAndClose = () => {
    // toggleRightDrawer(false);
    navigate(path);
  };
  return (
    <Card className={classes.root} onClick={() => navAndClose()}>
      <CardContent>
        <Typography component="h2" className={classes.title}>
          {title}
        </Typography>
        <h1 className={classes.icon}>{icon}</h1>
      </CardContent>
    </Card>
  );
};

const actionCreators = {
  toggleRightDrawer,
  toggleLeftDrawer,
  setLeftNavStepValue,
};

export default connect(null, actionCreators)(SimpleCard);
