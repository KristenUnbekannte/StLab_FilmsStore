import deepOrange from '@material-ui/core/colors/deepOrange';

export default styles => ({
  root: {
    width: "100%",
  },
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '5px 5px 25px 5px',
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: deepOrange[500],
    marginRight: 20
  },
  button: {
    backgroundColor: deepOrange[500],
  },
  input: {
    width: '80%',
  },
  progress: {
    marginTop: 100,
    textAlign: 'center'
  },
  commentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});
