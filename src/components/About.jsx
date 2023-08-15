const About = ({ title = 'Google', children }) => {
  return (
    <div className="p-4 bg-orange-400 mb-3">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default About;
