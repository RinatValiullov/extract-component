let getDate = (date) => date.toLocaleDateString();

const text = 'Marah is a pretty and a little shying girl who lives in Syria. She likes JS more than life and will a strong developer very soon. Also she adores flexbox and bears.';

const user = {
  date: new Date(),
  text: text,
  person: {
    name: 'Marah Aboud',
    avaUrl: '../images/ava.jpg'
  }
};

/* Styles */
const portfolioStyles = {
  color: '#e4e4e4',
  fontFamily: '"Open Sans", sans-serif',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  margin: '0 auto',
  padding: '50px 0 0 0', 
  width: '500px'
};
const imageStyles = {
  height: '270px',
  transform: 'rotate(5deg)',
  width: '150px'
};
const headingStyles = {
  margin: '10px auto 0'
};
const userInfoStyles = {
  padding: '30px',
  backgroundColor: '#fba2c280',
  borderRadius: '10%',
  boxShadow: '2px 2px 10px 10px #f9e0e980, -2px -2px 10px 10px #f9e0e980'
};
const textStyles = {
  color: '#cbff93',
  fontFamily: 'Dosis, sans-serif',
  fontSize: '120%',
  fontStyle: 'italic',
  lineHeight: '1.6'
}
const spanStyles = {
  color: '#cbff93',
  fontSize: '80%',
  display: 'block',
  textAlign: 'right'
}

let Avatar = (props) => {
  return (
    <img style={imageStyles} className="Avatar"
      src={props.user.avaUrl}
      alt={props.user.name}
    />
  );
}

let UserInfo = (props) => {
  return (
    <div style={userInfoStyles} className="UserInfo">
      <Avatar user={props.user} />
      <h1 style={headingStyles} className="UserInfo-name">
        {props.user.name}
      </h1>
    </div>
  );
}


let Portfolio = (props) => {
  return (
    <div style={portfolioStyles} className="Portfolio">
      <UserInfo user={props.person} />
      <p style={textStyles} className="Comment-text">
        {props.text}
      </p>
      <p className="Comment-date">
        <span style={spanStyles}>
          {getDate(props.date)}
        </span>
      </p>
    </div>
  );
}

ReactDOM.render(
  <Portfolio
    person={user.person}
    text={user.text}
    date={user.date}
  />,
  document.getElementById('root')
);
