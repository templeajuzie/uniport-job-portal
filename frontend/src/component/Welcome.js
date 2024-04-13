import { Grid, Typography } from '@material-ui/core';

const styles = {
  root: {
    padding: '30px',
    minHeight: '93vh',
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.summitproperties.ca/wp-content/uploads/2023/05/Small-Office-Layout.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontSize: '4rem',
    marginBottom: '1rem',
    color: 'white',
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: '#3F51B5', // Button color
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    marginTop: '30px',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
    transition: '0.3s',
  },
};

function Welcome() {
  return (
    <Grid
      container
      item
      direction='column'
      alignItems='center'
      justify='center'
      style={styles.root}>
      <Grid item style={{ textAlign: 'center' }}>
        <Typography variant='h2' style={styles.title}>
          Welcome to Job Portal
        </Typography>
        <Typography variant='body1' style={styles.subtitle}>
          Discover amazing features and services that await you.
        </Typography>
        <button
          color='primary'
          size='large'
          style={styles.button}>
          Get Started
        </button>
      </Grid>
    </Grid>
  );
}

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction='column'
      alignItems='center'
      justify='center'
      style={{ padding: '30px', minHeight: '93vh' }}>
      <Grid item>
        <Typography variant='h2'>Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
